import { DeleteForeverOutlined, SaveAltOutlined } from '@mui/icons-material';
import { Box, Button, TextField } from '@mui/material';
import { useList } from '@refinedev/core';
import { List } from '@refinedev/mui';
import { useForm } from '@refinedev/react-hook-form';
import { useEffect } from 'react';
import { cleanDatabase } from '../../utils/database';
import { SettingsDto } from '../../utils/dtos';

export const SettingsList = () => {
  const {
    register,
    saveButtonProps,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      openAIModel: '',
      openAIAPIKey: '',
    },
  });

  const { data } = useList({
    dataProviderName: 'settings',
    resource: 'settings',
  });

  const currentSettings = data?.data as any as SettingsDto;

  useEffect(() => {
    if (!currentSettings) return;
    const { openAIModel, openAIAPIKey } = currentSettings;
    setValue('openAIModel', openAIModel);
    setValue('openAIAPIKey', openAIAPIKey);
  }, [currentSettings, setValue]);

  return (
    <List
      title="Configurações"
      headerButtons={() => (
        <>
          <Button
            onClick={() => cleanDatabase()}
            variant="outlined"
            endIcon={<DeleteForeverOutlined />}
          >
            Limpar todos os dados
          </Button>
          <Button
            onClick={saveButtonProps.onClick}
            disabled={saveButtonProps.disabled}
            variant="contained"
            endIcon={<SaveAltOutlined />}
          >
            Salvar
          </Button>
        </>
      )}
    >
      <Box component={'form'} sx={{ display: 'flex', flexDirection: 'column' }}>
        <TextField
          {...register('openAIModel', {
            required: 'This field is required',
          })}
          error={!!(errors as any)?.openAIModel}
          helperText={(errors as any)?.openAIModel?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={'Modelo da OpenAI'}
          name="openAIModel"
          autoComplete="off"
        />
        <TextField
          {...register('openAIAPIKey', {
            required: 'This field is required',
          })}
          error={!!(errors as any)?.openAIAPIKey}
          helperText={(errors as any)?.openAIAPIKey?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="password"
          label={'API Key da OpenAI'}
          name="openAIAPIKey"
          autoComplete="new-password"
        />
      </Box>
    </List>
  );
};

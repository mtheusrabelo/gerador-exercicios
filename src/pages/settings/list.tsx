import { DeleteForeverOutlined, SaveAltOutlined } from '@mui/icons-material';
import { Box, Button, TextField } from '@mui/material';
import { useCreate, useList } from '@refinedev/core';
import { List } from '@refinedev/mui';
import { useForm } from '@refinedev/react-hook-form';
import { useState } from 'react';

export const SettingsList = () => {
  const {
    register,
    formState: { errors },
  } = useForm({});

  const { mutate } = useCreate();

  const { data } = useList({
    dataProviderName: 'settings',
    resource: 'settings',
  });

  const currentSettings = data?.data as any;

  const [openAIModel, setOpenAIModel] = useState(currentSettings?.openAIModel);
  const [openAIAPIKey, setOpenAIAPIKey] = useState(
    currentSettings?.openAIAPIKey,
  );
  const [prompt, setPrompt] = useState(currentSettings?.prompt);

  const saveSettings = () => {
    console.log('save');
    mutate(
      {
        resource: 'settings',
        values: {
          openAIModel,
          openAIAPIKey,
          prompt,
        },
      },
      {
        onSuccess: () => {
          console.log('success');
        },
        onError: () => {
          console.log('error');
        },
      },
    );
  };

  return (
    <List
      title="Configurações"
      headerButtons={() => (
        <>
          <Button variant="outlined" endIcon={<DeleteForeverOutlined />}>
            Limpar todos os dados
          </Button>
          <Button
            onClick={() => saveSettings()}
            variant="contained"
            endIcon={<SaveAltOutlined />}
          >
            Salvar
          </Button>
        </>
      )}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <TextField
          {...register('openAIModel', {
            required: 'This field is required',
          })}
          error={!!(errors as any)?.openAIModel}
          helperText={(errors as any)?.openAIModel?.message}
          margin="normal"
          fullWidth
          defaultValue={openAIModel}
          onChange={(e) => setOpenAIModel(e.target.value)}
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
          defaultValue={openAIAPIKey}
          onChange={(e) => setOpenAIAPIKey(e.target.value)}
          InputLabelProps={{ shrink: true }}
          type="password"
          label={'API Key da OpenAI'}
          name="openAIAPIKey"
          autoComplete="new-password"
        />
        <TextField
          {...register('prompt', {
            required: 'This field is required',
          })}
          error={!!(errors as any)?.prompt}
          helperText={(errors as any)?.prompt?.message}
          margin="normal"
          fullWidth
          defaultValue={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          InputLabelProps={{ shrink: true }}
          multiline
          label={'Prompt'}
          name="prompt"
          rows={4}
        />
      </Box>
    </List>
  );
};

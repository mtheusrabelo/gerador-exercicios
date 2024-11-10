import { DeleteForeverOutlined, SaveAltOutlined } from '@mui/icons-material';
import { Box, Button, TextField } from '@mui/material';
import { List } from '@refinedev/mui';
import { useForm } from '@refinedev/react-hook-form';

export const SettingsList = () => {
  const {
    register,
    formState: { errors },
  } = useForm({});

  return (
    <List
      title="Configurações"
      headerButtons={() => (
        <>
          <Button variant="outlined" endIcon={<DeleteForeverOutlined />}>
            Limpar dados
          </Button>
          <Button variant="contained" endIcon={<SaveAltOutlined />}>
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
          InputLabelProps={{ shrink: true }}
          type="text"
          label={'Modelo da OpenAI'}
          name="openAIModel"
          autoComplete="off"
        />
        <TextField
          {...register('openAIKey', {
            required: 'This field is required',
          })}
          error={!!(errors as any)?.openAIKey}
          helperText={(errors as any)?.openAIKey?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="password"
          label={'API Key da OpenAI'}
          name="openAIKey"
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

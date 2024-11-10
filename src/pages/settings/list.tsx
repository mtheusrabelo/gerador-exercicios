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
          <Button variant="outlined">Limpar dados</Button>
          <Button variant="contained">Salvar</Button>
        </>
      )}
    >
      <Box
        component="form"
        sx={{ display: 'flex', flexDirection: 'column' }}
        autoComplete="off"
      >
        <TextField
          {...register('openAIModel', {
            required: 'This field is required',
          })}
          error={!!(errors as any)?.title}
          helperText={(errors as any)?.title?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={'Modelo da OpenAI'}
          name="openAIModel"
        />
        <TextField
          {...register('openAIKey', {
            required: 'This field is required',
          })}
          error={!!(errors as any)?.title}
          helperText={(errors as any)?.title?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="password"
          label={'API Key da OpenAI'}
          name="openAIKey"
        />
        <TextField
          {...register('content', {
            required: 'This field is required',
          })}
          error={!!(errors as any)?.content}
          helperText={(errors as any)?.content?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          multiline
          label={'Prompt'}
          name="content"
          rows={4}
        />
      </Box>
    </List>
  );
};

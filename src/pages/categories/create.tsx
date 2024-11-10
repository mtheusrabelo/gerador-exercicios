import { SaveAltOutlined } from '@mui/icons-material';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Create } from '@refinedev/mui';
import { useForm } from '@refinedev/react-hook-form';

export const CategoryCreate = () => {
  const {
    saveButtonProps,
    refineCore: { formLoading },
    register,
    formState: { errors },
  } = useForm({});

  return (
    <Create
      title={<Typography variant="h5">Cadastrar categoria</Typography>}
      isLoading={formLoading}
      saveButtonProps={saveButtonProps}
      footerButtons={() => (
        <Button
          onClick={saveButtonProps.onClick}
          variant="contained"
          endIcon={<SaveAltOutlined />}
        >
          Salvar
        </Button>
      )}
    >
      <Box
        component="form"
        sx={{ display: 'flex', flexDirection: 'column' }}
        autoComplete="off"
      >
        <TextField
          {...register('name', {
            required: 'This field is required',
          })}
          error={!!(errors as any)?.name}
          helperText={(errors as any)?.name?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={'Nome'}
          name="name"
        />

        <TextField
          {...register('description', {
            required: 'This field is required',
          })}
          error={!!(errors as any)?.description}
          helperText={(errors as any)?.description?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={'Descrição'}
          name="description"
        />
      </Box>
    </Create>
  );
};

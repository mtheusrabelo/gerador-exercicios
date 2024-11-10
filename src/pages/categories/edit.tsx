import { Box, TextField, Typography } from '@mui/material';
import { Edit } from '@refinedev/mui';
import { useForm } from '@refinedev/react-hook-form';

export const CategoryEdit = () => {
  const {
    saveButtonProps,
    register,
    formState: { errors },
  } = useForm({});

  return (
    <Edit
      title={<Typography variant="h5">Editar categoria</Typography>}
      saveButtonProps={saveButtonProps}
      resource="categories"
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
    </Edit>
  );
};

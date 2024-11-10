import { AutoAwesome } from '@mui/icons-material';
import {
  Autocomplete,
  Box,
  Button,
  TextField,
  Typography,
} from '@mui/material';
import { Create, useAutocomplete } from '@refinedev/mui';
import { useForm } from '@refinedev/react-hook-form';
import { Controller } from 'react-hook-form';

export const ExerciseCreate = () => {
  const {
    refineCore: { formLoading },
    register,
    control,
    saveButtonProps,
    formState: { errors },
  } = useForm({});

  const { autocompleteProps: categoryAutocompleteProps } = useAutocomplete({
    dataProviderName: 'categories',
    resource: 'categories',
  });

  return (
    <Create
      title={<Typography variant="h5">Gerar exercício</Typography>}
      isLoading={formLoading}
      footerButtons={() => (
        <Button
          onClick={saveButtonProps.onClick}
          variant="contained"
          endIcon={<AutoAwesome />}
        >
          Gerar com IA
        </Button>
      )}
    >
      <Box
        component="form"
        sx={{ display: 'flex', flexDirection: 'column' }}
        autoComplete="off"
      >
        <Controller
          control={control}
          name={'category'}
          rules={{ required: 'This field is required' }}
          // eslint-disable-next-line
          defaultValue={null as any}
          render={({ field }) => (
            <Autocomplete
              {...categoryAutocompleteProps}
              {...field}
              onChange={(_, value) => {
                field.onChange(value);
              }}
              getOptionLabel={(item) => item?.name}
              isOptionEqualToValue={(option, value) => {
                const optionId = option?.id?.toString();
                const valueId =
                  typeof value === 'object'
                    ? value?.id?.toString()
                    : value?.toString();
                return value === undefined || optionId === valueId;
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={'Categoria'}
                  margin="normal"
                  variant="outlined"
                  error={!!(errors as any)?.category?.id}
                  helperText={(errors as any)?.category?.id?.message}
                  required
                />
              )}
            />
          )}
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

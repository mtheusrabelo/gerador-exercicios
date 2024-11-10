import { Box, Stack, Typography } from '@mui/material';
import { useOne, useShow } from '@refinedev/core';
import {
  DateField,
  Show,
  TextFieldComponent as TextField,
} from '@refinedev/mui';

export const ExerciseShow = () => {
  const { queryResult } = useShow({
    dataProviderName: 'exercises',
  });

  const { data, isLoading } = queryResult;

  const record = data?.data;

  const { data: categoryData } = useOne({
    dataProviderName: 'categories',
    id: record?.categoryId || '',
  });

  return (
    <Show
      title={<Typography variant="h5">Exibir exercício</Typography>}
      isLoading={isLoading}
    >
      <Stack gap={1}>
        <Typography variant="body1" fontWeight="bold">
          {'ID'}
        </Typography>
        <TextField value={record?.id} />

        <Typography variant="body1" fontWeight="bold">
          {'Descrição'}
        </Typography>
        <TextField value={record?.description} />

        <Typography variant="body1" fontWeight="bold">
          {'Enunciado'}
        </Typography>
        <TextField value={record?.statement} />

        <Typography variant="body1" fontWeight="bold">
          {'Alternativas'}
        </Typography>

        {record?.choices?.map((choice: string, index: number) => {
          return (
            <Box>
              <TextField key={index} value={choice} />
            </Box>
          );
        })}

        <Typography variant="body1" fontWeight="bold">
          {'Alternativa correta'}
        </Typography>

        <TextField value={record?.choices[0]} />

        <Typography variant="body1" fontWeight="bold">
          {'Categoria'}
        </Typography>
        <TextField value={categoryData?.data?.name} />

        <Typography variant="body1" fontWeight="bold">
          {'Data de criação'}
        </Typography>
        <DateField format="DD/MM/YYYY HH:mm:ss" value={record?.createdAt} />
      </Stack>
    </Show>
  );
};

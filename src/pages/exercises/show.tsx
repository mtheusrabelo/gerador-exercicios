import { Stack, Typography } from '@mui/material';
import { useOne, useShow } from '@refinedev/core';
import {
  DateField,
  MarkdownField,
  Show,
  TextFieldComponent as TextField,
} from '@refinedev/mui';

export const ExerciseShow = () => {
  const { queryResult } = useShow({});

  const { data, isLoading } = queryResult;

  const record = data?.data;

  const { data: categoryData, isLoading: categoryIsLoading } = useOne({
    resource: 'exercises',
    id: record?.category?.id || '',
    queryOptions: {
      enabled: !!record,
    },
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
          {'Enunciado'}
        </Typography>
        <TextField value={record?.statement} />

        <Typography variant="body1" fontWeight="bold">
          {'Alternativas'}
        </Typography>
        <MarkdownField value={record?.choices?.join(', ')} />

        <Typography variant="body1" fontWeight="bold">
          {'Categoria'}
        </Typography>
        <TextField value={record?.categoryName} />
        <Typography variant="body1" fontWeight="bold">
          {'CreatedAt'}
        </Typography>
        <DateField value={record?.createdAt} />
      </Stack>
    </Show>
  );
};

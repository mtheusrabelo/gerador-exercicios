import { Stack, Typography } from '@mui/material';
import { useShow } from '@refinedev/core';
import {
  DateField,
  Show,
  TextFieldComponent as TextField,
} from '@refinedev/mui';

export const CategoryShow = () => {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show
      title={<Typography variant="h5">Exibir categoria</Typography>}
      isLoading={isLoading}
      resource="categories"
    >
      <Stack gap={1}>
        <Typography variant="body1" fontWeight="bold">
          {'ID'}
        </Typography>
        <TextField value={record?.id} />
        <Typography variant="body1" fontWeight="bold">
          {'Nome'}
        </Typography>
        <TextField value={record?.name} />
        <Typography variant="body1" fontWeight="bold">
          {'Descrição'}
        </Typography>
        <TextField value={record?.description} />
        <Typography variant="body1" fontWeight="bold">
          {'Data de criação'}
        </Typography>
        <DateField format="DD/MM/YYYY HH:mm:ss" value={record?.createdAt} />
      </Stack>
    </Show>
  );
};

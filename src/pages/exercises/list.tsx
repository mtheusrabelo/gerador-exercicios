import { AutoAwesome, EditNoteOutlined } from '@mui/icons-material';
import { Alert, Button } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { ptBR } from '@mui/x-data-grid/locales';
import { useList } from '@refinedev/core';
import {
  DateField,
  DeleteButton,
  List,
  ShowButton,
  useDataGrid,
} from '@refinedev/mui';
import React from 'react';

export const ExerciseList = () => {
  const { dataGridProps } = useDataGrid({
    dataProviderName: 'exercises',
  });

  const { data: categoryData } = useList({
    dataProviderName: 'categories',
    resource: 'categories',
  });

  const columns = React.useMemo<GridColDef[]>(
    () => [
      {
        field: 'id',
        headerAlign: 'left',
        headerName: 'ID',
        type: 'number',
        maxWidth: 200,
      },
      {
        field: 'categoryId',
        headerAlign: 'left',
        headerName: 'Categoria',
        minWidth: 200,
        renderCell: function render({ value }) {
          const category = categoryData?.data?.find(
            (category) => category.id === value,
          );

          return <span>{category?.name}</span>;
        },
      },
      {
        field: 'statement',
        headerAlign: 'left',
        flex: 2,
        headerName: 'Enunciado',
        minWidth: 200,
      },
      {
        field: 'createdAt',
        headerAlign: 'left',
        headerName: 'Data de criação',
        minWidth: 180,
        renderCell: function render({ value }) {
          return <DateField format="DD/MM/YYYY HH:mm:ss" value={value} />;
        },
      },
      {
        field: 'actions',
        headerName: 'Ações',
        sortable: false,
        renderCell: function render({ row }) {
          return (
            <>
              <Button
                href="/categories/create"
                variant="outlined"
                endIcon={<EditNoteOutlined />}
              >
                Resolver
              </Button>
              <span>&nbsp;&nbsp;</span>
              <ShowButton hideText recordItemId={row.id} />
              <DeleteButton hideText recordItemId={row.id} />
            </>
          );
        },
        align: 'center',
        headerAlign: 'left',
        minWidth: 300,
      },
    ],
    [],
  );

  const hasAPIKey = true;

  if (!hasAPIKey) {
    return (
      <List headerButtons={() => <></>}>
        <Alert severity="warning">
          Você precisa cadastrar um modelo e API Key da OpenAI antes de gerar
          exercícios.
        </Alert>
      </List>
    );
  }

  return (
    <List
      headerButtons={[
        <Button
          href="/exercises/create"
          variant="contained"
          endIcon={<AutoAwesome />}
        >
          Gerar com IA
        </Button>,
      ]}
    >
      <DataGrid
        {...dataGridProps}
        columns={columns}
        autoHeight
        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
      />
    </List>
  );
};

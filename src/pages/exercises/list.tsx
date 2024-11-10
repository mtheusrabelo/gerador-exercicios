import { Alert } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { ptBR } from '@mui/x-data-grid/locales';
import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useDataGrid,
} from '@refinedev/mui';
import React from 'react';

export const ExerciseList = () => {
  const { dataGridProps } = useDataGrid({});

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
        field: 'category',
        headerAlign: 'left',
        headerName: 'Categoria',
        minWidth: 200,
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
        minWidth: 200,
      },
      {
        field: 'actions',
        headerName: 'Ações',
        sortable: false,
        renderCell: function render({ row }) {
          return (
            <>
              <EditButton hideText recordItemId={row.id} />
              <ShowButton hideText recordItemId={row.id} />
              <DeleteButton hideText recordItemId={row.id} />
            </>
          );
        },
        align: 'center',
        headerAlign: 'left',
        minWidth: 200,
      },
    ],
    [],
  );

  const hasAPIKey = false;

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
    <List>
      <DataGrid
        {...dataGridProps}
        columns={columns}
        autoHeight
        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
      />
    </List>
  );
};

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

export const CategoryList = () => {
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
        field: 'name',
        headerAlign: 'left',
        headerName: 'Nome',
        minWidth: 200,
      },
      {
        field: 'description',
        headerAlign: 'left',
        flex: 2,
        headerName: 'Descrição',
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

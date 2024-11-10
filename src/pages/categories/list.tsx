import { AddOutlined } from '@mui/icons-material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { ptBR } from '@mui/x-data-grid/locales';
import {
  DateField,
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useDataGrid,
} from '@refinedev/mui';
import React from 'react';

export const CategoryList = () => {
  const { dataGridProps } = useDataGrid({
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
    <List
      createButtonProps={{
        startIcon: null,
        endIcon: <AddOutlined />,
      }}
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

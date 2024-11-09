import { Box } from '@mui/material';
import { List } from '@refinedev/mui';

export const DashboadList = () => {
  return (
    <List title="Início" headerButtons={() => <></>}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          justifyContent: 'center',
        }}
      >
        Oi
      </Box>
    </List>
  );
};

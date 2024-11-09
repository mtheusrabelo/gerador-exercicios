import { Box } from '@mui/material';
import { List } from '@refinedev/mui';

export const SettingsList = () => {
  return (
    <List title="Configurações" headerButtons={() => <></>}>
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

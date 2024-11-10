import styled from '@emotion/styled';
import {
  AddModeratorOutlined,
  ThumbUpAltOutlined,
  VisibilityOutlined,
} from '@mui/icons-material';
import { Box } from '@mui/material';
import React from 'react';

const AppTitle = styled.div`
  font-size: 2rem;
`;

type ItemProps = {
  Icon: React.FC;
  title: string;
  description: string;
};

const Item = ({ Icon, title, description }: ItemProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Box>
        <Icon />
      </Box>
      <Box
        sx={{
          fontSize: '1rem',
          fontWeight: 600,
        }}
      >
        {title}
      </Box>
      <Box
        sx={{
          fontSize: '0.875rem',
        }}
      >
        {description}
      </Box>
    </Box>
  );
};

export const DashboadList = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 160px)',
        // backgroundColor: 'red',
        overflowY: 'hidden',
      }}
    >
      <Box
        sx={{
          width: '60%',
          backgroundColor: 'white',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            height: 120,
            justifyContent: 'left',
            alignItems: 'center',
          }}
        >
          <AppTitle>Gerador de Exercícios</AppTitle>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
          }}
        >
          <Item
            Icon={() => (
              <ThumbUpAltOutlined
                style={{
                  fontSize: '3rem',
                  color: '#3f51b5',
                }}
              />
            )}
            title={'Confiável'}
            description={
              'Essa aplicação é de código aberto, distribuída pela Cloudflare e fica inteiramente em seu navegador.'
            }
          />
          <Item
            Icon={() => (
              <AddModeratorOutlined
                style={{
                  fontSize: '3rem',
                  color: '#3f51b5',
                }}
              />
            )}
            title={'Privado'}
            description={
              'Você está no controle. Todos os seus dados são armazenados em seu dispositivo.'
            }
          />
          <Item
            Icon={() => (
              <VisibilityOutlined
                style={{
                  fontSize: '3rem',
                  color: '#3f51b5',
                }}
              />
            )}
            title={'Transparente'}
            description={
              'A política de privacidade e os termos de uso da Open AI se aplicam, pois ela é responsável por processar suas solicitações.'
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

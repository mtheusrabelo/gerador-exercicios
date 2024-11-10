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

const AppSubtitle = styled.div`
  font-size: 1.1rem;
`;

type ItemProps = {
  Icon: React.FC;
  Title: React.FC;
  Description: React.FC;
};

const Item = ({ Icon, Title, Description }: ItemProps) => {
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
        <Title />
      </Box>
      <Box
        sx={{
          fontSize: '0.875rem',
        }}
      >
        <Description />
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
        }}
      >
        <Box
          sx={{
            display: 'flex',
            height: 150,
            flexDirection: 'column',
            justifyContent: 'left',
            alignItems: 'center',
          }}
        >
          <AppTitle>Gerador de Exercícios</AppTitle>
          <AppSubtitle>Desenvolvido por Matheus Rabelo</AppSubtitle>
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
            Title={() => <span>Confiável</span>}
            Description={() => (
              <span>
                Essa aplicação é de{' '}
                <a
                  style={{ color: 'black' }}
                  href="https://github.com/mtheusrabelo/gerador-exercicios"
                >
                  código aberto
                </a>
                , distribuída pela Cloudflare e fica inteiramente em seu
                navegador.
              </span>
            )}
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
            Title={() => <span>Privado</span>}
            Description={() => (
              <span>
                Você está no controle. Todos os seus dados são armazenados em
                seu dispositivo.
              </span>
            )}
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
            Title={() => <span>Transparente</span>}
            Description={() => (
              <span>
                A{' '}
                <a
                  style={{ color: 'black' }}
                  href="https://openai.com/pt-BR/policies/row-privacy-policy/"
                >
                  política de privacidade
                </a>{' '}
                e os{' '}
                <a
                  style={{ color: 'black' }}
                  href="https://openai.com/pt-BR/policies/terms-of-use/"
                >
                  termos de uso
                </a>{' '}
                da OpenAI se aplicam, pois ela é responsável pela geração dos
                exercícios.
              </span>
            )}
          />
        </Box>
      </Box>
    </Box>
  );
};

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

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const Item = ({ Icon, Title, Description }: ItemProps) => {
  return (
    <ItemWrapper>
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
    </ItemWrapper>
  );
};

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 30px;
    flex-direction: column;
  }
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2;
  justify-content: center;
  align-items: center;
  padding-top: 60px;

  @media (min-width: 769px) {
    padding-top: 0;
    height: calc(100vh - 160px);
  }
`;

const ContentWrapper = styled.div`
  width: 60%;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const DashboadList = () => {
  return (
    <PageWrapper>
      <ContentWrapper>
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
        <ItemsWrapper>
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
                  style={{
                    fontWeight: 'bold',
                    color: 'grey',
                    textDecoration: 'underline',
                  }}
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
                  style={{
                    fontWeight: 'bold',
                    color: 'grey',
                    textDecoration: 'underline',
                  }}
                  href="https://openai.com/pt-BR/policies/row-privacy-policy/"
                >
                  política de privacidade
                </a>{' '}
                e os{' '}
                <a
                  style={{
                    fontWeight: 'bold',
                    color: 'grey',
                    textDecoration: 'underline',
                  }}
                  href="https://openai.com/pt-BR/policies/terms-of-use/"
                >
                  termos de uso
                </a>{' '}
                da OpenAI se aplicam, pois ela é responsável pela geração dos
                exercícios.
              </span>
            )}
          />
        </ItemsWrapper>
      </ContentWrapper>
    </PageWrapper>
  );
};

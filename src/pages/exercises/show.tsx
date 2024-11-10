import { StarOutlineOutlined } from '@mui/icons-material';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { useOne, useShow } from '@refinedev/core';
import {
  DateField,
  Show,
  TextFieldComponent as TextField,
} from '@refinedev/mui';
import { useMemo, useState } from 'react';

type SolvedChoice = {
  choice: string;
  isCorrect: boolean;
};

const getLetterByIndex = (index: number) => {
  return String.fromCharCode(65 + index);
};

export const ExerciseShow = () => {
  const { queryResult } = useShow({
    dataProviderName: 'exercises',
  });

  const { data, isLoading } = queryResult;

  const record = data?.data;

  const { data: categoryData } = useOne({
    dataProviderName: 'categories',
    id: record?.categoryId || '',
  });

  const choices: SolvedChoice[] = useMemo(() => {
    return (record?.choices || []).map((choice: string, index: number) => {
      return {
        choice,
        isCorrect: index === 0,
      };
    });
  }, [record]);

  const randomChoices = useMemo(() => {
    return choices
      .sort(() => Math.random() - 0.5)
      .map((choice: SolvedChoice, index: number) => {
        return {
          ...choice,
          choice: `${getLetterByIndex(index)}) ${choice.choice}`,
        };
      });
  }, [choices]);

  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);

  const getChoiceTheme = (
    isCorrect: boolean,
    hasAnySelected: boolean,
    isSelected: boolean,
  ) => {
    if (!hasAnySelected) {
      return {};
    }

    if (isSelected && isCorrect) {
      return {
        color: 'black',
        backgroundColor: 'lightgreen',
      };
    }

    if (isSelected && !isCorrect) {
      return {
        color: 'black',
        backgroundColor: 'red',
      };
    }

    return {};
  };

  return (
    <Show
      title={<Typography variant="h5">Resolver exercício</Typography>}
      isLoading={isLoading}
    >
      <Stack gap={1}>
        <Typography variant="body1" fontWeight="bold">
          {'ID'}
        </Typography>
        <TextField value={record?.id} />

        <Typography variant="body1" fontWeight="bold">
          {'Categoria'}
        </Typography>
        <TextField value={categoryData?.data?.name} />

        <Typography variant="body1" fontWeight="bold">
          {'Descrição'}
        </Typography>
        <TextField value={record?.description} />

        <Typography variant="body1" fontWeight="bold">
          {'Data de criação'}
        </Typography>
        <DateField format="DD/MM/YYYY HH:mm:ss" value={record?.createdAt} />

        <Typography variant="body1" fontWeight="bold">
          {'Questão'}
        </Typography>
        <TextField value={record?.statement} variant="h6" />

        <List>
          {randomChoices?.map(
            ({ choice, isCorrect }: SolvedChoice, index: number) => {
              const isSelected = selectedChoice === index;
              const hasAnySelected = selectedChoice !== null;

              return (
                <ListItem
                  sx={getChoiceTheme(isCorrect, hasAnySelected, isSelected)}
                  key={index}
                  disablePadding
                >
                  <ListItemButton
                    onClick={() => {
                      setSelectedChoice(index);
                    }}
                    component="a"
                    href="#simple-list"
                  >
                    {hasAnySelected && isCorrect && (
                      <ListItemIcon>
                        <StarOutlineOutlined />
                      </ListItemIcon>
                    )}
                    <ListItemText primary={choice} />
                  </ListItemButton>
                </ListItem>
              );
            },
          )}
        </List>
      </Stack>
    </Show>
  );
};

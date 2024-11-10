import { expect, test, vi } from 'vitest';

import { createExercisesProvider } from '../../src/providers/exercises.provider';
import { ExerciseService } from '../../src/services/exercise.service';
import { CategoryDto } from '../../src/utils/dtos';

test('Should be able to retrieve list of exercises', async () => {
  const pagination = {
    current: 2,
    pageSize: 3,
  };

  const getFn = vi.fn().mockResolvedValue([]);

  const exerciseService = {
    getAll: getFn,
  } as any as ExerciseService;

  const exerciseProvider = createExercisesProvider({ exerciseService });
  await exerciseProvider.getList({ pagination } as any);

  expect(getFn).toHaveBeenCalledWith(pagination);
});

test('Should be able to retrieve single exercise', async () => {
  const params = {
    id: '123',
  };

  const getFn = vi.fn().mockResolvedValue([]);

  const exerciseService = {
    getOne: getFn,
  } as any as ExerciseService;

  const exerciseProvider = createExercisesProvider({ exerciseService });
  await exerciseProvider.getOne(params as any);

  expect(getFn).toHaveBeenCalledWith(params.id);
});

test('Should be able to genereate exercise', async () => {
  const category: CategoryDto = {
    id: '123',
    name: 'Category',
    description: 'Description',
  };

  const variables = {
    category,
    description: 'Description',
  };

  const generateFn = vi.fn().mockResolvedValue(null);

  const exerciseService = {
    generate: generateFn,
  } as any as ExerciseService;

  const exerciseProvider = createExercisesProvider({ exerciseService });
  await exerciseProvider.create({ variables } as any);

  expect(generateFn).toHaveBeenCalledWith(
    variables.category,
    variables.description,
  );
});

test('Should be able to delete exercise', async () => {
  const params = {
    id: '123',
  };

  const deleteFn = vi.fn().mockResolvedValue(null);

  const exerciseService = {
    deleteOne: deleteFn,
  } as any as ExerciseService;

  const exerciseProvider = createExercisesProvider({ exerciseService });
  await exerciseProvider.deleteOne(params as any);

  expect(deleteFn).toHaveBeenCalledWith(params.id);
});

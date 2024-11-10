import { expect, test, vi } from 'vitest';

import { AIService } from '../../src/services/ai.service';
import { ExerciseService } from '../../src/services/exercise.service';
import { CategoryDto, ExerciseDto } from '../../src/utils/dtos';

test('Should be able to retrieve exercises paginated', async () => {
  const pagination = {
    current: 2,
    pageSize: 3,
  };

  const exerciseRepository: any = {};

  const orderByFn = vi.fn().mockReturnValue(exerciseRepository);
  const reverseFn = vi.fn().mockReturnValue(exerciseRepository);
  const offsetFn = vi.fn().mockReturnValue(exerciseRepository);
  const limitFn = vi.fn().mockReturnValue(exerciseRepository);
  const toArrayFn = vi.fn().mockResolvedValue([]);
  const countFn = vi.fn().mockResolvedValue(0);
  const getFn = vi.fn().mockResolvedValue(null);
  const addFn = vi.fn().mockResolvedValue(null);
  const updateFn = vi.fn().mockResolvedValue(null);
  const deleteFn = vi.fn().mockResolvedValue(null);

  exerciseRepository.orderBy = orderByFn;
  exerciseRepository.reverse = reverseFn;
  exerciseRepository.offset = offsetFn;
  exerciseRepository.limit = limitFn;
  exerciseRepository.toArray = toArrayFn;
  exerciseRepository.count = countFn;
  exerciseRepository.get = getFn;
  exerciseRepository.add = addFn;
  exerciseRepository.update = updateFn;
  exerciseRepository.delete = deleteFn;

  const repository = {
    exercises: exerciseRepository,
  };

  const aiService = {} as any as AIService;

  const exerciseService = new ExerciseService(repository, aiService);
  await exerciseService.getAll(pagination);

  expect(countFn).toHaveBeenCalled();
  expect(limitFn).toHaveBeenCalledWith(pagination.pageSize);
  expect(offsetFn).toHaveBeenCalledWith(
    pagination.pageSize * (pagination.current - 1),
  );
  expect(countFn).toHaveBeenCalled();
});

test('Should be able to retrieve given exercise', async () => {
  const exercise: ExerciseDto = {
    description: 'Description',
    statement: 'Statement',
    choices: ['Choice 1', 'Choice 2', 'Choice 3', 'Choice 4'],
    categoryId: '123',
  };

  const getFn = vi.fn().mockResolvedValue(exercise);

  const repository = {
    exercises: {
      get: getFn,
    },
  };

  const aiService = {} as any as AIService;

  const exerciseService = new ExerciseService(repository, aiService);
  const retrievedExercise = await exerciseService.getOne('123');

  expect(getFn).toHaveBeenCalled();
  expect(retrievedExercise.data).toStrictEqual(exercise);
});

test('Should be able to create exercise', async () => {
  const category: CategoryDto = {
    id: '123',
    name: 'Category',
    description: 'Description',
  };

  const exercise: ExerciseDto = {
    description: 'Description',
    statement: 'Statement',
    choices: ['Choice 1', 'Choice 2', 'Choice 3', 'Choice 4'],
    categoryId: '123',
  };

  const addFn = vi.fn().mockResolvedValue(null);
  const getFn = vi.fn().mockResolvedValue(exercise);
  const createCompletionFn = vi.fn().mockResolvedValue([]);

  const repository = {
    exercises: {
      add: addFn,
      get: getFn,
    },
  };

  const aiService = {
    createCompletion: createCompletionFn,
  } as any as AIService;

  const exerciseService = new ExerciseService(repository, aiService);
  await exerciseService.generate(category, exercise.description);

  expect(addFn).toHaveBeenCalled();
  expect(createCompletionFn).toHaveBeenCalled();
  expect(getFn).toHaveBeenCalled();
});

test('Should be able to delete exercise', async () => {
  const exercise: ExerciseDto = {
    description: 'Description',
    statement: 'Statement',
    choices: ['Choice 1', 'Choice 2', 'Choice 3', 'Choice 4'],
    categoryId: '123',
  };

  const deleteFn = vi.fn().mockResolvedValue(null);
  const getFn = vi.fn().mockResolvedValue(exercise);

  const repository = {
    exercises: {
      delete: deleteFn,
      get: getFn,
    },
  };

  const aiService = {} as any as AIService;

  const exerciseService = new ExerciseService(repository, aiService);
  await exerciseService.deleteOne(exercise.id as string);

  expect(deleteFn).toHaveBeenCalledWith(exercise.id);
  expect(getFn).toHaveBeenCalled();
});

import { DataProvider } from '@refinedev/core';
import { exerciseService, ExerciseService } from '../services/exercise.service';

type Props = {
  exerciseService: ExerciseService;
};

export const createExercisesProvider = ({
  exerciseService,
}: Props): DataProvider => {
  const exercisesProvider: DataProvider = {
    getList: async (params) => {
      const { resource, pagination, sorters, filters, meta } = params;
      console.log('exercisesProvider.getList', params);

      const result = await exerciseService.getAll(pagination);
      return result as any;
    },
    getOne: async (params) => {
      const { resource, id, meta } = params;
      console.log('exercisesProvider.getOne', params);

      return {
        data: {},
        total: 0,
      } as any;
    },
    create: async (params) => {
      const { resource, variables, meta } = params;
      console.log('exercisesProvider.create', params);

      const result = await exerciseService.generate(
        (variables as any)?.category,
        (variables as any)?.description,
      );
      return result as any;
    },
    update: async (params) => {
      const { resource, variables, meta } = params;
      console.log('exercisesProvider.update', params);

      return {
        data: {},
        total: 0,
      } as any;
    },
    deleteOne: async (params) => {
      const { resource, id, meta } = params;
      console.log('exercisesProvider.deleteOne', params);

      return {
        data: {},
        total: 0,
      } as any;
    },
    getApiUrl: () => '',
  };

  return exercisesProvider;
};

export const exercisesProvider = createExercisesProvider({ exerciseService });

import { DataProvider } from '@refinedev/core';
import { categoryService, CategoryService } from '../services/category.service';

type Props = {
  categoryService: CategoryService;
};

export const createCategoriesProvider = ({
  categoryService,
}: Props): DataProvider => {
  const categoriesProvider: DataProvider = {
    getList: async (params) => {
      const { resource, pagination, sorters, filters, meta } = params;

      const result = await categoryService.getAll(pagination);
      return result as any;
    },
    getOne: async (params) => {
      const { resource, id, meta } = params;

      const result = await categoryService.getOne(id as string);
      return result as any;
    },
    create: async (params) => {
      const { resource, variables, meta } = params;

      const result = await categoryService.create(variables as any);
      return result as any;
    },
    update: async (params) => {
      const { resource, id, variables, meta } = params;

      const result = await categoryService.update(
        id as string,
        variables as any,
      );
      return result as any;
    },
    deleteOne: async (params) => {
      const { resource, id, meta } = params;

      const result = await categoryService.deleteOne(id as string);
      return result as any;
    },
    getApiUrl: () => '',
  };

  return categoriesProvider;
};

export const categoriesProvider = createCategoriesProvider({ categoryService });

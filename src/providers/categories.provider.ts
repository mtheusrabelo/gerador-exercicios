import { DataProvider } from '@refinedev/core';
import { categoryService } from '../services/category.service';

export const categoriesProvider: DataProvider = {
  getList: async (params) => {
    const { resource, pagination, sorters, filters, meta } = params;
    console.log('categoriesProvider.getList', params);

    const result = await categoryService.getAll(pagination);
    return result as any;
  },
  getOne: async (params) => {
    const { resource, id, meta } = params;
    console.log('categoriesProvider.getOne', params);

    const result = await categoryService.getOne(id as string);
    return result as any;
  },
  create: async (params) => {
    const { resource, variables, meta } = params;
    console.log('categoriesProvider.create', params);

    const result = await categoryService.create(variables as any);
    return result as any;
  },
  update: async (params) => {
    const { resource, id, variables, meta } = params;
    console.log('categoriesProvider.update', params);

    const result = await categoryService.update(id as string, resource as any);
    return result as any;
  },
  deleteOne: async (params) => {
    const { resource, id, meta } = params;
    console.log('categoriesProvider.deleteOne', params);

    const result = await categoryService.deleteOne(id as string);
    return result as any;
  },
  getApiUrl: () => '',
};

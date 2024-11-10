import { DataProvider } from '@refinedev/core';
import { database } from '../utils/database';

export const exercisesProvider: DataProvider = {
  getList: async (params) => {
    const { resource, pagination, sorters, filters, meta } = params;
    console.log('exercisesProvider.getList', params);

    const data = [
      {
        id: '1',
        categoryId: '3',
        categoryName: 'Category 1',
        statement: 'Content 1',
        choices: [],
        createdAt: new Date().toISOString(),
      },
      {
        id: '2',
        categoryId: '3',
        categoryName: 'Category 2',
        statement: 'Content 2',
        choices: [],
        createdAt: new Date().toISOString(),
      },
    ];

    return {
      data,
      total: data.length,
    } as any;
  },
  getOne: async (params) => {
    const { resource, id, meta } = params;
    console.log('exercisesProvider.getOne', params);
    const data = await database.categories.get(id as string);

    return {
      data,
      total: data ? 1 : 0,
    } as any;
  },
  create: async (params) => {
    const { resource, variables, meta } = params;
    console.log('exercisesProvider.create', params);

    return {
      data: {},
      total: 0,
    } as any;
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

    const category = await database.categories.get(id as string);
    await database.categories.delete(id as string);

    return {
      data: category,
      total: category ? 1 : 0,
    } as any;
  },
  getApiUrl: () => '',
  custom: async (params) => {
    const { url, method, payload, meta } = params;
    console.log('exercisesProvider.custom', params);

    return {
      data: {},
      total: 0,
    } as any;
  },
};

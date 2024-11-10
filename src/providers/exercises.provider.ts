import { DataProvider } from '@refinedev/core';

export const exercisesProvider: DataProvider = {
  getList: async ({ resource, pagination, sorters, filters, meta }) => {
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
  getOne: async ({ resource, id, meta }) => {
    return {
      data: {},
      total: 0,
    } as any;
  },
  create: async ({ resource, variables, meta }) => {
    return {
      data: {},
      total: 0,
    } as any;
  },
  update: async ({ resource, variables, meta }) => {
    return {
      data: {},
      total: 0,
    } as any;
  },
  deleteOne: async ({ resource, id, meta }) => {
    return {
      data: {},
      total: 0,
    } as any;
  },
  getApiUrl: () => '',
  custom: async ({ url, method, payload, meta }) => {
    return {
      data: {},
      total: 0,
    } as any;
  },
};

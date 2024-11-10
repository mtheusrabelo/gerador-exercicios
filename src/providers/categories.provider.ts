import { DataProvider } from '@refinedev/core';

export const categoryProvider: DataProvider = {
  getList: async ({ resource, pagination, sorters, filters, meta }) => {
    console.log('categoryProvider.getList');
    return {
      data: [
        {
          id: '1',
          name: 'Category 1',
          description: 'Description 1',
          createdAt: new Date().toISOString(),
        },
        {
          id: '2',
          name: 'Category 2',
          description: 'Description 2',
          createdAt: new Date().toISOString(),
        },
      ],
      total: 2,
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

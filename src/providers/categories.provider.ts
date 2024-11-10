import { DataProvider } from '@refinedev/core';
import { database } from '../utils/database';

export const categoryProvider: DataProvider = {
  getList: async ({ resource, pagination, sorters, filters, meta }) => {
    console.log('categoryProvider.getList');

    // await database.categories.bulkPut([
    //   {
    //     id: generateGuid(),
    //     name: 'Category 1',
    //     description: 'Description 1',
    //     createdAt: new Date().toISOString(),
    //   },
    //   {
    //     id: generateGuid(),
    //     name: 'Category 20',
    //     description: 'Description 2',
    //     createdAt: new Date().toISOString(),
    //   },
    // ]);

    const data = await database.categories.toArray();

    return {
      data,
      total: data.length,
    } as any;
  },
  getOne: async ({ resource, id, meta }) => {
    const data = await database.categories.get(id as string);

    return {
      data,
      total: data ? 1 : 0,
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
    console.log('categoryProvider.deleteOne');
    console.log('id', id);
    const category = await database.categories.get(id as string);
    await database.categories.delete(id as string);

    return {
      data: category,
      total: category ? 1 : 0,
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

import { DataProvider } from '@refinedev/core';
import { database } from '../utils/database';

export const categoriesProvider: DataProvider = {
  getList: async (params) => {
    const { resource, pagination, sorters, filters, meta } = params;
    console.log('categoriesProvider.getList', params);

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
  getOne: async (params) => {
    const { resource, id, meta } = params;
    console.log('categoriesProvider.getOne', params);
    const data = await database.categories.get(id as string);

    return {
      data,
      total: data ? 1 : 0,
    } as any;
  },
  create: async (params) => {
    const { resource, variables, meta } = params;
    console.log('categoriesProvider.create', params);

    return {
      data: {},
      total: 0,
    } as any;
  },
  update: async (params) => {
    const { resource, variables, meta } = params;
    console.log('categoriesProvider.update', params);

    return {
      data: {},
      total: 0,
    } as any;
  },
  deleteOne: async (params) => {
    const { resource, id, meta } = params;
    console.log('categoriesProvider.deleteOne', params);

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
    console.log('categoriesProvider.custom', params);

    return {
      data: {},
      total: 0,
    } as any;
  },
};

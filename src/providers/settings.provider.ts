import { DataProvider } from '@refinedev/core';
import { database } from '../utils/database';

export const settingsProvider: DataProvider = {
  getList: async (params) => {
    const { resource, pagination, sorters, filters, meta } = params;
    console.log('settingsProvider.getList', params);
    const data: any = [];

    return {
      data,
      total: data.length,
    } as any;
  },
  getOne: async (params) => {
    const { resource, id, meta } = params;
    console.log('settingsProvider.getOne', params);
    const data = {};

    return {
      data,
      total: data ? 1 : 0,
    } as any;
  },
  create: async (params) => {
    const { resource, variables, meta } = params;
    console.log('settingsProvider.create', params);

    return {
      data: {},
      total: 0,
    } as any;
  },
  update: async (params) => {
    const { resource, variables, meta } = params;
    console.log('settingsProvider.update', params);

    return {
      data: {},
      total: 0,
    } as any;
  },
  deleteOne: async (params) => {
    const { resource, id, meta } = params;
    console.log('settingsProvider.deleteOne', params);

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
    console.log('settingsProvider.custom', params);

    return {
      data: {},
      total: 0,
    } as any;
  },
};

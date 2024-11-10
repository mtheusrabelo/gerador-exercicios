import { DataProvider } from '@refinedev/core';
import { settingsService } from '../services/settings.service';

export const settingsProvider: DataProvider = {
  getList: async (params) => {
    const { resource, pagination, sorters, filters, meta } = params;
    console.log('settingsProvider.getList', params);

    const result = await settingsService.get();
    return result as any;
  },
  getOne: async (params) => {
    const { resource, id, meta } = params;
    console.log('settingsProvider.getOne', params);

    return {
      data: {},
      total: 0,
    } as any;
  },
  create: async (params) => {
    const { resource, variables, meta } = params;
    console.log('settingsProvider.create', params);

    const result = await settingsService.save(variables as any);
    return result as any;
  },
  update: async (params) => {
    const { resource, variables, meta } = params;
    console.log('settingsProvider.update', params);

    const result = await settingsService.save(variables as any);
    return result as any;
  },
  deleteOne: async (params) => {
    const { resource, id, meta } = params;
    console.log('settingsProvider.deleteOne', params);

    return {
      data: {},
      total: 0,
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

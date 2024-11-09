import { DataProvider } from '@refinedev/core';

export const exerciseProvider: DataProvider = {
  getList: async ({ resource, pagination, sorters, filters, meta }) => {
    return {
      data: [],
      total: 0,
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

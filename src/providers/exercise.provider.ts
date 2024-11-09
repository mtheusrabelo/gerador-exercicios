import { DataProvider } from '@refinedev/core';

export const exerciseProvider: DataProvider = {
  getList: async ({ resource, pagination, sorters, filters, meta }) => {
    return {
      data: [],
      total: 0,
    };
  },
  getOne: async ({ resource, id, meta }) => {
    return {
      data: {},
      total: 0,
    };
  },
  create: async ({ resource, variables, meta }) => {
    return {
      data: {},
      total: 0,
    };
  },
  update: async ({ resource, variables, meta }) => {
    return {
      data: {},
      total: 0,
    };
  },
  deleteOne: async ({ resource, id, meta }) => {
    return {
      data: {},
      total: 0,
    };
  },
  getApiUrl: () => '',
  custom: async ({ resource, variables, meta }) => {
    return {
      data: {},
      total: 0,
    };
  },
};

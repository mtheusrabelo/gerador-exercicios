import { DataProvider } from '@refinedev/core';
import { settingsService, SettingsService } from '../services/settings.service';

type Props = {
  settingsService: SettingsService;
};

export const createSettingsProvider = ({
  settingsService,
}: Props): DataProvider => {
  const settingsProvider: DataProvider = {
    getList: async (params) => {
      const { resource, pagination, sorters, filters, meta } = params;

      const result = await settingsService.get();
      return result as any;
    },
    getOne: async (params) => {
      const { resource, id, meta } = params;

      return {
        data: {},
        total: 0,
      } as any;
    },
    create: async (params) => {
      const { resource, variables, meta } = params;

      const result = await settingsService.save(variables as any);
      return result as any;
    },
    update: async (params) => {
      const { resource, variables, meta } = params;

      const result = await settingsService.save(variables as any);
      return result as any;
    },
    deleteOne: async (params) => {
      const { resource, id, meta } = params;

      return {
        data: {},
        total: 0,
      } as any;
    },
    getApiUrl: () => '',
  };

  return settingsProvider;
};

export const settingsProvider = createSettingsProvider({ settingsService });

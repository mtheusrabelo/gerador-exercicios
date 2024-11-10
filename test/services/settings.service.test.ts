import { expect, test, vi } from 'vitest';

import {
  BASE_SETTINGS,
  SETTINGS_FIXED_ID,
  SettingsService,
} from '../../src/services/settings.service';
import { SettingsDto } from '../../src/utils/dtos';

test('Should be able to save settings when there are no settings available', async () => {
  const settings: SettingsDto = {
    openAIModel: 'openai-model',
    openAIAPIKey: 'openai-key',
  };

  const getFn = vi.fn().mockResolvedValue(null);
  const addFn = vi.fn().mockResolvedValue(null);
  const updateFn = vi.fn().mockResolvedValue(null);
  const countFn = vi.fn().mockResolvedValue(0);

  const repository = {
    settings: {
      get: getFn,
      add: addFn,
      update: updateFn,
      count: countFn,
    },
  };

  const settingsService = new SettingsService(repository);
  const savedSettings = await settingsService.save(settings);

  expect(countFn).toHaveBeenCalled();
  expect(addFn).toHaveBeenCalledWith({
    ...settings,
    id: SETTINGS_FIXED_ID,
  });
  expect(updateFn).toHaveBeenCalledWith(SETTINGS_FIXED_ID, settings);
  expect(savedSettings.id).toBe(SETTINGS_FIXED_ID);
});

test('Should be able to save settings when there are settings available', async () => {
  const settings: SettingsDto = {
    openAIModel: 'openai-model',
    openAIAPIKey: 'openai-key',
  };

  const getFn = vi.fn().mockResolvedValue(BASE_SETTINGS);
  const addFn = vi.fn().mockResolvedValue(null);
  const updateFn = vi.fn().mockResolvedValue(null);
  const countFn = vi.fn().mockResolvedValue(1);

  const repository = {
    settings: {
      get: getFn,
      add: addFn,
      update: updateFn,
      count: countFn,
    },
  };

  const settingsService = new SettingsService(repository);
  const savedSettings = await settingsService.save(settings);

  expect(countFn).toHaveBeenCalled();
  expect(addFn).not.toHaveBeenCalled();
  expect(updateFn).toHaveBeenCalledWith(SETTINGS_FIXED_ID, settings);
  expect(savedSettings.id).toBe(SETTINGS_FIXED_ID);
});

test('Should be able to retrieve base settings when there are no settings available', async () => {
  const getFn = vi.fn().mockResolvedValue(null);
  const addFn = vi.fn().mockResolvedValue(null);
  const updateFn = vi.fn().mockResolvedValue(null);
  const countFn = vi.fn().mockResolvedValue(0);

  const repository = {
    settings: {
      get: getFn,
      add: addFn,
      update: updateFn,
      count: countFn,
    },
  };

  const settingsService = new SettingsService(repository);
  const retrievedSettings = await settingsService.get();

  expect(countFn).not.toHaveBeenCalled();
  expect(addFn).not.toHaveBeenCalled();
  expect(getFn).toHaveBeenCalled();
  expect(updateFn).not.toHaveBeenCalled();
  expect(retrievedSettings.data).toBe(BASE_SETTINGS);
});

test('Should be able to retrieve base settings when there are settings available', async () => {
  const settings: SettingsDto = {
    openAIModel: 'openai-model',
    openAIAPIKey: 'openai-key',
  };

  const getFn = vi.fn().mockResolvedValue(settings);
  const addFn = vi.fn().mockResolvedValue(null);
  const updateFn = vi.fn().mockResolvedValue(null);
  const countFn = vi.fn().mockResolvedValue(0);

  const repository = {
    settings: {
      get: getFn,
      add: addFn,
      update: updateFn,
      count: countFn,
    },
  };

  const settingsService = new SettingsService(repository);
  const retrievedSettings = await settingsService.get();

  expect(countFn).not.toHaveBeenCalled();
  expect(addFn).not.toHaveBeenCalled();
  expect(getFn).toHaveBeenCalled();
  expect(updateFn).not.toHaveBeenCalled();
  expect(retrievedSettings.data).toBe(settings);
});

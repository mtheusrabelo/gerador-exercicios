import { expect, test, vi } from 'vitest';

import { createSettingsProvider } from '../../src/providers/settings.provider';
import { SettingsService } from '../../src/services/settings.service';

test('Should be able to retrieve settings', async () => {
  const getFn = vi.fn().mockResolvedValue([]);

  const settingsService = {
    get: getFn,
  } as any as SettingsService;

  const settingsProvider = createSettingsProvider({ settingsService });
  await settingsProvider.getList({} as any);

  expect(getFn).toHaveBeenCalled();
});

test('Should be able to save settings', async () => {
  const saveFn = vi.fn().mockResolvedValue([]);

  const settingsService = {
    save: saveFn,
  } as any as SettingsService;

  const settingsProvider = createSettingsProvider({ settingsService });
  await settingsProvider.create({} as any);

  expect(saveFn).toHaveBeenCalled();
});

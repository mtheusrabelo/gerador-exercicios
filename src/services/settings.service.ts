import { repository } from '../utils/database';
import { SettingsDto } from '../utils/dtos';

const FIXED_ID = '1';

class SettingsService {
  async get() {
    const data = await repository.settings.get(FIXED_ID);

    return {
      data,
      total: data ? 1 : 0,
    };
  }

  async save(settings: SettingsDto) {
    await repository.settings.update(FIXED_ID, settings);
    return {
      ...settings,
      id: FIXED_ID,
    };
  }
}

export const settingsService = new SettingsService();

import { repository } from '../utils/database';
import { SettingsDto } from '../utils/dtos';

const FIXED_ID = '1';

const BASE_SETTINGS = {
  openAIModel: 'gpt-4o-mini',
  openAIKey: '',
  prompt: `prompt`,
};

class SettingsService {
  async get() {
    const savedSettings = await repository.settings.get(FIXED_ID);
    const data = savedSettings || BASE_SETTINGS;

    return {
      data,
      total: data ? 1 : 0,
    };
  }

  async hasSettings() {
    const count = await repository.settings.count();
    return count > 0;
  }

  async save(settings: SettingsDto) {
    const hasSettings = await this.hasSettings();
    if (!hasSettings) {
      await repository.settings.add({ ...settings, id: FIXED_ID });
    }

    await repository.settings.update(FIXED_ID, settings);
    return {
      ...settings,
      id: FIXED_ID,
    };
  }
}

export const settingsService = new SettingsService();

import { repository } from '../utils/database';
import { SettingsDto } from '../utils/dtos';

export const SETTINGS_FIXED_ID = '1';

export const BASE_SETTINGS = {
  openAIModel: 'gpt-4o-mini',
  openAIAPIKey: '',
};

export class SettingsService {
  constructor(private readonly repository: any) {}

  async get() {
    const savedSettings = await this.repository.settings.get(SETTINGS_FIXED_ID);
    const data = savedSettings || BASE_SETTINGS;

    return {
      data,
      total: data ? 1 : 0,
    };
  }

  async hasSettings() {
    const count = await this.repository.settings.count();
    return count > 0;
  }

  async hasValidSettings() {
    const { data: settings } = await this.get();
    return settings.openAIAPIKey !== '' && settings.openAIModel !== '';
  }

  async save(settings: SettingsDto) {
    const hasSettings = await this.hasSettings();
    if (!hasSettings) {
      await this.repository.settings.add({
        ...settings,
        id: SETTINGS_FIXED_ID,
      });
    }

    await this.repository.settings.update(SETTINGS_FIXED_ID, settings);
    return {
      ...settings,
      id: SETTINGS_FIXED_ID,
    };
  }
}

export const settingsService = new SettingsService(repository);

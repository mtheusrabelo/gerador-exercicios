import { repository } from '../utils/database';
import { SettingsDto } from '../utils/dtos';

const FIXED_ID = '1';

const BASE_SETTINGS = {
  openAIModel: 'gpt-4o-mini',
  openAIAPIKey: '',
};

export class SettingsService {
  constructor(private readonly repository: any) {}

  async get() {
    const savedSettings = await this.repository.settings.get(FIXED_ID);
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
      await this.repository.settings.add({ ...settings, id: FIXED_ID });
    }

    await this.repository.settings.update(FIXED_ID, settings);
    return {
      ...settings,
      id: FIXED_ID,
    };
  }
}

export const settingsService = new SettingsService(repository);

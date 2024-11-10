import { repository } from '../utils/database';
import { aiService, AIService } from './ai.service';
import { SettingsService, settingsService } from './settings.service';

export class ExerciseService {
  constructor(
    private readonly repository: any,
    private readonly settingsService: SettingsService,
    private readonly aiService: AIService,
  ) {}

  async getAll() {
    const data = await this.repository.exercises.toArray();

    return {
      data,
      total: data.length,
    };
  }

  async getOne(id: string) {
    const data = await this.repository.exercises.get(id);

    return {
      data,
      total: data ? 1 : 0,
    };
  }

  async generate() {
    const isValid = await this.settingsService.hasValidSettings();
    if (!isValid) {
      throw new Error('Settings not found');
    }

    const settings = await this.settingsService.get();
    const { prompt } = settings.data;

    const completion = await this.aiService.createCompletion(
      prompt,
      'say hello world',
    );

    console.log('completion', completion);

    return {
      data: {},
      total: 0,
    };
  }

  async deleteOne(id: string) {
    const category = await this.repository.exercises.get(id);
    await this.repository.exercises.delete(id);

    return {
      data: category,
      total: category ? 1 : 0,
    };
  }
}

export const exerciseService = new ExerciseService(
  repository,
  settingsService,
  aiService,
);

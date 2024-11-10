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
    const exercise = await this.aiService.createCompletion(
      'Você cria exercícios de multipla escolha. A primeira alternativa é sempre a correta.',
      'Tema: Eleições dos EUA',
      {
        type: 'json_schema',
        json_schema: {
          name: 'exercise',
          schema: {
            type: 'object',
            properties: {
              choices: { type: 'array', items: { type: 'string' } },
              statement: { type: 'string' },
            },
            required: ['statement', 'choices'],
            additionalProperties: false,
          },
          strict: true,
        },
      },
    );

    console.log('completion', exercise);

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

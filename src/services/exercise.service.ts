import { Pagination } from '@refinedev/core';
import { repository } from '../utils/database';
import { CategoryDto, ExerciseDto } from '../utils/dtos';
import { generateGuid } from '../utils/generateGuid';
import { mountDatabasePagination } from '../utils/pagination';
import { aiService, AIService } from './ai.service';

type GeneratedExercise = {
  statement: string;
  choices: string[];
};

export class ExerciseService {
  constructor(
    private readonly repository: any,
    private readonly aiService: AIService,
  ) {}

  async getAll(pagination?: Pagination) {
    const { offset, limit } = mountDatabasePagination(pagination as any);

    const data = await this.repository.exercises
      .orderBy('createdAt')
      .reverse()
      .limit(limit)
      .offset(offset)
      .toArray();

    const total = await this.repository.exercises.count();

    return {
      data,
      total,
    };
  }

  async getOne(id: string) {
    const data = await this.repository.exercises.get(id);

    return {
      data,
      total: data ? 1 : 0,
    };
  }

  async generate(category: CategoryDto, description: string) {
    const systemPrompt = `
      Você é um assistent de IA que ajuda o aluno a fixar conteúdo criando exercícios de multipla escolha.
      O enunciado é retorado no campo statement.
      Você deve listar 4 alternativas de respostas no campo choices.
      A alternativa correta deverá ser sempre a primeira.
    `;

    const userPrompt = `
      ${category?.name && `Tema: ${category.name}`}
      ${category?.description && `Descrição do tema: ${category.description}`}
      ${description && `Descrição do exercício: ${description}`}
    `;

    const exercise = (await this.aiService.createCompletion(
      systemPrompt,
      userPrompt,
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
    )) as GeneratedExercise;

    console.log('completion', exercise);

    const id = generateGuid();
    const createdAt = new Date().toISOString();
    const newExercise: ExerciseDto = {
      id,
      createdAt,
      description,
      categoryId: category.id as string,
      choices: exercise.choices as string[],
      statement: exercise.statement as string,
    };

    console.log('newExercise', newExercise);

    await this.repository.exercises.add(newExercise);
    const data = await this.repository.exercises.get(id);

    return {
      data,
      total: data ? 1 : 0,
    };
  }

  async deleteOne(id: string) {
    const exercise = await this.repository.exercises.get(id);
    await this.repository.exercises.delete(id);

    return {
      data: exercise,
      total: exercise ? 1 : 0,
    };
  }
}

export const exerciseService = new ExerciseService(repository, aiService);

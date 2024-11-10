import { repository } from '../utils/database';

export class ExerciseService {
  constructor(private readonly repository: any) {}

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

  async deleteOne(id: string) {
    const category = await this.repository.exercises.get(id);
    await this.repository.exercises.delete(id);

    return {
      data: category,
      total: category ? 1 : 0,
    };
  }
}

export const exerciseService = new ExerciseService(repository);

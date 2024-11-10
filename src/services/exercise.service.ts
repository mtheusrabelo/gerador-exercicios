import { repository } from '../utils/database';

class ExerciseService {
  async getAll() {
    const data = await repository.exercises.toArray();

    return {
      data,
      total: data.length,
    };
  }

  async getOne(id: string) {
    const data = await repository.exercises.get(id);

    return {
      data,
      total: data ? 1 : 0,
    };
  }

  async deleteOne(id: string) {
    const category = await repository.exercises.get(id);
    await repository.exercises.delete(id);

    return {
      data: category,
      total: category ? 1 : 0,
    };
  }
}

export const exerciseService = new ExerciseService();

import { repository } from '../utils/database';
import { CategoryDto } from '../utils/dtos';
import { generateGuid } from '../utils/generateGuid';

class CategoryService {
  async getAll() {
    const data = await repository.categories.toArray();

    return {
      data,
      total: data.length,
    };
  }

  async getOne(id: string) {
    const data = await repository.categories.get(id);

    return {
      data,
      total: data ? 1 : 0,
    };
  }

  async create(category: CategoryDto) {
    const id = generateGuid();
    const createdAt = new Date().toISOString();

    await repository.categories.add({ ...category, id, createdAt });
    const data = await repository.categories.get(id);

    return {
      data,
      total: data ? 1 : 0,
    };
  }

  async update(id: string, category: CategoryDto) {
    await repository.categories.update(id, category);
    const data = await repository.categories.get(category.id);

    return {
      data,
      total: data ? 1 : 0,
    };
  }

  async deleteOne(id: string) {
    const category = await repository.categories.get(id);
    await repository.categories.delete(id);

    return {
      data: category,
      total: category ? 1 : 0,
    };
  }
}

export const categoryService = new CategoryService();

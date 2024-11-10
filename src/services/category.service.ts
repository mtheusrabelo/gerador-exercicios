import { Pagination } from '@refinedev/core';
import { repository } from '../utils/database';
import { CategoryDto } from '../utils/dtos';
import { generateGuid } from '../utils/generateGuid';
import { mountDatabasePagination } from '../utils/pagination';

class CategoryService {
  async getAll(pagination?: Pagination) {
    const { offset, limit } = mountDatabasePagination(pagination as any);

    const data = await repository.categories
      .orderBy('createdAt')
      .reverse()
      .limit(limit)
      .offset(offset)
      .toArray();

    const total = await repository.categories.count();

    return {
      data,
      total,
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
    const newCategory = { ...category, id, createdAt };
    console.log('service newCategory', newCategory);

    await repository.categories.add(newCategory);
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

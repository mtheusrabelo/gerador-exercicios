import { Pagination } from '@refinedev/core';
import { repository } from '../utils/database';
import { CategoryDto } from '../utils/dtos';
import { generateGuid } from '../utils/generateGuid';
import { mountDatabasePagination } from '../utils/pagination';

export class CategoryService {
  constructor(private readonly repository: any) {}

  async getAll(pagination?: Pagination) {
    const { offset, limit } = mountDatabasePagination(pagination as any);

    const data = await this.repository.categories
      .orderBy('createdAt')
      .reverse()
      .limit(limit)
      .offset(offset)
      .toArray();

    const total = await this.repository.categories.count();

    return {
      data,
      total,
    };
  }

  async getOne(id: string) {
    const data = await this.repository.categories.get(id);

    return {
      data,
      total: data ? 1 : 0,
    };
  }

  async create(category: CategoryDto) {
    const id = generateGuid();
    const createdAt = new Date().toISOString();
    const newCategory = { ...category, id, createdAt };

    await this.repository.categories.add(newCategory);
    const data = await this.repository.categories.get(id);

    return {
      data,
      total: data ? 1 : 0,
    };
  }

  async update(id: string, category: CategoryDto) {
    await this.repository.categories.update(id, category);
    const data = await this.repository.categories.get(id);

    return {
      data,
      total: data ? 1 : 0,
    };
  }

  async deleteOne(id: string) {
    const category = await this.repository.categories.get(id);
    await this.repository.categories.delete(id);

    return {
      data: category,
      total: category ? 1 : 0,
    };
  }
}

export const categoryService = new CategoryService(repository);

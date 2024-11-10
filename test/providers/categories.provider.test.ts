import { expect, test, vi } from 'vitest';

import { createCategoriesProvider } from '../../src/providers/categories.provider';
import { CategoryService } from '../../src/services/category.service';
import { CategoryDto } from '../../src/utils/dtos';

test('Should be able to retrieve list of categories', async () => {
  const pagination = {
    current: 2,
    pageSize: 3,
  };

  const getFn = vi.fn().mockResolvedValue([]);

  const categoryService = {
    getAll: getFn,
  } as any as CategoryService;

  const categoryProvider = createCategoriesProvider({ categoryService });
  await categoryProvider.getList({ pagination } as any);

  expect(getFn).toHaveBeenCalledWith(pagination);
});

test('Should be able to retrieve single category', async () => {
  const params = {
    id: '123',
  };

  const getFn = vi.fn().mockResolvedValue([]);

  const categoryService = {
    getOne: getFn,
  } as any as CategoryService;

  const categoryProvider = createCategoriesProvider({ categoryService });
  await categoryProvider.getOne(params as any);

  expect(getFn).toHaveBeenCalledWith(params.id);
});

test('Should be able to retrieve create category', async () => {
  const variables: CategoryDto = {
    id: '123',
    name: 'Category',
    description: 'Description',
  };

  const createFn = vi.fn().mockResolvedValue(null);

  const categoryService = {
    create: createFn,
  } as any as CategoryService;

  const categoryProvider = createCategoriesProvider({ categoryService });
  await categoryProvider.create({ variables } as any);

  expect(createFn).toHaveBeenCalledWith(variables);
});

test('Should be able to retrieve update category', async () => {
  const variables: CategoryDto = {
    id: '123',
    name: 'Category',
    description: 'Description',
  };

  const updateFn = vi.fn().mockResolvedValue(null);

  const categoryService = {
    update: updateFn,
  } as any as CategoryService;

  const categoryProvider = createCategoriesProvider({ categoryService });
  await categoryProvider.update({ id: variables.id, variables } as any);

  expect(updateFn).toHaveBeenCalledWith(variables.id, variables);
});

test('Should be able to retrieve delete category', async () => {
  const params = {
    id: '123',
  };

  const deleteFn = vi.fn().mockResolvedValue(null);

  const categoryService = {
    deleteOne: deleteFn,
  } as any as CategoryService;

  const categoryProvider = createCategoriesProvider({ categoryService });
  await categoryProvider.deleteOne(params as any);

  expect(deleteFn).toHaveBeenCalledWith(params.id);
});

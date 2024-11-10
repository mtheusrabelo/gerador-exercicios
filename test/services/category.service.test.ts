import { expect, test, vi } from 'vitest';

import { CategoryService } from '../../src/services/category.service';
import { CategoryDto } from '../../src/utils/dtos';

test('Should be able to retrieve categories paginated', async () => {
  const pagination = {
    current: 2,
    pageSize: 3,
  };

  const categoryRepository: any = {};

  const orderByFn = vi.fn().mockReturnValue(categoryRepository);
  const reverseFn = vi.fn().mockReturnValue(categoryRepository);
  const offsetFn = vi.fn().mockReturnValue(categoryRepository);
  const limitFn = vi.fn().mockReturnValue(categoryRepository);
  const toArrayFn = vi.fn().mockResolvedValue([]);
  const countFn = vi.fn().mockResolvedValue(0);
  const getFn = vi.fn().mockResolvedValue(null);
  const addFn = vi.fn().mockResolvedValue(null);
  const updateFn = vi.fn().mockResolvedValue(null);
  const deleteFn = vi.fn().mockResolvedValue(null);

  categoryRepository.orderBy = orderByFn;
  categoryRepository.reverse = reverseFn;
  categoryRepository.offset = offsetFn;
  categoryRepository.limit = limitFn;
  categoryRepository.toArray = toArrayFn;
  categoryRepository.count = countFn;
  categoryRepository.get = getFn;
  categoryRepository.add = addFn;
  categoryRepository.update = updateFn;
  categoryRepository.delete = deleteFn;

  const repository = {
    categories: categoryRepository,
  };

  const categoryService = new CategoryService(repository);
  await categoryService.getAll(pagination);

  expect(countFn).toHaveBeenCalled();
  expect(limitFn).toHaveBeenCalledWith(pagination.pageSize);
  expect(offsetFn).toHaveBeenCalledWith(
    pagination.pageSize * (pagination.current - 1),
  );
  expect(countFn).toHaveBeenCalled();
});

test('Should be able to retrieve given category', async () => {
  const category: CategoryDto = {
    name: 'Category',
    description: 'Description',
  };

  const getFn = vi.fn().mockResolvedValue(category);

  const repository = {
    categories: {
      get: getFn,
    },
  };

  const categoryService = new CategoryService(repository);
  const retrievedCategory = await categoryService.getOne('123');

  expect(getFn).toHaveBeenCalled();
  expect(retrievedCategory.data).toStrictEqual(category);
});

test('Should be able to create category', async () => {
  const category: CategoryDto = {
    name: 'Category',
    description: 'Description',
  };

  const addFn = vi.fn().mockResolvedValue(null);
  const getFn = vi.fn().mockResolvedValue(category);

  const repository = {
    categories: {
      add: addFn,
      get: getFn,
    },
  };

  const categoryService = new CategoryService(repository);
  await categoryService.create(category);

  expect(addFn).toHaveBeenCalled();
  expect(getFn).toHaveBeenCalled();
});

test('Should be able to update category', async () => {
  const category: CategoryDto = {
    id: '123',
    name: 'Category',
    description: 'Description',
  };

  const updateFn = vi.fn().mockResolvedValue(null);
  const getFn = vi.fn().mockResolvedValue(category);

  const repository = {
    categories: {
      update: updateFn,
      get: getFn,
    },
  };

  const categoryService = new CategoryService(repository);
  await categoryService.update(category.id as string, category);

  expect(updateFn).toHaveBeenCalled();
  expect(getFn).toHaveBeenCalled();
});

test('Should be able to delete category', async () => {
  const category: CategoryDto = {
    id: '123',
    name: 'Category',
    description: 'Description',
  };

  const deleteFn = vi.fn().mockResolvedValue(null);
  const getFn = vi.fn().mockResolvedValue(category);

  const repository = {
    categories: {
      delete: deleteFn,
      get: getFn,
    },
  };

  const categoryService = new CategoryService(repository);
  await categoryService.deleteOne(category.id as string);

  expect(deleteFn).toHaveBeenCalledWith(category.id);
  expect(getFn).toHaveBeenCalled();
});

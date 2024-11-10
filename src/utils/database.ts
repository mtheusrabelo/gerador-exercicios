import { Dexie, type EntityTable } from 'dexie';

export type Category = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
};

export type Exercise = {
  id: string;
  title: string;
  statement: string;
  categoryId: string;
  createdAt: string;
};

export const database = new Dexie('Database') as Dexie & {
  categories: EntityTable<Category, 'id'>;
  exercises: EntityTable<Exercise, 'id'>;
};

database.version(1).stores({
  categories: 'id, name, description, createdAt',
  exercises: 'id, title, statement, categoryId, createdAt',
});

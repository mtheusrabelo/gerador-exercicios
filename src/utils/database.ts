import { Dexie, type EntityTable } from 'dexie';
import { CategoryDto, ExerciseDto, SettingsDto } from './dtos';

export const repository = new Dexie('Database') as Dexie & {
  categories: EntityTable<CategoryDto, 'id'>;
  exercises: EntityTable<ExerciseDto, 'id'>;
  settings: EntityTable<SettingsDto, 'id'>;
};

repository.version(1).stores({
  categories: 'id, name, description, createdAt',
  exercises: 'id, title, statement, categoryId, createdAt',
  settings: 'id, openAIModel, openAIKey, prompt',
});

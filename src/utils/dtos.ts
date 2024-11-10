export type CategoryDto = {
  id?: string;
  name: string;
  description: string;
  createdAt?: string;
};

export type ExerciseDto = {
  id?: string;
  description: string;
  statement: string;
  choices: string[];
  categoryId: string;
  createdAt?: string;
};

export type SettingsDto = {
  id?: string;
  openAIModel: string;
  openAIAPIKey: string;
};

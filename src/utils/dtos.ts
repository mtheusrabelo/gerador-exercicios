export type CategoryDto = {
  id?: string;
  name: string;
  description: string;
  createdAt?: string;
};

export type ExerciseDto = {
  id?: string;
  title: string;
  statement: string;
  categoryId: string;
  createdAt?: string;
};

export type SettingsDto = {
  id?: string;
  openAIModel: string;
  openAIAPIKey: string;
  prompt: string;
};

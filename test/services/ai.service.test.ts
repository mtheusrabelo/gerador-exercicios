import { expect, test, vi } from 'vitest';

import { AxiosInstance } from 'axios';
import { AIService } from '../../src/services/ai.service';
import { SettingsService } from '../../src/services/settings.service';
import { SettingsDto } from '../../src/utils/dtos';

test('Should be able create completion', async () => {
  const settings: SettingsDto = {
    openAIModel: 'openai-model',
    openAIAPIKey: 'openai-key',
  };

  const content = {
    completion: true,
  };

  const geSettingsFn = vi.fn().mockResolvedValue({ data: settings });
  const hasValidSettingsFn = vi.fn().mockResolvedValue(true);

  const settingsService = {
    get: geSettingsFn,
    hasValidSettings: hasValidSettingsFn,
  } as any as SettingsService;

  const axios = {
    request: vi.fn().mockResolvedValue({
      data: {
        choices: [
          {
            message: {
              content: JSON.stringify(content),
            },
          },
        ],
      },
    }),
  } as any as AxiosInstance;

  const systemPrompt = 'system-prompt';
  const userPrompt = 'user-prompt';
  const responseFormat = {};

  const aiService = new AIService(settingsService, axios);

  const completion = await aiService.createCompletion(
    systemPrompt,
    userPrompt,
    responseFormat,
  );

  expect(hasValidSettingsFn).toHaveBeenCalled();
  expect(geSettingsFn).toHaveBeenCalled();
  expect(axios.request).toHaveBeenCalled();
  expect(completion).toStrictEqual(content);
});

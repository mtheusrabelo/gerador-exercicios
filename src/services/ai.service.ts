import { OpenAI } from 'openai';
import { SettingsService, settingsService } from './settings.service';

const openai = new OpenAI({
  apiKey: '',
  // this SDK should be used in server, so it's safe to allow browser here
  dangerouslyAllowBrowser: true,
});

export class AIService {
  constructor(private readonly settingsService: SettingsService) {}

  async createCompletion(systemPrompt: string, userPrompt: string) {
    const isValid = await this.settingsService.hasValidSettings();
    if (!isValid) {
      throw new Error('Settings not found');
    }

    const settings = await this.settingsService.get();
    const { openAIKey, openAIModel } = settings.data;

    if (openai.apiKey !== openAIKey) {
      openai.apiKey = openAIKey;
    }

    const completion = await openai.chat.completions.create({
      model: openAIModel,
      response_format: {
        type: 'json_object',
      },
      messages: [
        { role: 'system', content: systemPrompt },
        {
          role: 'user',
          content: userPrompt,
        },
      ],
    });

    const message = completion.choices[0].message.content;
    return message;
  }
}

export const aiService = new AIService(settingsService);

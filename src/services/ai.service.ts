import Axios, { AxiosRequestConfig } from 'axios';
import { SettingsService, settingsService } from './settings.service';

const axios = Axios.create();

export class AIService {
  constructor(private readonly settingsService: SettingsService) {}

  async createCompletion(
    systemPrompt: string,
    userPrompt: string,
    responseFormat: object,
  ) {
    const isValid = await this.settingsService.hasValidSettings();
    if (!isValid) {
      throw new Error('Settings not found');
    }

    const settings = await this.settingsService.get();
    const { openAIAPIKey, openAIModel } = settings.data;

    const options: AxiosRequestConfig = {
      method: 'POST',
      url: 'https://api.openai.com/v1/chat/completions',
      headers: {
        Authorization: `Bearer ${openAIAPIKey}`,
        'content-type': 'application/json',
      },
      data: {
        model: openAIModel,
        messages: [
          {
            role: 'system',
            content: systemPrompt,
          },
          { role: 'user', content: userPrompt },
        ],
        response_format: responseFormat,
      },
    };

    const response = await axios.request(options);
    const choices = response.data.choices || [];

    console.log('choices', choices);

    let result = {};
    try {
      result = JSON.parse(choices[0]?.message?.content);
    } catch (err) {
      console.error('error', err);
    }

    console.log('result', result);
    return result;
  }
}

export const aiService = new AIService(settingsService);

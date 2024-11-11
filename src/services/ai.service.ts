import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { SettingsService, settingsService } from './settings.service';

export class AIService {
  constructor(
    private readonly settingsService: SettingsService,
    private readonly axios: AxiosInstance,
  ) {}

  async createCompletion(
    systemPrompt: string,
    userPrompt: string,
    responseFormat: object,
  ) {
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

    const response = await this.axios.request(options);
    const choices = response.data.choices || [];

    let result = {};
    try {
      result = JSON.parse(choices[0]?.message?.content);
    } catch (err) {
      console.error('Something went wrong while parsing response', err);
    }

    return result;
  }
}

const axios = Axios.create();
export const aiService = new AIService(settingsService, axios);

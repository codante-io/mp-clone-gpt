import OpenAI from 'openai';

const openai = (key: string): OpenAI => new OpenAI({
  apiKey: key,
});

export default openai;

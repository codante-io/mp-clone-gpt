import OpenAI from 'openai';

// USE A OPENAI API KEY PARA CRIAR UMA NOVA INSTÂNCIA
const openai = (key: string): OpenAI => new OpenAI({
  apiKey: key,
});

export default openai;

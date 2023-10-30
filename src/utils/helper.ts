import { v4 as uuidv4 } from 'uuid';
import { IResponse } from './types';

export const modelResponse = (role: string, content: string): IResponse => ({
  id: uuidv4(),
  role,
  content,
});

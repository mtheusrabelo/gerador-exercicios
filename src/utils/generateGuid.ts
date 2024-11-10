import { customAlphabet } from 'nanoid';

export const generateGuid = () => {
  const nanoid = customAlphabet('1234567890abcdef', 10);
  return nanoid();
};

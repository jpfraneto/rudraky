import { v4 as uuid } from 'uuid';

export const createUniqueId = () => {
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);
  return small_id;
};

export const getCurrentUrl = () => {
  let dev = process.env.NODE_ENV !== 'production';
  let { DEV_URL, PROD_URL } = process.env;
  return `${dev ? DEV_URL : PROD_URL}`;
};

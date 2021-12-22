import format from 'date-fns/format';
import formatISO from 'date-fns/formatISO';
import { DictionaryOptionsProps } from 'Models';
import { parseISO } from 'date-fns';

/**
 * Проверка объекта на пустоту
 * @param obj
 */
export const isEmpty = (obj: Object | undefined | null) => {
  return obj ? !Object.keys(obj).length : true;
};

/**
 * Получить значение Cookie по названию
 * @param name
 */
export const getCookie = (name: string) => {
  const results = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
  return results && results[2] ? unescape(results[2]) : '';
};

/**
 * Удалить Cookie по названию
 * @param name
 */
export const removeCookie = (name: string) => {
  document.cookie = `${name}=; max-age=0`;
};

/**
 * Получить дату в нужном формате
 * @param value
 * @param dateFormat
 */
export const getDate = (
  value?: string | Date | null,
  dateFormat: string = 'dd.MM.yyyy HH:mm:ss',
) => {
  if (typeof value === 'string' && Number.isNaN(parseISO(value).getTime())) return '';
  return value ? format(typeof value === 'string' ? parseISO(value) : value, dateFormat) : '';
};

/**
 * Получить дату в ISO
 * @param ISODate
 * @param hours
 * @param minutes
 */
export const getISODate = (ISODate: string | Date, hours: string, minutes: string) => {
  if (typeof ISODate === 'string') {
    const [date, month, year] = ISODate.split('.');
    return formatISO(
      new Date(+year || 0, +month - 1 || 0, +date || 0, +hours || 0, +minutes || 0, 0),
    );
  }

  return formatISO(
    new Date(
      ISODate.getFullYear(),
      ISODate.getMonth(),
      ISODate.getDate(),
      ISODate.getHours(),
      ISODate.getMinutes(),
      ISODate.getSeconds(),
    ),
  );
};

/**
 * Получить название записи из справочника по его значению
 * @param value
 * @param options
 */
export const getNameByOptionValue = (value: string, options: DictionaryOptionsProps[]) => {
  return options?.find((item: DictionaryOptionsProps) => item.value === value)?.label || '';
};

/**
 * Получить названия записей из справочника по его значению
 * @param value
 * @param options
 */
export const getNamesByMultiOptionValue = (value: string[], options: DictionaryOptionsProps[]) => {
  const fieldLabel = value?.reduce((arr: string[], item: string) => {
    const findResult = options.find((option) => option.value === item);
    if (findResult) arr.push(findResult.label);
    return arr;
  }, []);

  return fieldLabel?.join(', ');
};

/**
 * Сформировать объект по строке
 * @param obj
 * @param path
 * @param value
 * Пример: createObjectFromPath({}, 'a.b.c', 1); createObjectFromPath({}, ['d', 'e'], 2);
 */
export const createObjectFromPath = (obj: any, path: string | string[], value: string) => {
  let currentObj = obj;
  let currentPath = typeof path === 'string' ? path.split('.') : path;

  while (currentPath.length > 1) {
    const [head, ...tail] = currentPath;
    currentPath = tail;

    if (currentObj[head] === undefined) {
      currentObj[head] = {};
    }
    currentObj = currentObj[head];
  }
  currentObj[currentPath[0]] = value;

  return obj;
};

/**
 * Получить значение поля объекта по строке
 * @param obj
 * @param path
 * Пример: getValueObjectByPath({ a: { b: { c: 1 } } }, 'a.b.c');
 */
export const getValueObjectByPath = (obj: any, path: string | string[]) => {
  let currentObj = obj;
  const currentPath = typeof path === 'string' ? path.split('.') : path;

  for (let i = 0; i < currentPath.length; ++i) {
    if (currentObj[currentPath[i]] === undefined) {
      return undefined;
    }
    currentObj = currentObj[currentPath[i]];
  }
  return currentObj;
};

/**
 * Получить объект без пустых полей
 * @param obj
 */
export const removeEmpty = (obj: any) => {
  Object.entries(obj).forEach(([key, val]) => {
    if (
      (val && Array.isArray(val) && val.length === 0)
      || (val && Array.isArray(val) && !val[0])
    ) {
      delete obj[key];
    }
    return (
      (val && typeof val === 'object' && removeEmpty(val))
      || ((val === null || val === '') && delete obj[key])
    );
  });
  return obj;
};

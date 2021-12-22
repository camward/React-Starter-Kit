declare module 'Models' {
  export interface DictionaryOptionsProps {
    label: string;
    value: string;
  }

  export interface DictionaryProps {
    code: string;
    name: string;
    data: DictionaryOptionsProps[];
  }

  export interface DictionariesRecordsProps {
    [key: string]: DictionaryOptionsProps[];
  }

  export interface DictionariesProps {
    [key: string]: DictionaryProps;
  }
}

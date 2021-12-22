import { StateType, ActionType } from 'typesafe-actions';

declare module 'typesafe-actions' {
  // eslint-disable-next-line no-undef
  export type Store = StateType<typeof import('./index').default>;
  // eslint-disable-next-line no-undef
  export type RootState = StateType<ReturnType<typeof import('./root-reducer').default>>;
  // eslint-disable-next-line no-undef
  export type RootAction = ActionType<typeof import('./root-action').default>;

  interface Types {
    RootAction: RootAction;
  }
}

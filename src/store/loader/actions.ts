import { createAction } from 'typesafe-actions';

export const setLoader = createAction('SET_LOADER')<boolean>();

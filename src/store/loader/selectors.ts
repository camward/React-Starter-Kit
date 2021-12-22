import { RootState } from 'typesafe-actions';

export const getLoaderCounter = (state: RootState) => state?.loader;

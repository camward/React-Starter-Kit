import { createReducer } from 'typesafe-actions';
import { setLoader } from './actions';

export const loader = createReducer(0 as number).handleAction(
  setLoader,
  (loaderCounter, action) => (action.payload ? loaderCounter + 1 : loaderCounter + -1),
);

export default loader;

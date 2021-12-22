import { all } from 'redux-saga/effects';
import tasks from './tasks/sagas';

const rootSaga = function* root() {
  yield all([...tasks]);
};

export default rootSaga;

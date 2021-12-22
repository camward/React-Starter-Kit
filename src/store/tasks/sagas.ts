import { call, put, takeLatest, delay, fork } from 'redux-saga/effects';
import * as api from '../../api/tasks';
import { fetchTaskList, fetchTaskDetail } from './actions';
import { setLoader } from '../loader/actions';

function* tasksListWorker() {
  yield put(setLoader(true));
  try {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const {
      data: { tasks },
    } = yield call(api.getTasksList);
    yield delay(500);
    yield put(fetchTaskList.success({ tasks }));
  } catch (error) {
    yield put(fetchTaskList.success({ tasks: [] }));
    yield put(fetchTaskList.failure(error));
  } finally {
    yield put(setLoader(false));
  }
}

function* tasksListWatcher() {
  yield takeLatest(fetchTaskList.request, tasksListWorker);
}

function* tasksDetailWorker({ payload }: ReturnType<typeof fetchTaskDetail.request>) {
  yield put(setLoader(true));
  try {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const { data } = yield call(api.getTasksDetail, payload);
    yield delay(500);
    yield put(fetchTaskDetail.success(data));
  } catch (error) {
    yield put(fetchTaskDetail.success(null));
    yield put(fetchTaskDetail.failure(error));
  } finally {
    yield put(setLoader(false));
  }
}

function* tasksDetailWatcher() {
  yield takeLatest(fetchTaskDetail.request, tasksDetailWorker);
}

export default [fork(tasksListWatcher), fork(tasksDetailWatcher)];

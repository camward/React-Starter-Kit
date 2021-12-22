import { combineReducers } from 'redux';
import { TaskListItemProps, TaskDetailProps } from 'Models';
import { createReducer } from 'typesafe-actions';
import { fetchTaskList, fetchTaskDetail } from './actions';

export const tasksList = createReducer([] as TaskListItemProps[]).handleAction(
  [fetchTaskList.success],
  (state, action) => action.payload.tasks,
);

export const tasksDetail = createReducer({} as TaskDetailProps | null).handleAction(
  [fetchTaskDetail.success],
  (state, action) => action.payload,
);

export const tasksDataUploaded = createReducer(false as boolean)
  .handleAction(
    [
      fetchTaskList.success,
      fetchTaskList.failure,
      fetchTaskDetail.success,
      fetchTaskDetail.failure,
    ],
    () => true,
  )
  .handleAction([fetchTaskList.request, fetchTaskDetail.request], () => false);

const tasksReducer = combineReducers({
  list: tasksList,
  detail: tasksDetail,
  dataUploaded: tasksDataUploaded,
});

export default tasksReducer;

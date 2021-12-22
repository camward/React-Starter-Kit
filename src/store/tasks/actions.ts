import { createAsyncAction } from 'typesafe-actions';
import { TaskListProps, TaskDetailProps } from 'Models';

export const fetchTaskList = createAsyncAction(
  'FETCH_TASK_LIST_REQUEST',
  'FETCH_TASK_LIST_SUCCESS',
  'FETCH_TASK_LIST_FAILURE',
)<undefined, TaskListProps, string>();

export const fetchTaskDetail = createAsyncAction(
  'FETCH_TASK_DETAIL_REQUEST',
  'FETCH_TASK_DETAIL_SUCCESS',
  'FETCH_TASK_DETAIL_FAILURE',
)<string, TaskDetailProps | null, string>();

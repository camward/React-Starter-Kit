import { RootState } from 'typesafe-actions';
import { TaskListItemProps, TaskDetailProps } from 'Models';

export const getTaskList = (state: RootState) => state?.tasks?.list as TaskListItemProps[];
export const getTaskDetail = (state: RootState) => state?.tasks?.detail as TaskDetailProps;
export const getTaskDataUploaded = (state: RootState) => state?.tasks?.dataUploaded as boolean;

import axios from '../api/axios';
import CONFIG from '../config';
import MOCKS from '../__tests__/mocks';

const { API_URL, USE_MOCKS } = CONFIG;
const { TASK_LIST, TASK_DETAIL } = MOCKS;

export function getTasksList() {
  return USE_MOCKS ? { data: { tasks: [...TASK_LIST] } } : axios.get(`${API_URL}/tasks`);
}

export function getTasksDetail(payload: string) {
  return USE_MOCKS ? { data: { ...TASK_DETAIL } } : axios.get(`${API_URL}/task/${payload}`);
}

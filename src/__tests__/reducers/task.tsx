import { TaskDetailProps } from 'Models';
import { tasksList, tasksDetail } from '../../store/tasks/reducers';
import MOCKS from '../mocks';

describe('Task reducer', () => {
  it('Initial task list', () => {
    expect(
      tasksList(undefined, {
        type: 'FETCH_TASK_LIST_REQUEST',
        // payload: undefined,
      }),
    ).toHaveLength(0);
  });

  it('Get task list', () => {
    expect(
      tasksList([...MOCKS.TASK_LIST], {
        type: 'FETCH_TASK_LIST_REQUEST',
        // payload: undefined,
      }),
    ).toHaveLength(2);
  });

  it('Get task detail', () => {
    expect(
      tasksDetail(MOCKS.TASK_DETAIL as TaskDetailProps, {
        type: 'FETCH_TASK_DETAIL_REQUEST',
        payload: '1',
      }),
    ).toEqual(MOCKS.TASK_DETAIL);
  });

  it('Is detail task', () => {
    expect(
      tasksDetail(MOCKS.TASK_DETAIL as TaskDetailProps, {
        type: 'FETCH_TASK_DETAIL_REQUEST',
        payload: '3',
      }),
    ).toHaveProperty(['id'], '3');
  });
});

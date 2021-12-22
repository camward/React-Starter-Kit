import axios from '../../api/axios';
import * as api from '../../api/tasks';
import MOCKS from '../mocks';

jest.mock('axios', () => {
  return {
    create: jest.fn(() => ({
      get: jest.fn(),
      post: jest.fn(),
      put: jest.fn(),
      interceptors: {
        request: { use: jest.fn() },
      },
    })),
  };
});

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Task API', () => {
  it('Get task list', async () => {
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve([...MOCKS.TASK_LIST]));
    await expect(api.getTasksList()).resolves.toHaveLength(2);
    expect(mockedAxios.get).toHaveBeenCalled();
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
  });

  it('Get task detail', async () => {
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve(MOCKS.TASK_DETAIL));
    await expect(api.getTasksDetail('1')).resolves.toEqual(MOCKS.TASK_DETAIL);
    expect(mockedAxios.get).toHaveBeenCalled();
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
  });
});

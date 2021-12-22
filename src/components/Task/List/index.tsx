import React, { useCallback, useEffect } from 'react';
import { TaskListItemProps } from 'Models';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TaskListItem from './item';
import { fetchTaskList } from '../../../store/tasks/actions';
import { getTaskList, getTaskDataUploaded } from '../../../store/tasks/selectors';

const TaskList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const tasksList = useSelector(getTaskList);
  const isDataUploaded = useSelector(getTaskDataUploaded);

  useEffect(() => {
    dispatch(fetchTaskList.request());
  }, []);

  const goToDetailView = useCallback((taskId: string) => {
    history.push(`/task/${taskId}`);
  }, []);

  return (
    <>
      <h1>Список задач</h1>
      <ul>
        {!!tasksList?.length && (
          <>
            {tasksList.map((item: TaskListItemProps) => (
              <TaskListItem key={item.id} id={item.id} name={item.name} onClick={goToDetailView} />
            ))}
          </>
        )}
        {!tasksList?.length && isDataUploaded && <p>Результатов нет</p>}
      </ul>
    </>
  );
};

export default TaskList;

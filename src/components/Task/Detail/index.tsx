import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTaskDetail } from '../../../store/tasks/actions';
import { getTaskDetail, getTaskDataUploaded } from '../../../store/tasks/selectors';
import { isEmpty } from '../../../utils';
import useQueryParams from '../../../utils/hooks/useQueryParams';

interface URLParamsProps {
  id: string;
}

const TaskDetail = () => {
  const dispatch = useDispatch();
  const task = useSelector(getTaskDetail);
  const isDataUploaded = useSelector(getTaskDataUploaded);
  const taskId = useQueryParams('id');
  const { id } = useParams<URLParamsProps>();

  useEffect(() => {
    dispatch(fetchTaskDetail.request(id));
  }, []);

  return (
    <>
      {!isEmpty(task) && isDataUploaded && (
        <div>
          <h1>Карточка задачи</h1>
          <p>Query taskId: {taskId}</p>
          <p>Params Props id: {id}</p>
          <hr />
          <p>Id: {task.id}</p>
          <p>Name: {task.name}</p>
        </div>
      )}
      {isEmpty(task) && isDataUploaded && <p>Результатов нет</p>}
    </>
  );
};

export default TaskDetail;

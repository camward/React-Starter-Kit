import React, { FC, useCallback } from 'react';

interface TaskListItemProps {
  id: string;
  name: string;
  onClick?: Function;
}

const TaskListItem: FC<TaskListItemProps> = ({ id, name, onClick }: TaskListItemProps) => {
  const onClickHandler = useCallback(() => {
    if (onClick) {
      onClick(id);
    }
  }, [id]);

  return <li onClick={onClickHandler}>{name}</li>;
};

export default TaskListItem;

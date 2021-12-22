declare module 'Models' {
  export interface TaskListItemProps {
    id: string;
    name: string;
  }

  export interface TaskListProps {
    tasks: TaskListItemProps[];
  }

  export interface TaskDetailProps {
    id: string;
    name: string;
  }
}

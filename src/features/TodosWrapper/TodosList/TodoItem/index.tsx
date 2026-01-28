import {useCompleteTodo} from './hooks/useCompleteTodo';
import {useIncompleteTodo} from './hooks/useIncompleteTodo';

type TodoItemProps = {
  itemId: string;
  title: string;
  completed?: boolean;
};

export const TodoItem = ({itemId, title, completed = false}: TodoItemProps) => {
  const {mutate: mutateComplete} = useCompleteTodo();
  const {mutate: mutateIncomplete} = useIncompleteTodo();

  const handleOnClick = () => {
    const mutate = completed ? mutateIncomplete : mutateComplete;
    mutate({params: {path: {id: itemId}}});
  };

  return (
    <li>
      <label htmlFor={itemId}>
        <input id={itemId} type="checkbox" onClick={handleOnClick} checked={completed} />
        {title}
      </label>
    </li>
  );
};

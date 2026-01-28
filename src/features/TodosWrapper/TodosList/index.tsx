import {Separator, Spacer, Text, VStack} from '@chakra-ui/react';
import {useTodos} from './hooks/useTodos';
import {TodoItem} from './TodoItem';

export const TodosList = () => {
  const {data, isLoading} = useTodos();

  if (isLoading) return <div>Loading...</div>;

  if (!data) return null;

  const completed = data.todos.filter((todo) => todo.completed);
  const nonCompleted = data.todos.filter((todo) => !todo.completed);

  return (
    <VStack w="100%" alignItems="flex-start">
      <Text fontWeight="bold">To-do</Text>
      <Separator borderColor="red" />
      <ul>
        {nonCompleted.map(({title, id}) => (
          <TodoItem key={id} itemId={id} title={title} />
        ))}
      </ul>

      <Spacer />

      <Text fontWeight="bold">Completed</Text>
      <Separator />
      <ul>
        {completed.map(({title, id}) => (
          <TodoItem key={id} itemId={id} title={title} completed />
        ))}
      </ul>
    </VStack>
  );
};

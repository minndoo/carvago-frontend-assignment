import {Card} from '@chakra-ui/react';
import {TodosList} from './TodosList';
import {TodosHeaderWrapper} from './TodosWrapperHeader';

export const TodosWrapper = () => (
  <Card.Root w="100%" p="6" gap="6">
    <Card.Header>
      <TodosHeaderWrapper />
    </Card.Header>
    <Card.Body>
      <TodosList />
    </Card.Body>
  </Card.Root>
);

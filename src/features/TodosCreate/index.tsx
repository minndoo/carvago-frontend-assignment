import {Card, HStack, IconButton, Image, Text} from '@chakra-ui/react';
import {useRouter} from '@tanstack/react-router';
import {TodosCreateForm} from './TodosCreateForm';
import GoBackIcon from '../../assets/icons/icon-backwards.svg';

export const TodosCreate = () => {
  const router = useRouter();

  return (
    <Card.Root w="100%" p="6" gap="6">
      <Card.Header>
        <HStack>
          <IconButton
            aria-label="Go back"
            onClick={() => router.history.back()}
            backgroundColor="transparent"
          >
            <Image src={GoBackIcon} />
          </IconButton>
          <Text>New task</Text>
        </HStack>
      </Card.Header>
      <Card.Body>
        <TodosCreateForm />
      </Card.Body>
    </Card.Root>
  );
};

import {HStack, Text} from '@chakra-ui/react';
import {AppLink} from '../../components/AppLink';

export const TodosHeaderWrapper = () => (
  <HStack w="100%" justifyContent="space-between">
    <Text>Hi user!</Text>
    <AppLink to="/todos/create">Create task</AppLink>
  </HStack>
);

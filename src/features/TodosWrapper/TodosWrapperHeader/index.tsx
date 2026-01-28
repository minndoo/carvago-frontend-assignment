import {HStack} from '@chakra-ui/react';
import {TodosHeaderWrapperLeft} from './TodosHeaderWrapperLeft';
import { ButtonAppLink } from '../../../components/ButtonAppLink';

export const TodosHeaderWrapper = () => (
  <HStack w="100%" justifyContent="space-between">
    <TodosHeaderWrapperLeft />
    <ButtonAppLink to="/todos/create">Create task</ButtonAppLink>
  </HStack>
);

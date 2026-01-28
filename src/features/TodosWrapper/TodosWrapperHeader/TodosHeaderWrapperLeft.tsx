import {Text, VStack} from '@chakra-ui/react';
import {getCurrentDateCS} from '../../../utils/dateUtils';

export const TodosHeaderWrapperLeft = () => (
  <VStack alignItems="flex-start">
    <Text>Hi user!</Text>
    <Text>{getCurrentDateCS()}</Text>
  </VStack>
);

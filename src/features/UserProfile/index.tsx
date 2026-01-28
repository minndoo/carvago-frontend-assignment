import {Text} from '@chakra-ui/react';
import {useUser} from './hooks';

export const UserProfile = () => {
  const {data, isLoading} = useUser();

  if (isLoading) return;

  return <Text>{data?.username}</Text>;
};

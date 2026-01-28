import {ReactNode} from 'react';
import {Center, Container, HStack, Text, VStack} from '@chakra-ui/react';
import {UserProfile} from '../../features/UserProfile';

type AuthenticatedPageLayoutProps = {
  children: ReactNode;
};

export const AuthenticatedPageLayout = ({children}: AuthenticatedPageLayoutProps) => (
  <Center>
    <Container maxW="8xl">
      <VStack w="100%" px="2">
        <HStack justifyContent="space-between" w="100%" py="6">
          <Text fontWeight="bold">Zentask</Text>
          <UserProfile />
        </HStack>
        {children}
      </VStack>
    </Container>
  </Center>
);

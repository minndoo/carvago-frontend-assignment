import {ReactNode} from 'react';
import {Center, Container, HStack, Text, VStack} from '@chakra-ui/react';

type AuthenticatedPageLayoutProps = {
  children: ReactNode;
};

export const AuthenticatedPageLayout = ({children}: AuthenticatedPageLayoutProps) => (
  <Center>
    <Container maxW="8xl">
      <VStack w="100%" px="2">
        <HStack justifyContent="space-between" w="100%" py="6">
          <Text fontWeight="bold">Zentask</Text>
          <Text>User Profile</Text>
        </HStack>
        {children}
      </VStack>
    </Container>
  </Center>
);

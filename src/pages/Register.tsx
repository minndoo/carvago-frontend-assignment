import {Center} from '@chakra-ui/react';
import {registerUser} from '../auth/register';
import {UserForm} from '../features/UserForm';

export const Register = () => (
  <Center width="100%" height="100vh">
    <UserForm
      onSubmit={registerUser}
      title="Welcome to our site!"
      subtitle="Welcome to our secure portal! To access the full functionality of our app, kindly provide your credentials below. Your privacy is our priority."
      submitLabel="Register"
    />
  </Center>
);

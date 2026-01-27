import {Center} from '@chakra-ui/react';
import {UserForm} from '../features/UserForm';
import { loginUser } from '../auth/login';

export const Login = () => (
    <Center width="100%" height="100vh">
        <UserForm 
            onSubmit={loginUser} 
            title='It’s good to have you back!'
            subtitle='Welcome to our secure portal! To access the full functionality of our app, kindly provide your credentials below. Your privacy is our priority.'
            submitLabel='Log in'
        />
    </Center>
);


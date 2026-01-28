import {FormEvent, useState} from 'react';
import {Button, Input, VStack, Text, Card, Field} from '@chakra-ui/react';
import {useRouter} from '@tanstack/react-router';
import {authStore} from '../auth/authStore';

type UserFormProps<T> = {
  onSubmit: (u: string, p: string) => Promise<T>;
  title: string;
  subtitle: string;
  submitLabel: string;
};

export const UserForm = <T,>({onSubmit, title, subtitle, submitLabel}: UserFormProps<T>) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const response = await onSubmit(username, password);

    // @ts-expect-error
    if (response.error) {
      // @ts-expect-error
      setError(response.error.error);
      return;
    }

    setIsSubmitting(false);
    console.log('should redirect', authStore.getAccessToken());
    router.navigate({to: '/todos'});
    console.log('redirected');
  };

  return (
    <Card.Root p="10" backgroundColor="fill-white">
      <VStack spaceY="10" width="100%" maxWidth="400px">
        <VStack spaceY="6" align="flex-start">
          <Text fontSize="2xl" color="blue.900" fontWeight="bold">
            {title}
          </Text>

          <Text fontSize="medium" color="text-secondary" lineHeight="1.5">
            {subtitle}
          </Text>
        </VStack>

        <form onSubmit={handleSubmit} style={{width: '100%'}}>
          <VStack width="100%" align="stretch" spaceY="6">
            <Field.Root>
              <label htmlFor="username">
                <Text fontWeight="medium">Username</Text>
              </label>
              <Input
                id="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                autoComplete="username"
              />
            </Field.Root>

            <Field.Root>
              <label htmlFor="password">
                <Text fontWeight="medium">Password</Text>
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="new-password"
              />
            </Field.Root>

            {error && (
              <Text color="red.500" fontSize="sm" width="100%">
                {error}
              </Text>
            )}

            <Button type="submit" colorScheme="blue" width="100%" loading={isSubmitting}>
              {submitLabel}
            </Button>
          </VStack>
        </form>
      </VStack>
    </Card.Root>
  );
};

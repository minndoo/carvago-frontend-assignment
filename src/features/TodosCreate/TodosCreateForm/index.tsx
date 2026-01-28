import {FormEvent, useState} from 'react';
import {Button, Field, Input, Stack, Text, Textarea, VStack} from '@chakra-ui/react';
import {useRouter} from '@tanstack/react-router';
import {useCreateTodo} from './hooks/useCreateTodo';

export const TodosCreateForm = () => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();
  const {mutateAsync, } = useCreateTodo();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!taskName.trim()) return;

    const response = await mutateAsync({
      body: {
        title: taskName,
        description,
      },
    });

    if(response) router.navigate({to: '/todos'});
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack align="stretch" gap="4">
        <Field.Root gap="1" required>
          <label htmlFor="taskName">
            <Field.RequiredIndicator />
            <Text fontWeight="medium">Task Name</Text>
          </label>
          <Input
            id="taskName"
            value={taskName}
            onChange={(event) => setTaskName(event.target.value)}
            required
          />
        </Field.Root>

        <Field.Root gap="1">
          <label htmlFor="description">
            <Text fontWeight="medium">Description</Text>
          </label>
          <Textarea
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </Field.Root>

        <Stack gap="3">
          <Button
            type="button"
            backgroundColor="fill-gray"
            variant="outline"
            onClick={() => router.history.back()}
          >
            Discard
          </Button>
          <Button type="submit">Submit</Button>
        </Stack>
      </VStack>
    </form>
  );
};

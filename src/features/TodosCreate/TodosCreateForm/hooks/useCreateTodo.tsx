import {useQueryClient} from '@tanstack/react-query';
import {reactQueryClient} from '../../../../api/reactQueryClient';

export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return reactQueryClient.useMutation('post', '/api/todo', {
    onSuccess: () => queryClient.invalidateQueries({queryKey: ['get', '/api/todo/list']}),
  });
};

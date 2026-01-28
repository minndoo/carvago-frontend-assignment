import {reactQueryClient} from '../../../../../api/reactQueryClient';
import {useInvalidateTodosQuery} from './useInvalidateTodosQuery';

export const useIncompleteTodo = () => {
  const invalidate = useInvalidateTodosQuery();

  return reactQueryClient.useMutation('post', '/api/todo/{id}/incomplete', {onSuccess: invalidate});
};

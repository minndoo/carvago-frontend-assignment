import {reactQueryClient} from '../../../../../api/reactQueryClient';
import {useInvalidateTodosQuery} from './useInvalidateTodosQuery';

export const useCompleteTodo = () => {
  const invalidate = useInvalidateTodosQuery();

  return reactQueryClient.useMutation('post', '/api/todo/{id}/complete', {onSuccess: invalidate});
};

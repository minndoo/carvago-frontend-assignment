import {useQueryClient} from '@tanstack/react-query';

export const useInvalidateTodosQuery = () => {
  const queryClient = useQueryClient();

  return () => queryClient.invalidateQueries({queryKey: ['get', '/api/todo/list']});
};

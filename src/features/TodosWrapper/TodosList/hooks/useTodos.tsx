import {reactQueryClient} from '../../../../api/reactQueryClient';

export const useTodos = () => reactQueryClient.useQuery('get', '/api/todo/list');

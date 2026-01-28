import {reactQueryClient} from '../../api/reactQueryClient';

export const useUser = () => reactQueryClient.useQuery('get', '/api/user/me');

import createClient from 'openapi-react-query';
import { fetchClient } from './fetchClient';

export const reactQueryClient = createClient(fetchClient);
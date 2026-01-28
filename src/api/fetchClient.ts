import createClient, {Middleware} from 'openapi-fetch';
import type {paths} from './generated/v1';
import {authStore} from '../auth/authStore';

const fetchClient = createClient<paths>({
  baseUrl: 'http://localhost:3001/',
  credentials: 'include',
});

const middleware: Middleware = {
  async onRequest({request}) {
    const accessToken = authStore.getAccessToken();

    if (accessToken) request.headers.set('Authorization', accessToken);

    return request;
  },
  async onResponse({response}) {
    if (response.status === 401)
      await fetchClient.POST('/api/refresh-token', {
        body: {refreshToken: ''},
      });

    return response;
  },
};

fetchClient.use(middleware);

export {fetchClient};

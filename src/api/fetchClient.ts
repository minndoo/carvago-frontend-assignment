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

    if (accessToken) request.headers.set('Authorization', `Bearer ${accessToken}`);

    return request;
  },
  async onResponse({response, request}) {
    const requestUrl = new URL(request.url);

    if (response.status === 401 && !requestUrl.pathname.endsWith('/api/refresh-token')) {
      await fetchClient.POST('/api/refresh-token', {
        body: {refreshToken: ''},
      });
    }

    if (response.ok) {
      const contentType = response.headers.get('content-type') ?? '';
      const isJson = contentType.includes('application/json');

      if (!isJson) {
        return Response.json(null, {status: response.status});
      }
    }

    return response;
  },
};

fetchClient.use(middleware);

export {fetchClient};

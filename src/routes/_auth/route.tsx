import {createFileRoute, Outlet, redirect} from '@tanstack/react-router';
import {authStore} from '../../auth/authStore';
import {fetchClient} from '../../api/fetchClient';
import {AuthenticatedPageLayout} from '../../pages/layouts/AuthenticatedPageLayout';

export const Route = createFileRoute('/_auth')({
  component: RouteComponent,
  beforeLoad: async () => {
    const accessToken = authStore.getAccessToken();
    console.log('accessToken', accessToken);
    if (!accessToken) {
      const response = await fetchClient.POST('/api/refresh-token', {
        body: {
          refreshToken: '',
        },
      });

      if (response.data?.accessToken) return authStore.setAccessToken(response.data.accessToken);

      throw redirect({
        to: '/login',
      });
    }
  },
});

function RouteComponent() {
  return (
    <AuthenticatedPageLayout>
      <Outlet />
    </AuthenticatedPageLayout>
  );
}

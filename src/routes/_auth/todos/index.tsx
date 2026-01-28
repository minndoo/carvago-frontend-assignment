import {createFileRoute} from '@tanstack/react-router';
import {Todos} from '../../../pages/Todos';

export const Route = createFileRoute('/_auth/todos/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <Todos />;
}

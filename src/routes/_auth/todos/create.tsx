import {createFileRoute} from '@tanstack/react-router';
import {TodosCreatePage} from '../../../pages/TodosCreatePage';

export const Route = createFileRoute('/_auth/todos/create')({
  component: RouteComponent,
});

function RouteComponent() {
  return <TodosCreatePage />;
}

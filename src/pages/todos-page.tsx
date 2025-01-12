import { Container } from '../components/container';
import { DeleteTodo } from '../components/delete-todo';
import { NavigateCTA } from '../components/navigate-cta';
import { NewTodo } from '../components/new-todo';
import { Separator } from '../components/separator';
import { TodoById } from '../components/todo-by-id';
import { Todos } from '../components/todos';
import { UpdateTodo } from '../components/update-todo';

export const TodosPage = () => {
    return (
        <Container>
            <NavigateCTA />
            <Separator />
            <Todos />
            <Separator />
            <TodoById />
            <Separator />
            <NewTodo />
            <Separator />
            <UpdateTodo />
            <Separator />
            <DeleteTodo />
        </Container>
    );
};

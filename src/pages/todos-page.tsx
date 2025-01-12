import { BackToHome } from '../components/back-to-home';
import { DeleteTodo } from '../components/delete-todo';
import { NewTodo } from '../components/new-todo';
import { Separator } from '../components/separator';
import { TodoById } from '../components/todo-by-id';
import { Todos } from '../components/todos';
import { UpdateTodo } from '../components/update-todo';

export const TodosPage = () => {
    return (
        <>
            <BackToHome />
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
        </>
    );
};

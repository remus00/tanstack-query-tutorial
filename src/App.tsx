import { NewTodo } from './components/new-todo';
import { Separator } from './components/separator';
import { TodoById } from './components/todo-by-id';
import { Todos } from './components/todos';
import { UpdateTodo } from './components/update-todo';

function App() {
    return (
        <>
            <Todos />
            <Separator />
            <TodoById />
            <Separator />
            <NewTodo />
            <Separator />
            <UpdateTodo />
        </>
    );
}

export default App;

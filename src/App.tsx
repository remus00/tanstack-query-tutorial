import { Separator } from './components/separator';
import { TodoById } from './components/todo-by-id';
import { Todos } from './components/todos';

function App() {
    return (
        <>
            <Todos />
            <Separator />
            <TodoById />
        </>
    );
}

export default App;

import { useUpdateTodo } from '../services/mutation';
import { useTodos, useTodosIds } from '../services/queries';
import { ITodo } from '../types/todo';

export const UpdateTodo = () => {
    const todosIdsQuery = useTodosIds();
    const todosQuery = useTodos(todosIdsQuery.data);
    const { mutate } = useUpdateTodo();

    const handleCheckUpdate = (data: ITodo | undefined) => {
        if (data) mutate({ ...data, checked: true });
    };
    return (
        <div className="container">
            <h1>Update Todo</h1>

            <ul>
                {todosQuery.map(({ data }, idx) => (
                    <li key={idx}>
                        <div>Id: {data?.id}</div>
                        <span>
                            <strong>Title: {data?.title}</strong>&nbsp;
                            <strong>Description: {data?.description}</strong>
                        </span>
                        <div className="">
                            <button
                                onClick={() => handleCheckUpdate(data)}
                                disabled={data?.checked}
                                className={`${data?.checked === true && 'red-btn'}`}
                            >
                                {data?.checked ? 'Already marked as done' : 'Mark as done'}
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

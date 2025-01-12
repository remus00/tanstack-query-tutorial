import { useDeleteTodo } from '../services/mutation';
import { useTodos, useTodosIds } from '../services/queries';

export const DeleteTodo = () => {
    const todosIdsQuery = useTodosIds();
    const todosQuery = useTodos(todosIdsQuery.data);
    const { mutate } = useDeleteTodo();

    const handleDelete = (id: number | undefined) => {
        if (id) mutate(id);
    };
    return (
        <div className="container">
            <h1>Delete Todo</h1>

            <ul>
                {todosQuery.map(({ data }, idx) => (
                    <li key={idx}>
                        <div>Id: {data?.id}</div>
                        <span>
                            <strong>Title: {data?.title}</strong>&nbsp;
                            <strong>Description: {data?.description}</strong>
                        </span>
                        <div className="">
                            <button onClick={() => handleDelete(data?.id)} className="red-btn">
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

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

            <ul className="grid grid-cols-2 gap-4">
                {todosQuery.map(({ data }, idx) => (
                    <li
                        key={idx}
                        className="flex items-center justify-between rounded-lg border border-neutral-200 px-4 py-2 shadow-sm"
                    >
                        <div className="flex flex-col">
                            <div>Id: {data?.id}</div>
                            <div className="flex items-center gap-4">
                                <strong>Title: {data?.title}</strong>&nbsp;
                                <strong>Description: {data?.description}</strong>
                            </div>
                        </div>
                        <button
                            onClick={() => handleDelete(data?.id)}
                            className="h-[40px] w-full max-w-[200px] rounded-[8px] bg-rose-400 text-white transition-all duration-300 hover:bg-rose-600"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

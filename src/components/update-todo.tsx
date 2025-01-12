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
                            onClick={() => handleCheckUpdate(data)}
                            disabled={data?.checked}
                            className={`h-[40px] w-full max-w-[200px] rounded-[8px] bg-sky-400 text-white transition-all duration-300 hover:bg-sky-600 ${data?.checked === true && 'cursor-not-allowed bg-red-400 hover:bg-red-400'}`}
                        >
                            {data?.checked ? 'Already marked as done' : 'Mark as done'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

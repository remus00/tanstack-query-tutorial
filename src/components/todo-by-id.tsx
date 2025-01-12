import { useTodos, useTodosIds } from '../services/queries';

export const TodoById = () => {
    const todosIdsQuery = useTodosIds();
    const todosQuery = useTodos(todosIdsQuery.data);

    return (
        <div className="container">
            <h1>Get Todos by id</h1>
            <ul className="grid grid-cols-2 gap-4">
                {todosQuery.map(({ data }, idx) => (
                    <li
                        key={idx}
                        className="flex flex-col rounded-lg border border-neutral-200 px-4 py-2 shadow-sm"
                    >
                        <div>Id: {data?.id}</div>
                        <div className="flex items-center gap-4">
                            <strong>Title: {data?.title}</strong>&nbsp;
                            <strong>Description: {data?.description}</strong>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

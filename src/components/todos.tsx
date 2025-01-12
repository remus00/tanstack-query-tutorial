import { useTodosIds } from '../services/queries';

export const Todos = () => {
    const todosIdsQuery = useTodosIds();

    if (todosIdsQuery.isPending) return <span>Loading...</span>;

    if (todosIdsQuery.isError) return <span>There is an error</span>;

    return (
        <div>
            <p>Query function state: {todosIdsQuery.fetchStatus}</p>
            <p>Query data status: {todosIdsQuery.status}</p>
            {todosIdsQuery?.data?.map((id) => (
                <p key={id}>{id}</p>
            ))}
        </div>
    );
};

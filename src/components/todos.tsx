import { useIsFetching } from '@tanstack/react-query';
import { useTodosIds } from '../services/queries';

export const Todos = () => {
    const todosIdsQuery = useTodosIds();
    const isFetching = useIsFetching();

    // if (todosIdsQuery.isPending) return <span>Loading...</span>;

    // if (todosIdsQuery.isError) return <span>There is an error</span>;

    return (
        <div className="container">
            <h1>Get todos ids</h1>
            <p>Query function state: {todosIdsQuery.fetchStatus}</p>
            <p>Query data status: {todosIdsQuery.status}</p>
            <p>Global is fetching: {isFetching}</p>
            <div className="my-4 grid grid-cols-2 gap-4">
                {todosIdsQuery?.data?.map((id) => (
                    <p
                        key={id}
                        className="rounded-lg border border-neutral-200 px-4 py-2 shadow-sm"
                    >
                        Id: {id}
                    </p>
                ))}
            </div>
        </div>
    );
};

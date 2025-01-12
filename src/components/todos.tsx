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
            {todosIdsQuery?.data?.map((id) => (
                <p key={id}>Id: {id}</p>
            ))}
        </div>
    );
};

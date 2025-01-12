import { useTodos, useTodosIds } from '../services/queries';

export const TodoById = () => {
    const todosIdsQuery = useTodosIds();
    const todosQuery = useTodos(todosIdsQuery.data);

    return (
        <div className="container">
            <h1>Get Todos by id</h1>
            <ul>
                {todosQuery.map(({ data }, idx) => (
                    <li key={idx}>
                        <div>Id: {data?.id}</div>
                        <span>
                            <strong>Title: {data?.title}</strong>&nbsp;
                            <strong>Description: {data?.description}</strong>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

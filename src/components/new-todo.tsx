import { SubmitHandler, useForm } from 'react-hook-form';
import { useCreateTodo } from '../services/mutation';
import { ITodo } from '../types/todo';

export const NewTodo = () => {
    const { mutate, isPending } = useCreateTodo();
    const { register, handleSubmit } = useForm<ITodo>();

    const handleCreateTodoSubmit: SubmitHandler<ITodo> = (data) => {
        mutate(data);
    };
    return (
        <div className="container">
            <h1>New Todo</h1>

            <form onSubmit={handleSubmit(handleCreateTodoSubmit)} className="form">
                <input placeholder="title..." {...register('title')} className="input" />
                <input
                    placeholder="description..."
                    {...register('description')}
                    className="input"
                />
                <input
                    type="submit"
                    className="input-btn"
                    disabled={isPending}
                    value={isPending ? 'Creating todo' : 'new todo'}
                />
            </form>
        </div>
    );
};

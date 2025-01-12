import { SubmitHandler, useForm } from 'react-hook-form';
import { useCreateTodo } from '../services/mutation';
import { ITodo } from '../types/todo';

export const NewTodo = () => {
    const { mutate, isPending } = useCreateTodo();
    const { register, handleSubmit } = useForm<ITodo>();

    const handleCreateTodoSubmit: SubmitHandler<ITodo> = (data) => {
        mutate({ ...data, checked: false });
    };
    return (
        <div className="container">
            <h1>New Todo</h1>

            <form onSubmit={handleSubmit(handleCreateTodoSubmit)} className="form">
                <input
                    placeholder="title..."
                    {...register('title')}
                    className="w-full max-w-[300px] rounded-lg border border-neutral-200 px-4 py-2 shadow-sm"
                />
                <input
                    placeholder="description..."
                    {...register('description')}
                    className="w-full max-w-[300px] rounded-lg border border-neutral-200 px-4 py-2 shadow-sm"
                />
                <input
                    type="submit"
                    className="cursor-pointer rounded-lg bg-emerald-500 px-4 py-2 text-white shadow-sm transition-all duration-300 hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-neutral-200 disabled:text-neutral-500"
                    disabled={isPending}
                    value={isPending ? 'Creating todo' : 'new todo'}
                />
            </form>
        </div>
    );
};

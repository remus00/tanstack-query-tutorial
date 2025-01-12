import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ITodo } from '../types/todo';
import { createTodo, deleteTodo, updateTodo } from './api';

export const useCreateTodo = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: ITodo) => createTodo(data),
        onMutate: () => {
            console.log('create mutate state');
        },
        onError: (err) => {
            console.error('create error state', err);
        },
        onSuccess: () => {
            console.log('create success state');
        },
        onSettled: async (_, error) => {
            console.log('update settled state');
            if (error) {
                console.log(error);
            } else {
                await queryClient.invalidateQueries({
                    queryKey: ['todos'],
                });
            }
        },
    });
};

export const useUpdateTodo = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: ITodo) => updateTodo(data),
        onMutate: () => {
            console.log('update mutate state');
        },
        onError: (err) => {
            console.error('update error state', err);
        },
        onSuccess: () => {
            console.log('update success state');
        },
        onSettled: async (_, error, variables) => {
            console.log('update settled state');
            if (error) {
                console.log(error);
            } else {
                await queryClient.invalidateQueries({
                    queryKey: ['todos'],
                });
                await queryClient.invalidateQueries({
                    queryKey: ['todo', { id: variables.id }],
                });
            }
        },
    });
};

export const useDeleteTodo = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => deleteTodo(id),
        onSuccess: () => {
            console.log('Deleted successfully');
        },
        onSettled: async (_, error) => {
            console.log('delete settled state');
            if (error) {
                console.log(error);
            } else {
                await queryClient.invalidateQueries({
                    queryKey: ['todos'],
                });
            }
        },
    });
};

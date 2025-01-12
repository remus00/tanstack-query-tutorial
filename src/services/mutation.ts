import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ITodo } from '../types/todo';
import { createTodo } from './api';

export const useCreateTodo = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: ITodo) => createTodo(data),
        onMutate: () => {
            console.log('mutate state');
        },
        onError: (err) => {
            console.error('error state', err);
        },
        onSuccess: () => {
            console.log('success state');
        },
        onSettled: async (_, error) => {
            console.log('settled state');
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

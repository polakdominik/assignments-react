import { useEffect, useState } from "react";

export function useTodos() {
    const [todos, setTodos] = useState<{ id: number, createdAt: number, isDone: boolean, label: string }[]>([])
    const [hasError, setHasError] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const fetchData = async () => {
        try {
            setLoading(true);
            setHasError(false);
            const res = await fetch(`${import.meta.env.VITE_API_URL}/items`)

            if (!res.ok) {
                throw new Error('Error ' + res.status);
            }

            setTodos(await res.json());
        } catch (e: unknown) {
            setHasError(true);

            // TODO: add proper error logging
            console.error(e);
        } finally {
            setLoading(false);
        }
    }

    const createTodo = async (label: string) => {
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/items`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ label }),
            });

            if (!res.ok) {
                throw new Error('Error ' + res.status);
            }
        } catch (error) {
            console.error(error);
        } finally {
            fetchData()
        }
    };

    const updateTodo = async (id: number, label: string) => {
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/items/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ label }),
            });

            if (!res.ok) {
                throw new Error('http error' + res.status);
            }
        } catch (e) {
            console.error(e);
        } finally {
            fetchData();
        }
    }

    const updateTodoStatus = async (id: number, isDone: boolean) => {
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/items/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ isDone }),
            });

            if (!res.ok) {
                throw new Error('http error' + res.status);
            }
        } catch (e) {
            console.error(e);
        } finally {
            fetchData();
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return {
        todos,
        loading,
        hasError,
        createTodo,
        updateTodo,
        updateTodoStatus,
    }
}

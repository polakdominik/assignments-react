import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { useEffect, useState } from "react";
import { ListItem } from "./components/ListItem";

export const App = () => {
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

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <ThemeProvider>
            <Container>
                <Layout>
                    <Header onItemAdd={() => console.warn("unimplemented")}>To Do app</Header>
                    {
                        loading
                            ? <span>Loading. Please wait.</span>
                            : hasError
                                ? <span>Error occurred. Please try again later.</span>
                                : <List>
                                    {
                                        todos.map(todo =>
                                            <ListItem
                                                key={todo.id}
                                                label={todo.label}
                                                onItemDelete={() => {}}
                                                isDone={todo.isDone}
                                                onItemDoneToggle={() => {}}
                                                onItemLabelEdit={() => {}}
                                            />)
                                    }
                                </List>
                    }
                    <Footer />
                </Layout>
            </Container>
        </ThemeProvider>
    )
};

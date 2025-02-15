import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { ListItem } from "./components/ListItem";
import { useTodos } from "./hooks/useTodos";

export const App = () => {
    const { todos, loading, hasError, createTodo, updateTodo, updateTodoStatus } = useTodos();

    return (
        <ThemeProvider>
            <Container>
                <Layout>
                    <Header onItemAdd={createTodo}>To Do app</Header>
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
                                                onItemDoneToggle={(isDone) => updateTodoStatus(todo.id, isDone)}
                                                onItemLabelEdit={(label) => updateTodo(todo.id, label)}
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

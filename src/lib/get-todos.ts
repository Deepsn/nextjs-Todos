interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export async function getTodos(): Promise<Todo[]> {
    return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(todos => todos.slice(0, 10));
}
export const getAllTodo = () => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length) {
        return todos
    }
    else {
        return []
    }
};
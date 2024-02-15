import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { useTodo } from "./context/todoContext";

function App() {
  const { todos } = useTodo();
  return (
    <div className="h-screen font-mono bg-stone-200">
      <div className="container flex justify-center mx-auto">
        <div className="w-full max-w-96 mx-2 text-center mt-10">
          <h1 className="text-gray-700 text-3xl text-center my-4 font-black">
            Todo List
          </h1>
          <TodoForm />
          {todos &&
            todos.length > 0 &&
            todos.map((item) => <TodoItem key={item.id} item={item} />)}
        </div>
      </div>
    </div>
  );
}

export default App;

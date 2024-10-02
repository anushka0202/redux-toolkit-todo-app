import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <div className="App h-screen">
      <AddTodo />
      <section className="h-full bg-gray-100 ">
        <Todos />
      </section>
    </div>
  );
}

export default App;

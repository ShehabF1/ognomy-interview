import "./App.css";
import TodoApp from "./components/TodoApp";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <TodoApp />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;

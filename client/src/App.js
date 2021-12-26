import './App.css';

// Components
import InputTodo from './components/InputTodo'
import ListTodos from './components/ListTodos'

function App() {
  return (
    <>
      <div className="container mt-5">
        <InputTodo />
        <ListTodos />
      </div>
    </>
  );
}

export default App;

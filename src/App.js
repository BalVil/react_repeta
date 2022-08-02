import { Routes, Route, Link } from 'react-router-dom';
import TodosView from './views/TodosView';
import CounterView from './views/CounterView';

const App = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/counter">Счётчик</Link>
        </li>
        <li>
          <Link to="/todos">Заметки</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/counter" element={<CounterView />}></Route>

        <Route path="/todos" element={<TodosView />}></Route>
      </Routes>
    </>
  );
};

export default App;

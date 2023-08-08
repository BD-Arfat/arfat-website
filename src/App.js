import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Components/Routs/Routs';

function App() {
  return (
    <div className="App">
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

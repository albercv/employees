import logo from './logo.svg';
import './App.css';
import { Management } from './component/Management';
import { Task } from './component/Task';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Management />
        <Task tasks={tasks} setTasks={setTasks}/>
      </header>
    </div>
  );
}

export default App;

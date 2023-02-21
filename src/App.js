import logo from './logo.svg';
import './App.css';
import { Management } from './component/Management';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Management />
      </header>
    </div>
  );
}

export default App;

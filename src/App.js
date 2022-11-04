//import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import { ThreadList } from './ThreadList';
import { GetThreadList } from './ThreadList';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <button onClick={GetThreadList}>push here</button> */}
      <ThreadList />
    </div>
  );
}

export default App;

import './App.css';
import TopBar from './TopBar';
import Background from './Background';
import StoreListing from './StoreListing';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Background/>
      <StoreListing/>
    </div>
  );
}

export default App;
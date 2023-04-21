import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/NavBar';
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Jumbotron/>
    </div>
  );
}

export default App;

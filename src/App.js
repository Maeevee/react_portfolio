import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/NavBar';
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import Skills from './Skills';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Jumbotron/>
      <Skills/>
    </div>
  );
}

export default App;

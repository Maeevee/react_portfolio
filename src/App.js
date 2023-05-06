import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/NavBar';
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import Skills from './Skills';
import Projects from './components/Projects';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Jumbotron/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;

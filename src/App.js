import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/NavBar';
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Jumbotron/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;

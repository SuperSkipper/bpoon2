import './App.css';
import Home from './components/home'
import About from './components/about'
import Resume from './components/resume'
import Projects from './components/projects'

import { BrowserRouter as Router, Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/resume">
        <Resume/>
      </Route>
      <Route path="/projects">
        <Projects/>
      </Route>
    </Router>
  );
}

export default App;

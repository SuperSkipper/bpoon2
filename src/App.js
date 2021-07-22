import './App.css';
import Home from './components/home'
import About from './components/about'

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
    </Router>
  );
}

export default App;

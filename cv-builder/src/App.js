
import './App.css';
import CvBuilder from './components/CvBuilder'
import Header from './components/Header'
import Home from "./components/Home"
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'


function App() {
  return (
    <Router>
        <div className="App">
        <Switch>



          <Route path='/cvbuilder'><Header /><CvBuilder /></Route>
          <Route path='/'><Header /><Home /></Route>



          </Switch>
        </div>
    </Router>
  );
}

export default App;


import './App.css';
import CvBuilder from './components/CvBuilder'
import Header from './components/Header'
import Home from "./components/Home"
import MyProtfolio from "./components/MyProtfolio"
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'


function App() {
  return (
    <Router>
        <div className="App">
        <Switch>


          <Route path='/home'><MyProtfolio /></Route>
          <Route path='/about'><MyProtfolio /></Route>
          <Route path='/resume'><MyProtfolio /></Route>
          <Route path='/portfolios'><MyProtfolio /></Route>
          <Route path='/blogs'><MyProtfolio /></Route>
          <Route path='/contact'><MyProtfolio /></Route>

          <Route path='/cvbuilder'><CvBuilder /></Route>
          <Route path='/'><Home /></Route>



          </Switch>
        </div>
    </Router>
  );
}

export default App;


import './App.css';
import CvBuilder from './components/CvBuilder'
import Header from './components/Header'
import Home from "./components/Home"
import MyProtfolio from "./components/MyProtfolio"
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import HomePage from './components/MyProtfolioComponents/pages/HomePage'
import BlogPage from './components/MyProtfolioComponents/pages/BlogPage'
import AboutPage from './components/MyProtfolioComponents/pages/AboutPage'
import ContactPage from './components/MyProtfolioComponents/pages/ContactPage'
import ProfolioPage from './components/MyProtfolioComponents/pages/ProfolioPage'
import ResumePage from './components/MyProtfolioComponents/pages/ResumePage'

function App() {
  return (
    <Router>
        <div className="App">
        <Switch>


          <Route path='/home'><MyProtfolio page={<HomePage />}/></Route>
          <Route path='/about'><MyProtfolio page={<AboutPage />} /></Route>
          <Route path='/resume'><MyProtfolio page={<ResumePage />}/></Route>
          <Route path='/portfolios'><MyProtfolio page={<ProfolioPage />}/></Route>
          <Route path='/blogs'><MyProtfolio page={<BlogPage />}/></Route>
          <Route path='/contact'><MyProtfolio page={<ContactPage />}/></Route>

          <Route path='/cvbuilder'><CvBuilder /></Route>
          <Route path='/'><Home /></Route>



          </Switch>
        </div>
    </Router>
  );
}

export default App;

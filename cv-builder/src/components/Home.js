import '../styles/Home.css'
import {Link} from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import CallIcon from '@material-ui/icons/Call';

function Home(){
  return(
    <div className="home__container">

    {/*<Link to= '/home' style={{textDecoration:"none"}}> <div className="btn1"><p>See Something Awesome</p></div></Link>
    <Link to ='/cvbuilder' style={{textDecoration:"none"}}><div className='btn1'><p>Create Cv</p></div></Link>
    */}
    <div class="navigation" >
    <div className="circle-box">
    <div className="circle">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    </div>

    <div className="home__navbar">
      <h3>MENU</h3>
      <ul className="menu">
        <li><Link to="/home"><HomeIcon/></Link></li>
        <li><Link to="/about"><InfoIcon/></Link></li>
        <li><a href="https://www.linkedin.com/in/mohamad-siysinyuy-26154215b/"><LinkedInIcon/></a></li>
        <li><a href="https://github.com/mrsuber"><GitHubIcon/></a></li>
        <li><Link to="/contact"><CallIcon/></Link></li>
      </ul>
    </div>
    </div>
    </div>
  )
}
export default Home

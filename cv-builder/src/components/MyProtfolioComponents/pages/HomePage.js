import '../../../styles/HomePage.css'
import Particle from '../Particle'
import FacebookIcon from '@material-ui/icons/Facebook'
import GithubIcon from '@material-ui/icons/GitHub'
import YoutubeIcon from '@material-ui/icons/YouTube'


function HomePage(){
  return(
    <div className="homepage__container">
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h1>Hi I'm <span>Mohamad</span></h1>
        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without</p>
        <div className="icons">
          <a href="https://www.facebook.com/mohamad.siysinyuy" className= "icon i-facebook"><FacebookIcon/> </a>
          <a href="http://www.github.com/mrsuber" className="icon i-github"><GithubIcon/></a>
          <a href="https://www.youtube.com/channel/UC1DjtEqj9566DSexb-BAtQw" className="icon i-youtube"><YoutubeIcon/></a>
        </div>
      </div>
    </div>
  )
}

export default HomePage;

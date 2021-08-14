import '../../../styles/HomePage.css'
import Particle from '../Particle'
import FacebookIcon from '@material-ui/icons/Facebook'
import GithubIcon from '@material-ui/icons/GitHub'
import YoutubeIcon from '@material-ui/icons/YouTube'
// import ChangeMode from '../../ChangeMode'

function HomePage(){
  return(
    <div className="homepage__container">

      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h1>Hi I'm <span>Mohamad</span></h1>
        <p>An experienced programmer with several successful projects under my belt. I’d say my portfolio introduces me better than my words do, so if you want we can look at it together, and I can tell you about the principal projects I engineered over the years.</p>
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

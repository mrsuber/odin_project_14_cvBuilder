import resume from '../../images/me3.jpg'
import '../../styles/ImageSection.css'
import PrimaryButton from './PrimaryButton'
function ImageSection(){
  return(
    <div className="image__container">
      <div className="left-content">
        <img src={resume} alt="resume image"/>
      </div>
      <div className="right-content">

            <h4>I Hope I'm <span>wise</span> and <span>clever</span></h4>


          <p className='paragraph'>A clever person solves a problem.<br/>A wise person AVOIDS it. </p>
          <div className='about-info'>
          <div className='info-title'>
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Location</p>
            <p>Service</p>
            <p>Religion</p>

          </div>

          <div className='info'>
            <p>Mohamad Siysinyuy</p>
            <p>26</p>
            <p>Cameroonian</p>
            <p>English</p>
            <p>Buea, South West</p>
            <p>Freelancer(for now)</p>
            <p>Islam</p>

          </div>
          </div>
          <PrimaryButton title="Download Cv"/>
      </div>


    </div>
  )
}
export default ImageSection

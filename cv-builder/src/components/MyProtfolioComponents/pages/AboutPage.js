import '../../../styles/AboutPage.css'
import '../../../styles/MainLayout.css'
import Title from '../../Title'
import ImageSection from "../ImageSection"
import ServicesSection from "../ServicesSection"
import ReviewSection from '../ReviewSection'
// import ChangeMode from '../../ChangeMode'

function AboutPage(){
  return(
    <div className="all">
    <section className=" aboutPage__container">


    <Title title={'About Me'} span={' About Me'}/>
    <ImageSection />
    <ServicesSection />
    <ReviewSection />
    </section>
    </div>
  )

}
export default AboutPage

import '../../../styles/AboutPage.css'
import '../../../styles/MainLayout.css'
import Title from '../../Title'
import ImageSection from "../ImageSection"
import ServicesSection from "../ServicesSection"


function AboutPage(){
  return(
    <section className="all aboutPage__container">

    <Title title={'About Me'} span={' About Me'}/>
    <ImageSection />
    <ServicesSection />
    </section>
  )

}
export default AboutPage

import '../../../styles/AboutPage.css'
import '../../../styles/MainLayout.css'
import Title from '../../Title'
import ImageSection from "../ImageSection"
function AboutPage(){
  return(
    <section className="all aboutPage__container">

    <Title title={'About Me'} span={' About Me'}/>
    <ImageSection />
    </section>
  )

}
export default AboutPage

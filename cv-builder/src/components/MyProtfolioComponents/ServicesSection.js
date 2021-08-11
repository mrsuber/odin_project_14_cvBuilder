import '../../styles/ServicesSection.css'
import '../../styles/MainLayout.css'
import Title from '../Title'
import ServiceCard from './ServiceCard'
import design from '../../images/design.svg'

import intelligence from '../../images/intelligence.svg'
import gamedev from '../../images/game-dev.svg'


function ServicesSection(){
  return(
    <div className='innerLayout '>
        <div className="services__container">
            <Title title={'Services'} span ={'services'}/>
            <div className="services">
                <ServiceCard
                image={design}
                title={'Web Design'}
                paragraph={" together, and I can tell you about the principal projects I engineered over"}
                />

                <div className="mid-card">
                <ServiceCard
                image={intelligence}
                title={'Artificial Intelligence'}
                paragraph={"together, and I can tell you about the principal projects I engineered over"}
                />
                </div>


                <ServiceCard
                image={gamedev}
                title={'Game Developement'}
                paragraph={"together, and I can tell you about the principal projects I engineered over"}
                />
            </div>
        </div>

    </div>
  )
}
export default ServicesSection

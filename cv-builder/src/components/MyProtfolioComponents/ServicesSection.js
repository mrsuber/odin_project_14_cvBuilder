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
                paragraph={"portfolio introduces me better than my words do, so if want we can look at it together, and I can tell you about the principal projects I engineered over"}
                />

                <ServiceCard
                image={intelligence}
                title={'Artificial Intelligence'}
                paragraph={"portfolio introduces me better than my words do, so if want we can look at it together, and I can tell you about the principal projects I engineered over"}
                />

                <ServiceCard
                image={gamedev}
                title={'Game Developement'}
                paragraph={"portfolio introduces me better than my words do, so if want we can look at it together, and I can tell you about the principal projects I engineered over"}
                />
            </div>
        </div>

    </div>
  )
}
export default ServicesSection

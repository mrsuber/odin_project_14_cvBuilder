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
                paragraph={" Design is not just what it looks like and feels like. Design is how it works."}
                />

                <div className="mid-card">
                <ServiceCard
                image={intelligence}
                title={'Artificial Intelligence'}
                paragraph={"By far, the greatest danger of (A.I) is that people conclude too early that they understand it."}
                />
                </div>


                <ServiceCard
                image={gamedev}
                title={'Game Developement'}
                paragraph={"Sometimes all it takes is one Deep Breath and everything falls into place."}
                />
            </div>
        </div>

    </div>
  )
}
export default ServicesSection

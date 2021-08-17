import '../styles/Skills.css'
import '../styles/MainLayout.css'
import Title from './Title'
import Progress from "./Progress"

function Skills(){
  return(
    <div className="skills__container">

            <Title title={'My Skills'} span={'My Skills'}/>

            <div className="innerLayout">
                <div className="skills">
                  <Progress title={'HTML5'} width={'99%'} text={'99%'}/>
                  <Progress title={'CSS3'} width={'99%'} text={'99%'}/>
                  <Progress title={'DOCKER'} width={'99%'} text={'99%'}/>
                  <Progress title={'MySQL'} width={'99%'} text={'99%'}/>
                  <Progress title={'PYTHON'} width={'99%'} text={'99%'}/>
                  <Progress title={'REACT'} width={'99%'} text={'99%'}/>
                  <Progress title={'JAVA'} width={'99%'} text={'99%'}/>
                  <Progress title={'JAVASCRIPT'} width={'99%'} text={'99%'}/>
                  <Progress title={'Django'} width={'99%'} text={'99%'}/>
                  <Progress title={'Flask'} width={'99%'} text={'99%'}/>

                </div>
            </div>
      </div>



  )
}
export default Skills

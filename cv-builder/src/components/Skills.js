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
                  <Progress title={'HTML5'} width={'80%'} text={'80%'}/>
                  <Progress title={'CSS3'} width={'70%'} text={'70%'}/>
                  <Progress title={'DOCKER'} width={'40%'} text={'40%'}/>
                  <Progress title={'MySQL'} width={'60%'} text={'60%'}/>
                  <Progress title={'PYTHON'} width={'40%'} text={'40%'}/>
                  <Progress title={'REACT'} width={'90%'} text={'90%'}/>
                  <Progress title={'JAVA'} width={'80%'} text={'80%'}/>
                  <Progress title={'JAVASCRIPT'} width={'90%'} text={'90%'}/>
                  <Progress title={'Django'} width={'40%'} text={'40%'}/>

                </div>
            </div>
      </div>



  )
}
export default Skills

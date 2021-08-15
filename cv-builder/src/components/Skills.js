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
                  <Progress title={'HTML5'} width={'70%'} text={'70%'}/>
                  <Progress title={'CSS3'} width={'70%'} text={'70%'}/>
                  <Progress title={'HTML5'} width={'60%'} text={'60%'}/>
                  <Progress title={'PYTHON'} width={'95%'} text={'95%'}/>
                  <Progress title={'REACT'} width={'75%'} text={'75%'}/>
                  <Progress title={'JAVA'} width={'80%'} text={'80%'}/>
                  <Progress title={'JAVASCRIPT'} width={'90%'} text={'90%'}/>

                </div>
            </div>
      </div>


  
  )
}
export default Skills

import '../../../styles/ResumePage.css'
import '../../../styles/MainLayout.css'
import Skills from "../../Skills"
// import Title from "../../Title"
import Resume from '../../Resume'
// import ChangeMode from '../../ChangeMode'
function ResumePage(){
  return (
    <div className="all">

    <Skills/>
    <Resume />

    </div>
  )
}
export default ResumePage;

import '../../styles/SideBar.css'
import Navigation from './Navigation'

function SideBar({navToggle}){
  return (
    <div className={`${navToggle ? 'nav-toggler':'sidebar__container'}`}>
        <Navigation/>
    </div>
  )
}

export default SideBar

import '../styles/MyProtfolio.css'
// import styled from 'styled-components'
// import HomePage from './MyProtfolioComponents/pages/HomePage'
import SideBar from './MyProtfolioComponents/SideBar'

function MyProtfolio({page}){
  return(
    <div className='profolio__container'>
        <SideBar />
        <div className="main__content">
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>
        {page}
        </div>
    </div>
  )
}

export default MyProtfolio

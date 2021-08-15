import '../styles/MyProtfolio.css'
// import styled from 'styled-components'
// import HomePage from './MyProtfolioComponents/pages/HomePage'
import SideBar from './MyProtfolioComponents/SideBar'
import ChangeMode from '../components/ChangeMode'
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core'
import {useState} from 'react'
// import IconButton from '@material-ui/icons/IconButton'
function MyProtfolio({page}){
  const [navToggle,setNavToggle]=useState(false)

  return(
    <div className='profolio__container'>
        <SideBar />
        <ChangeMode/>
        <div className="ham-burger-menu">
            <IconButton>
            <MenuIcon/>
            </IconButton>
        </div>
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

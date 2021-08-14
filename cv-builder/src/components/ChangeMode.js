import Brightness4Icon from "@material-ui/icons/Brightness4"
import Switch  from '@material-ui/core/Switch'
import '../styles/ChangeMode.css'

import {useState,useEffect} from 'react';

function ChangeMode(){
  const [theme,setTheme]=useState('dark-theme');
  const [checked,setChecked]=useState()

  useEffect(()=>{
    document.documentElement.className=theme;
  },[theme])
  const themeToggler =()=>{
  if(theme==='light-theme'){
    setTheme('dark-theme');
    setChecked(false)
  }else{
    setTheme('light-theme');
    setChecked(true)
  }
  }

  return(
    <div className="theme">
    <div className="light__dark__mode">
      <div className="left__content"><Brightness4Icon/></div>
      <div className="right__content">
          <Switch
              value=""
              checked={checked}
              // onChange={}
              inputProps={{'aria-label':''}}
              size="medium"
              onClick={themeToggler}

           />
      </div>
    </div>
    </div>
  )
}
export default ChangeMode

import Brightness4Icon from "@material-ui/icons/Brightness4"
import Switch  from '@material-ui/core/Switch'
import '../styles/ChangeMode.css'

import {useState,useEffect} from 'react';

function ChangeMode(){
  const [theme,setTheme]=useState('dark-theme');

  useEffect(()=>{
    document.documentElement.className=theme;
  },[theme])

  return(
    <div className="theme">
    <div className="light__dark__mode">
      <div className="left__content"><Brightness4Icon/></div>
      <div className="right__content">
          <Switch
              value=""
              // checked={}
              // onChange={}
              inputProps={{'aria-label':''}}
              size="medium"

           />
      </div>
    </div>
    </div>
  )
}
export default ChangeMode

import '../../../styles/ProfolioPage.css'
import '../../../styles/MainLayout.css'
import Title from "../../Title"
import Menu from "../../Menu"
import Button from '../../Button'
import {useState} from 'react'
import portfolios from '../data/protfolios'
// import ChangeMode from '../../ChangeMode'
const allButtons =['All',...new Set(portfolios.map(item=>item.category))]

// const allButtons =['All',...portfolios.map(item=>item.category)]
function ProfolioPage(){
  const [menuItem, setMenuItems] = useState(portfolios)
  const [button, setButton] = useState(allButtons)

  const filter =(button)=>{
    if(button==='All'){
      setMenuItems(portfolios)
      return
    }
    const filteredData = portfolios.filter(item => item.category===button);
    setMenuItems(filteredData)
  }
  return(
    <div className="all">
  
    <Title title={'Portfolios'} span ={'Portfolios'} />
        <div className="innerLayout">
            <Button filter={filter} button={button}/>
            <Menu menuItem={menuItem} />
        </div>
    </div>
  )

}
export default ProfolioPage

import '../styles/Menu.css'
import GitHub from '@material-ui/icons/GitHub'
import Pinterest from '@material-ui/icons/Pinterest'

function Menu({menuItem}){
  return(
    <div className="menu__container">
        {
          menuItem.map((item)=>{
            return<div className="menugrid__item" key={item.id}>
                <div className="portfolio__content">
                    <div className="portfolio__image">
                        <img src={item.image} alt=""/>
                        <ul>
                          <li><a href={item.link1}><GitHub/></a></li>
                          <li><a href={item.link2}><Pinterest/></a></li>

                        </ul>
                        </div>


                    <h6>{item.title}</h6>
                    <p>{item.text}</p>

                </div>
            </div>
          })
        }
    </div>
  )
}

export default Menu;

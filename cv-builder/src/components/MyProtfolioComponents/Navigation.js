import '../../styles/Navigation.css'
import {NavLink} from 'react-router-dom'
import avatar from '../../images/me.webp'

function Navigation(){
  return(
    <div className='navebare__container'>
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
      <ul className="nav__items">
          <li className="nav__item"><NavLink to="/home" activeClassName="active__class" exact>Home</NavLink></li>
          <li className="nav__item"><NavLink to="/about" activeClassName="active__class" exact>About</NavLink></li>
          <li className="nav__item"><NavLink to="/resume" activeClassName="active__class" exact>Resume</NavLink></li>
          <li className="nav__item"><NavLink to="/portfolios" activeClassName="active__class" exact>Portfolios</NavLink></li>
          <li className="nav__item"><NavLink to="/blogs" activeClassName="active__class" exact>Blogs</NavLink></li>
          <li className="nav__item"><NavLink to="/contact" activeClassName="active__class" exact>Contact</NavLink></li>


      </ul>
      <footer className="homesidebar__footer">
        <p>@2021 My Portfolio Website</p>
      </footer>
    </div>
  )
}

export default Navigation

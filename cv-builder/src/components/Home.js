import '../styles/Home.css'
import {Link} from 'react-router-dom'

function Home(){
  return(
    <div className="home__container">

    <Link to= '/home' style={{textDecoration:"none"}}> <div className="btn1"><p>See Something Awesome</p></div></Link>
    <Link to ='/cvbuilder' style={{textDecoration:"none"}}><div className='btn1'><p>Create Cv</p></div></Link>
    </div>
  )
}
export default Home

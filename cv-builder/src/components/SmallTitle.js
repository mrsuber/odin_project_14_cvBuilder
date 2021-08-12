import '../styles/SmallTitle.css'

function SmallTitle({icon, title}){
  return(
    <div className="smallTittle__container">
          <p>{icon}</p>
          <h3>{title}</h3>
    </div>
  )
}
export default SmallTitle

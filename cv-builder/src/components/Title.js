import '../styles/Title.css'
function Title({title,span}){
  return(
    <div className="title__container">
      <h2>{title } <span>{span}</span></h2>
    </div>
  )
}
export default Title;

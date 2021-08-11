import '../../styles/ServiceCard.css'
function ServiceCard({image,title,paragraph}){
  return(
    <div className="serviceCard__container">
      <div className='serviceCard___subcontainer'>
      <img src={image}/>
        <h4>{title}</h4>
        <p>{paragraph}</p>
      </div>

    </div>
  )
}
export default ServiceCard

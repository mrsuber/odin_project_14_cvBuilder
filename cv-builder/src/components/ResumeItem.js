import '../styles/ResumeItem.css'

function ResumeItem({title,year,subTitle,text}){
  return(
    <div className="resumeItem__container">
    <div className="left__content">
      <p>{year}</p>
    </div>
    <div className="right__content">
      <h5>{title}</h5>
      <h6>{subTitle}</h6>
      <p>{text}</p>
    </div>

    </div>
  )
}
export default ResumeItem

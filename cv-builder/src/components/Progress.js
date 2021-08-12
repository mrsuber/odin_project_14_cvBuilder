import '../styles/Progress.css'

function Progress({title,width,text}){
  return(
    <div className="progress__container">
        <h6>{title}</h6>
        <div className="progress__bar">
            <p className="progress__text">{text}</p>
            <div className="progress">
            <span style={{width:width}}></span>

            </div>
        </div>
    </div>
  )
}

export default Progress

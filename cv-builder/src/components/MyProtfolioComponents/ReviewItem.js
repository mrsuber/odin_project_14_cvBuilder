import '../../styles/ReviewItem.css'

function ReviewItem({text}){
  return(
    <div className="reviewItem__container">
      <p>{text}</p>
    </div>
  )
}
export default ReviewItem

import '../../styles/ReviewSection.css'
import '../../styles/MainLayout.css'
import Title from '../Title'
import ReviewItem from './ReviewItem'



function ReviewSection(){

  return(

    <div className="reviews__container">
        <Title title={'Reviews'} span={'Reviews'}/>
    <div className ="innerLayout">
      <div className="reviews">
          <ReviewItem text={"Truth can only be found in one place: the code."}/>
          <ReviewItem text={"All race conditions, deadlock conditions, and concurrent update problems are due to mutable variables."}/>

      </div>

    </div>
    </div>


  )
}

export default ReviewSection;

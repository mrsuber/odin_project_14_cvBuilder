import '../../../styles/ContactPage.css'
import '../../../styles/MainLayout.css'
import Title from "../../Title"
import ContactItem from '../ContactItem'
import PrimaryButton from '../PrimaryButton'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import LocationOnIcon from '@material-ui/icons/LocationOn'
// import ChangeMode from '../../ChangeMode'

function ContactPage(){

  return(

    <div className="all">

    <Title title={'Contact'} span={'Contact'} />
    <div className="contactPage__container">
      <div className="innerLayout contact__section">
        <div className='left__content'>
        <div className="contact__title">
          <h4>Get In Touch</h4>
        </div>
            <form className="form">
              <div className="form__field">
                  <label htmlFor="name">Enter Your Name</label>
                  <input id="name" type="text"/>
              </div>

              <div className="form__field">
                  <label htmlFor="email">Enter Your Email</label>
                  <input id="email" type="email"/>
              </div>

              <div className="form__field">
                  <label htmlFor="subject">Enter Your Subject</label>
                  <input id="subject" type="subject"/>
              </div>
              <div className="text__area">
              <label htmlFor="text-area">Enter Your Message</label>
                <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
              </div>
              <div className="form__field">
                  <PrimaryButton title={'send email'}/>
              </div>
            </form>
        </div>
        <div className='right__content'>
        <ContactItem
        icon={<PhoneIcon/>}
        title={'Phone'}
        contact1={'(+237)651841003'}
        contact2={'(+237)653255547'}/>

        <ContactItem
        icon={<EmailIcon/>}
        title={'Email'}
        contact1={'msiysinyuy@gmail.com'}
        contact2={'msiysinyuy@yahoo.com'}/>


        <ContactItem
        icon={<LocationOnIcon/>}
        title={'Address'}
        contact1={'Cameroon'}
        contact2={'Moliko, Buea, SouthWest'}/>
        </div>


      </div>
      </div>
    </div>
  )

}
export default ContactPage

import '../../styles/ContactItem.css'
function ContactItem({icon,title,contact1,contact2}){
  return(
    <div className='contactItem__container'>
        <div className='contactitem__leftcontent'>
            {icon}
        </div>
        <div className='contactitem__rightcontent'>
            <h6>{title}</h6>
            <p>{contact1}</p>
            <p>{contact2}</p>
        </div>

    </div>
  )
}
export default ContactItem

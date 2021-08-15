import '../styles/Resume.css'
import '../styles/MainLayout.css'
import Title from './Title'
import SmallTitle from './SmallTitle'
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter"
import SchoolIcon from '@material-ui/icons/School'
import ResumeItem from './ResumeItem'


function Resume(){
  return(

    <div className="resumemain__container">
    <Title title={'Resume'} span={'Resume'} />
      <div className="innerLayout">
          <div className="smallTitleMain__container">
          <SmallTitle icon={<BusinessCenterIcon/>} title={'Working Experince'} />

          </div>
          <div className="resume__content">
            <ResumeItem
            year={'2019 - 2020'}
            title={'Backend Developer'}
            subTitle={'wazaHub(software company)Cameroon /buea'}
            text={'Software Python BackEnd Developer, implementing microservice technologies.i belt the transaction service opon completion i moved to FrontEnd email-service creating over 200 difrent email templates. It was an intresting team of engineers'}

             />

              <div className="utility_margin_botom">
              <ResumeItem
              year={'2020 - present'}
              title={'Embriodery'}
              subTitle={'Cloth Designing Entrepreneur'}
              text={'Embriodery designing help polish skills of color blending and costomer service consultant and marketing as you deal directly with customers'}

               />
               </div>
          </div>
          <div className="smallTitleMain__container">
          <SmallTitle icon={<SchoolIcon/>} title={'Educational Qualifications'} />

          </div>
          <div className="resume__content">
          <ResumeItem
          year={' 2011'}
          title={'GENERAL CERTIFICATE OF EDUCATION (GCE)'}
          subTitle={'Ordinary Level'}
          text={'Biology-C,Mathematics-C,Religious Studies-C'}

           />
            <ResumeItem
            year={' 2012'}
            title={'GENERAL CERTIFICATE OF EDUCATION (GCE)'}
            subTitle={'Ordinary Level'}
            text={'Biology-B,Chemistry-C,Economics-B,	English Language-C,Geography-C,History-C,Mathematics-A,Additional Mathematics-B,Physics-C,Religious Studies-A'}

             />

             <ResumeItem
             year={' 2014'}
             title={'GENERAL CERTIFICATE OF EDUCATION (GCE)'}
             subTitle={'Advance Level'}
             text={'Biology-B,Chemistry-D,Pure Mathematics With Mechanics-B,Futher Mathematics-C,Physics-D'}

              />

             <ResumeItem
             year={'2016 - 2020'}
             title={'Bachelor of Science in Computer Engineering(BSCE)'}
             subTitle={'University Of Buea'}
             text={'Uncompleted, lark of funding. still to contineu'}

              />





              <div className="utility_margin_botom">
              <ResumeItem
              year={'2020 - present'}
              title={'Full-Stack Engineer '}
              subTitle={'THE ODIN PROJECT'}
              text={'77% COMPLETE'}

               />
              </div>

          </div>

       </div>
    </div>


  )
}

export default Resume

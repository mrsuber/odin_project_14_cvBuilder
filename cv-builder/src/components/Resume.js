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
            year={'2015 - 2020'}
            title={'Computer Science Teacher'}
            subTitle={'University Of Buea'}
            text={'Jamstack Explorers is an online learning platform where not only can you learn how to get the most from Netlify, but also about frameworks, APIs and clever web development techniques. Every mission lets you chart your course and track your progress—and you can earn rewards along the way. What new adventures will you find in the great unknown'}

             />

             <ResumeItem
             year={'2015 - present'}
             title={'Full Stack Developer'}
             subTitle={'Microsoft Studios'}
             text={'Jamstack Explorers is an online learning platform where not only can you learn how to get the most from Netlify, but also about frameworks, APIs and clever web development techniques. Every mission lets you chart your course and track your progress—and you can earn rewards along the way. What new adventures will you find in the great unknown'}

              />
              <div className="utility_margin_botom">
              <ResumeItem
              year={'2010 - 2017'}
              title={'User Interface Designer'}
              subTitle={'Google Inc'}
              text={'Jamstack Explorers is an online learning platform where not only can you learn how to get the most from Netlify, but also about frameworks, APIs and clever web development techniques. Every mission lets you chart your course and track your progress—and you can earn rewards along the way. What new adventures will you find in the great unknown'}

               />
               </div>
          </div>
          <div className="smallTitleMain__container">
          <SmallTitle icon={<SchoolIcon/>} title={'Educational Qualifications'} />

          </div>
          <div className="resume__content">
            <ResumeItem
            year={'2017 - 2020'}
            title={'Computer Science Degree'}
            subTitle={'University Of Buea'}
            text={'Jamstack Explorers is an online learning platform where not only can you learn how to get the most from Netlify, but also about frameworks, APIs and clever web development techniques. Every mission lets you chart your course and track your progress—and you can earn rewards along the way. What new adventures will you find in the great unknown'}

             />

             <ResumeItem
             year={'2015 - present'}
             title={'Full Stack Developer'}
             subTitle={'Microsoft Studios'}
             text={'Jamstack Explorers is an online learning platform where not only can you learn how to get the most from Netlify, but also about frameworks, APIs and clever web development techniques. Every mission lets you chart your course and track your progress—and you can earn rewards along the way. What new adventures will you find in the great unknown'}

              />

              <div className="utility_margin_botom">
              <ResumeItem
              year={'2010 - 2017'}
              title={'User Interface Designer'}
              subTitle={'Google Inc'}
              text={'Jamstack Explorers is an online learning platform where not only can you learn how to get the most from Netlify, but also about frameworks, APIs and clever web development techniques. Every mission lets you chart your course and track your progress—and you can earn rewards along the way. What new adventures will you find in the great unknown'}

               />
              </div>

          </div>

       </div>
    </div>


  )
}

export default Resume

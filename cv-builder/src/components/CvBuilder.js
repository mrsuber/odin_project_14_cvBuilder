import '../styles/CvBuilder.css'
import React, { useState } from 'react';
import PrintProvider, { NoPrint, Print } from 'react-easy-print';
import uniqid from 'uniqid';
import EducationSection from './cvBuilderComponents/EducationSection';
import ExpirienceSection from './cvBuilderComponents/ExperienceSection';
import GeneralSection from './cvBuilderComponents/GeneralSection';
import '../styles/forms.css'

function CvBuilder(){
  const [educationIds, setEducationIds] = useState([]);
  const [experienceIds, setExperienceIds] = useState([]);

  const handleClick = (type) => {
    if (type === 'experienceIds') {
      setExperienceIds((prevExpIds) => [...prevExpIds, uniqid()]);
    } else {
      setEducationIds((prevEduIds) => [...prevEduIds, uniqid()]);
    }
  };

  const handleDelete = (type, id) => {
    if (type === 'experienceIds') {
      setExperienceIds((prevExpIds) => {
        let newList = prevExpIds.filter((key) => key !== id);
        return newList;
      });
    } else {
      setEducationIds((prevEduIds) => {
        let newList = prevEduIds.filter((key) => key !== id);
        return newList;
      });
    }
  };

  const eduComponents = educationIds.map((id) => (
    <EducationSection key={id} id={id} handleDelete={handleDelete} />
  ));
  const expComponents = experienceIds.map((id) => (
    <ExpirienceSection key={id} id={id} handleDelete={handleDelete} />
  ));
  return(
    <div className="cv__container">
    <PrintProvider>
      <NoPrint>
        <main>
          <h1 className='title'>Create Your Cv</h1>
          <Print>
            <h2 className='subTitle'>General Information</h2>
            <GeneralSection />
          </Print>
          <div>
            <Print>
              <h2 className='subTitle'>Educational Experience</h2>
              {eduComponents}
            </Print>
            <button
              className='addBtn'
              onClick={() => handleClick('educationIds')}>
              Add
            </button>
          </div>
          <div>
            <Print>
              <h2 className='subTitle'>Experience Section</h2>
              {expComponents}
            </Print>
            <button
              className='addBtn'
              onClick={() => handleClick('experienceIds')}>
              Add
            </button>
          </div>
          <button
            onClick={() => {
              window.print();
            }}
            className='addBtn'>
            Print
          </button>
        </main>
      </NoPrint>
    </PrintProvider>
    </div>
  )
}
export default CvBuilder

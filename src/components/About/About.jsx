import React, { useContext } from 'react';
import { CultureContext } from '../../core/resources';
// import { WrapperResume } from './WrapperResume';
import { Skills } from './Skills';

const About = ({ close }) => {
  const { l } = useContext(CultureContext);
  return (
    <div className="about-modal">
      <h2 className="major">{l('about')}</h2>
      <Skills />
      {/* <WrapperResume /> */}
      {close}
    </div>
  );
};

export default About;

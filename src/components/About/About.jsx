import React from 'react';
import { WrapperResume } from './WrapperResume';
import { Skills } from './Skills';

const About = ({ close }) => {
  return (
    <div className="about-modal">
      <h2 className="major">Sobre</h2>
      <Skills />
      <WrapperResume />
      {close}
    </div>
  );
};

export default About;

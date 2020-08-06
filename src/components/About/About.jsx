import React from 'react';
import { History } from './History';
import { Skills } from './Skills';

const About = ({ close }) => (
  <div className="about-modal">
    <h2 className="major">Sobre</h2>

    <Skills />
    <History />

    {close}
  </div>
);

export default About;

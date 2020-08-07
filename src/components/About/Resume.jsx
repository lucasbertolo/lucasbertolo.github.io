import React from 'react';
import pdf from '../../assets/resumo.pdf';

const Resume = ({ fade }) => (
  <embed
    className={fade ? 'fadeIn' : 'fadeOut'}
    src={pdf}
    type="application/pdf"
  />
);
export default Resume;

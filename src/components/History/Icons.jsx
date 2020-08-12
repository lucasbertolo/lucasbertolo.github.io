import React, { Suspense } from 'react';
import vivo from '../../assets/images/logos/vivo.png';
import ise from '../../assets/images/logos/ise.png';
import freelancer from '../../assets/images/logos/typewriter.png';
import iplace from '../../assets/images/logos/iplace.jpg';
import gatec from '../../assets/images/logos/gatec.png';
import orange from '../../assets/images/logos/orange.png';
import ifsp from '../../assets/images/logos/ifsp.png';

export const VivoIcon = () => {
  return (
    <figure className="event-logo">
      <img src={vivo} alt="vivo" />
    </figure>
  );
};

export const IseIcon = () => {
  return (
    <Suspense fallback={<div> ... </div>}>
      <figure className="event-logo">
        <img src={ise} alt="ise-logo" />
      </figure>
    </Suspense>
  );
};

export const FreelancerIcon = () => {
  return (
    <Suspense fallback={<div> ... </div>}>
      <figure className="event-logo">
        <img src={freelancer} alt="freelancer-logo" />
      </figure>
    </Suspense>
  );
};

export const IplaceIcon = () => {
  return (
    <Suspense fallback={<div> ... </div>}>
      <figure className="event-logo">
        <img src={iplace} alt="iplace-logo" />
      </figure>
    </Suspense>
  );
};

export const GatecIcon = () => {
  return (
    <Suspense fallback={<div> ... </div>}>
      <figure className="event-logo">
        <img src={gatec} alt="gatec-logo" />
      </figure>
    </Suspense>
  );
};

export const OrangeIcon = () => {
  return (
    <Suspense fallback={<div> ... </div>}>
      <figure className="event-logo">
        <img src={orange} alt="orange-logo" />
      </figure>
    </Suspense>
  );
};

export const IfspIcon = () => {
  return (
    <Suspense fallback={<div> ... </div>}>
      <figure className="event-logo">
        <img src={ifsp} alt="vivo-logo" />
      </figure>
    </Suspense>
  );
};

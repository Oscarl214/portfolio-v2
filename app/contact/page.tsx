import React from 'react';
import Cube from '../componenets/cube';
import { ContactMotion } from '../componenets/contactpage/contactmotion';
import { EarthMotion } from '../componenets/contactpage/earthmotion';
import ContactForm from '../componenets/contactpage/contactform';
const Contact = () => {
  return (
    <div>
      <div className="flex  h-screen ">
        <div className="flex justify-evenly items-start flex-wrap lg:flex-nowrap overflow-auto">
          <EarthMotion>
            <Cube />
          </EarthMotion>

          <ContactMotion>
            <ContactForm />
          </ContactMotion>

          <video
            src={require('../../public/BG.mp4')}
            autoPlay
            muted
            playsInline
            loop
            className="video"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;

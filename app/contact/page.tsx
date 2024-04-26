import React from 'react';
import Cube from '../componenets/cube';
import { ContactMotion } from '../componenets/contactpage/contactmotion';
import { EarthMotion } from '../componenets/contactpage/earthmotion';
import ContactForm from '../componenets/contactpage/contactform';
const Contact = () => {
  return (


  
    <div className="flex justify-center items-center overflow-x-auto lg:overflow-x-visible">
      <div className="flex  flex-wrap-reverse lg:flex-nowrap ">
        <ContactMotion>
          <div className="flex justify-start">
            <ContactForm />
          </div>
        </ContactMotion>
        <EarthMotion>
          <Cube />
        </EarthMotion>

        {/* <video
          src={require('../../public/BG.mp4')}
          autoPlay
          muted
          playsInline
          loop
          className="video"
        /> */}
      </div>
  </div>
  );
};

export default Contact;

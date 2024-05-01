import React from 'react';
import Cube from '../componenets/cube';
import { ContactMotion } from '../componenets/contactpage/contactmotion';
import { EarthMotion } from '../componenets/contactpage/earthmotion';
import ContactForm from '../componenets/contactpage/contactform';
const Contact = () => {
  return (
    <div className="flex justify-center items-center overflow-x-invisible lg:overflow-x-invisible xl:overflow-x-visible">
      <div className="flex  flex-wrap-reverse md:flex-wrap-reverse  lg:flex-nowrap ">
        <ContactMotion>
          <div>
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

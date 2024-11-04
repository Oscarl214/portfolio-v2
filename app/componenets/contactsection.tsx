import React from 'react';
import { ContactMotion } from './contactpage/contactmotion';
import ContactForm from './contactpage/contactform';
import ContactTyping from './contactpage/ContactTyping';
const ContactSection = () => {
  return (
    <div>
      <div className=" header flex justify-center font-bold lg:text-6xl text-4xl text-green-500">
        <ContactTyping />
      </div>
      <ContactMotion>
        <ContactForm />
      </ContactMotion>
    </div>
  );
};

export default ContactSection;

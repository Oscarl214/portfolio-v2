import React from 'react';
import { ContactMotion } from './contactmotion';
import ContactForm from './contactform';
import ContactTyping from './ContactTyping';
const ContactSection = () => {
  return (
    <div>
      <ContactMotion>
        <ContactForm />
      </ContactMotion>
    </div>
  );
};

export default ContactSection;

import React from 'react';
import Cube from '../componenets/cube';

import ContactForm from '../componenets/contactpage/contactform';
const Contact = () => {
  return (
    <div className="flex flex-row  flex-wrap lg:flex-nowrap justify-around ">
      <ContactForm />
      <Cube />
    </div>
  );
};

export default Contact;

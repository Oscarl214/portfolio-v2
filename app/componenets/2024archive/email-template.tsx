import * as React from 'react';
import Logo from '../../public/ol-logo.png';
interface EmailTemplateProps {
  firstName: string;
  emailSubject: string;
  emailMessage: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  emailSubject,
  emailMessage,
}) => (
  <div>
    <h1>Hello, {firstName},</h1>
    <p>
      Thank you for reaching out. Ive received your message regarding{' '}
      {emailSubject} and Im eager to learn more about your inquiry. Please reply
      to this email with any additional details or questions you may have, and
      Ill get back to you as soon as possible.
    </p>
  </div>
);

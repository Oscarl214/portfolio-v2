import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  subject: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  subject,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    {/* <p>{subject}</p> */}
  </div>
);

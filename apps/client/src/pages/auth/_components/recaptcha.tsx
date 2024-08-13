import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

interface RecaptchaProps {
  callback: any;
}

const Recaptcha: React.FC<RecaptchaProps> = ({ callback }) => {
  const handleRecaptchaChange = (token: string | null) => {
    callback(token);
  };

  return (
    <ReCAPTCHA
      sitekey="6LdepR8qAAAAAFA3y008V23C3EUoqo6_nlTTOvt9"
      onChange={handleRecaptchaChange}
    />
  );
};

export default Recaptcha;

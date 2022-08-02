import React from 'react';
import { PrimaryButton } from '../components/PrimaryButton';
import { useNavigate } from 'react-router-dom';

export const Section = (props) => {
  const { children, title, buttonTitle, linkButton } = props;
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate(`/${linkButton}`);
  };

  return (
    <div className='flex flex-col'>
      <div className='flex justify-between mb-3 items-center'>
        <h3 className='font-bebas text-xl'>{title}</h3>
        <div>
          <PrimaryButton title={buttonTitle} handle={handleRedirect} />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

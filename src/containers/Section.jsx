import React from 'react';
import { PrimaryButton } from '../components/PrimaryButton';
import { useNavigate } from 'react-router-dom';

export const Section = (props) => {
  const { children, title, buttonTitle, linkButton, handle } = props;
  const navigate = useNavigate();
  const handleRedirect = () => {
    !handle ? navigate(`${linkButton}`) : handle();
  };

  return (
    <div className='flex flex-col'>
      <div className='flex justify-between mb-3 items-center'>
        <h3 className='font-bebas text-xl'>{title}</h3>
        {buttonTitle && (
          <div>
            <PrimaryButton title={buttonTitle} handle={handleRedirect} />
          </div>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};

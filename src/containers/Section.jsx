import React from 'react';
import { PrimaryButton } from '../components/PrimaryButton';
import { useNavigate } from 'react-router-dom';

export const Section = (props) => {
  const { children, title, buttonTitle, linkButton, handle } = props;
  const navigate = useNavigate();
  const windowWidth = window.innerWidth;
  const handleRedirect = () => {
    !handle ? navigate(`${linkButton}`) : handle();
  };
  console.log(windowWidth);

  return (
    <div className='flex flex-col'>
      <div className='flex justify-between mb-3 items-center dt: '>
        {windowWidth > 1000 && (
          <div className='flex-grow border-t border-blue-gray-100'></div>
        )}
        <h3 className='font-bebas text-xl text dt: text-3xl px-5'>{title}</h3>
        {windowWidth > 1000 && (
          <div className='flex-grow border-t border-blue-gray-100'></div>
        )}
        {buttonTitle && windowWidth < 1000 && (
          <div>
            <PrimaryButton title={buttonTitle} handle={handleRedirect} />
          </div>
        )}
      </div>
      <div>{children}</div>
      {buttonTitle && windowWidth > 1000 && (
        <div className='mt-5 mx-auto w-1/6'>
          <PrimaryButton title={buttonTitle} handle={handleRedirect} />
        </div>
      )}
    </div>
  );
};

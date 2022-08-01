import React from 'react';
import { PrimaryButton } from '../components/PrimaryButton';

export const Section = (props) => {
  const { children, title, buttonTitle, linkButton } = props;

  return (
    <div className='flex flex-col'>
      <div className='flex justify-between mb-3 items-center'>
        <h3 className='font-bebas text-xl'>{title}</h3>
        <div>
          <PrimaryButton title={buttonTitle} />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

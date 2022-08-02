import React from 'react';
import { Rating } from './Rating';

export const Review = (props) => {
  const { review } = props;

  return (
    <div className='flex flex-col gap-1 px-2'>
      <div className='flex justify-between text-sm'>
        <p>{review.author}</p>
        <p>{review.date}</p>
      </div>
      <Rating rating={review.rating} />
      <p className='text-sm font-light text-justify'>{review.review}</p>
    </div>
  );
};

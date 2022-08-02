import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

export const Rating = (props) => {
  const { rating } = props;
  const colorIcon = 'yellow';

  return (
    <div className='flex gap-1'>
      {rating > 1 ? (
        <BsStarFill color={colorIcon} />
      ) : rating >= 0.5 && rating < 1 ? (
        <BsStarHalf color={colorIcon} />
      ) : (
        <BsStar color={colorIcon} />
      )}
      {rating > 2 ? (
        <BsStarFill color={colorIcon} />
      ) : rating >= 1.5 && rating < 2 ? (
        <BsStarHalf color={colorIcon} />
      ) : (
        <BsStar color={colorIcon} />
      )}
      {rating > 3 ? (
        <BsStarFill color={colorIcon} />
      ) : rating >= 2.5 && rating < 3 ? (
        <BsStarHalf color={colorIcon} />
      ) : (
        <BsStar color={colorIcon} />
      )}
      {rating > 4 ? (
        <BsStarFill color={colorIcon} />
      ) : rating >= 3.5 && rating < 4 ? (
        <BsStarHalf color={colorIcon} />
      ) : (
        <BsStar color={colorIcon} />
      )}
      {rating > 5 ? (
        <BsStarFill color={colorIcon} />
      ) : rating >= 4.5 && rating < 5 ? (
        <BsStarHalf color={colorIcon} />
      ) : (
        <BsStar color={colorIcon} />
      )}
    </div>
  );
};

import React from 'react';

export const Selected = (props) => {
  props && console.log(props);
  const { name, rating, status, category, hours, address } = props;

  return (
    <>
      <h3>{name}</h3>
    </>
  );
};

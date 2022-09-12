import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Menu from './Menu';

test('renders content', () => {
  const menu = {
    content: 'This is a test',
    important: true,
  };

  const view = render(<Menu />);
  console.log(view);
});

import React from 'React';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from '../constants/history';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Album from '../components/album';

describe('<Album />', () => {
  test('Renders without crashing', () => {
    const { getByTestId } = render(<Album />);
    expect(getByTestId('album-title')).toBeInTheDocument();
  });

  test('Correctly renders title prop', () => {
    const { getByText } = render(<Album title={'saj_M'} />);
    expect(getByText('saj_M')).toBeInTheDocument();
  });
});

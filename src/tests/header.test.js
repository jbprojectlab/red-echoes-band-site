import React from 'React';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '../components/header';

describe('<Header />', () => {
  test('Renders without crashing', () => {
    const { getByText } = render(
      <Router>
        <Header />
      </Router>
    );
    expect(getByText('seiZmiK 7')).toBeInTheDocument();
  });
});

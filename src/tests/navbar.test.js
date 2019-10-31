import React from 'React';
import {BrowserRouter as Router} from 'react-router-dom';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavBar from '../components/navbar';

describe('<NavBar />', () => {
  test('Renders without crashing', () => {
    const {getByText} = render(
      <Router>
        <NavBar />
      </Router>
    );
    expect(getByText('SajMatiK')).toBeInTheDocument();
    expect(getByText('SMK')).toBeInTheDocument();
  });
});

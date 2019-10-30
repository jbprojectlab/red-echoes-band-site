import React from 'React';
import {BrowserRouter as Router} from 'react-router-dom';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../components/app';

describe('<App />', () => {
  test('Renders without crashing', () => {
    const {getByText} = render(
      <Router>
        <App />
      </Router>
    );
    expect(getByText('seiZmiK 7')).toBeInTheDocument();
  });
});

import React from 'React';
import {BrowserRouter as Router} from 'react-router-dom';
import {createMemoryHistory} from '../constants/history';
import {render, fireEvent, getByRole} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../components/app';

describe('<App />', () => {
  test('full app rendering/navigating', () => {
    const history = createMemoryHistory();
    const {container, getByText, getByRole} = render(
      <Router>
        <App />
      </Router>
    );
    expect(getByRole('heading').innerHTML).toMatch('seiZmiK 7');
    fireEvent.click(getByText(/SMK/));
    expect(getByRole('banner').innerHTML).toMatch('SMK');
    expect(getByRole('banner').innerHTML).not.toMatch('SajMatiK');
  });
});

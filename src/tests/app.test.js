import React from 'React';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from '../constants/history';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../components/app';

describe('<App />', () => {
  test('full app rendering/navigating', () => {
    const history = createMemoryHistory();
    const {container, getByText, getAllByRole} = render(
      <Router history={history}>
        <App />
      </Router>
    );
    expect(getAllByRole('heading')[0]).toHaveTextContent('seiZmiK 7');
    fireEvent.click(getByText(/SMK/));
    expect(getAllByRole('banner')[0]).toHaveTextContent('SMK');
  });

  test('landing on a bad page shows 404 page', () => {
    const history = createMemoryHistory();
    history.push('/bad/route');
    const {getAllByRole} = render(
      <Router history={history}>
        <App />
      </Router>
    );
    expect(getAllByRole('banner')[0]).toHaveTextContent('404 Not Found');
  });
});

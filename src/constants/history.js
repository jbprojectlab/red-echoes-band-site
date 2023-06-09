const createHistory = require('history').createBrowserHistory;

export const createMemoryHistory = require('history').createMemoryHistory;

const history =
  process.env.NODE_ENV === 'test' ? createMemoryHistory() : createHistory();

export default history;

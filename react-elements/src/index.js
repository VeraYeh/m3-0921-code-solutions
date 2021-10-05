import React from 'react';
import ReactDOM from 'react-dom';

const h1 = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

const container = document.getElementById('root');

ReactDOM.render(h1, container);

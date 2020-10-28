import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// if (process.env.NODE_ENV !== 'production') {
//   import('react-axe').then(axe => {
//     axe.default(React, ReactDOM, 1000);
//     ReactDOM.render(<App />, document.getElementById('root'));
//   });
// } else {
//   ReactDOM.render(<App />, document.getElementById('root'));
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

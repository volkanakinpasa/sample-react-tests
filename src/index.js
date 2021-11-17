import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export function Index() {
  return (
    <div className="App">
      <App />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Index />, rootElement);

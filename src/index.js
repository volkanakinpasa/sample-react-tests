import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

export function App() {
  return (
    <div className="App">
      <h1>Welcome to React testing</h1>
      <Counter initialValue={0} />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

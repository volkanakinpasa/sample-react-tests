import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
// import { isEmpty } from 'lodash';

// export const Input = ({ onChange }) => {
//   const [value, setValue] = React.useState('1');
//   const formatAndUpdateValue = React.useCallback((e) => {
//     const { value } = e.target;
//     const boundedValue = isEmpty(value.trim()) ? '1' : value;
//     setValue(boundedValue);
//     onChange(Number(boundedValue));
//   }, []);

//   return <input onChange={formatAndUpdateValue} value={value} type="text" />;
// };

export function App() {
  return (
    <div className="App">
      <h1>Welcome to Enzyme-Hooks testing practice</h1>
      <Counter initialValue={10} />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

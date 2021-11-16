import React, { useEffect } from 'react';

export default function Counter(props) {
  const [count, setCount] = React.useState(props.initialValue || 0);
  const [incrementBy, setIncrementBy] = React.useState(1);
  const [showSomething, setShowSomething] = React.useState(null);

  const fetchData = () => {
    setShowSomething(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <input
          onChange={(val) => {
            setIncrementBy(val.target.value);
          }}
        />
        <span
          style={{ fontStyle: 'italic' }}
        >{`counting by ${incrementBy}`}</span>
      </div>
      <button
        onClick={() => {
          setCount(count - incrementBy);
        }}
        data-testid="down"
      >
        Down
      </button>
      <span data-testid="count-result" className="count-result">
        {count}
      </span>
      <button
        data-testid="up"
        onClick={() => {
          setCount(count + incrementBy);
        }}
      >
        Up
      </button>

      {showSomething && (
        <div data-testid="show-something">
          showSomething:{showSomething.toString()}
        </div>
      )}
    </div>
  );
}

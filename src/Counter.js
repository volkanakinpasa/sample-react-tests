import React, { useEffect } from 'react';

export default function Counter(props) {
  const [count, setCount] = React.useState(props.initialValue || 0);
  const [incrementBy, setIncrementBy] = React.useState(1);
  const [showSomething, setShowSomething] = React.useState(null);

  const fetchData = () => {
    setShowSomething(true);
  };

  const increase = () => {
    setCount((c) => c + incrementBy);
  };
  const decrease = () => {
    setCount((c) => c - incrementBy);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <section>
        <input
          onChange={(val) => {
            if (!isNaN(val.target.value))
              setIncrementBy(parseInt(val.target.value));
          }}
        />
        <span
          style={{ fontStyle: 'italic' }}
        >{`counting by ${incrementBy}`}</span>
        <button onClick={decrease} data-testid="down">
          Down
        </button>
        <span data-testid="count-result" className="count-result">
          {count}
        </span>
        <button data-testid="up" onClick={increase}>
          Up
        </button>
      </section>

      {showSomething && (
        <div data-testid="show-something">
          showSomething:{showSomething.toString()}
        </div>
      )}
    </div>
  );
}

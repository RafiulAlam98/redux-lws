import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import Stats from "./components/Stats/Stats";

const initialState = [
  {
    id: 1,
    count: 0,
  },
  {
    id: 2,
    count: 0,
  },
];

function App() {
  const [state, setState] = useState(initialState);

  const totalCount = state.reduce((t, c) => {
    return t + c.count;
  }, 0);

  const increment = (id) => {
    const updatedState = state.map((counter) => {
      if (counter.id === id) {
        return {
          ...counter,
          count: counter.count + 1,
        };
      }
      return { ...counter };
    });
    setState(updatedState);
  };
  const decrement = (id) => {
    const updatedState = state.map((counter) => {
      if (counter.id === id) {
        return {
          ...counter,
          count: counter.count - 1,
        };
      }
      return { ...counter };
    });
    setState(updatedState);
  };

  return (
    <div className="App bg-gray-100">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold mt-10">
        Simple Counter Application
      </h1>
      {state.map((count) => (
        <Counter
          key={count.id}
          id={count.id}
          increment={increment}
          decrement={decrement}
          count={count.count}
        />
      ))}
      <Stats totalCount={totalCount} />
    </div>
  );
}

export default App;

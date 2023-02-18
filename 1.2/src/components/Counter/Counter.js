import React from "react";
import Button from "../Button/Button";

const Counter = ({ count, increment, decrement, id }) => {
  return (
    <div className="w-screen p-8  text-slate-700">
      <div className="max-w-md mx-auto  space-y-5">
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
          <div className="text-2xl font-semibold" id="counter">
            {count}
          </div>
          <div className="flex space-x-3">
            <Button handler={() => increment(id)}>Increment</Button>
            <Button handler={() => decrement(id)}>Decrement</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;

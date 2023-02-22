import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../redux/counter/actions';

const Counter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  const incrementHandler = value => {
    dispatch(increment(value));
  };
  const decrementHandler = value => {
    dispatch(decrement(value));
  };
  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <div className="max-w-md mx-auto mt-10 space-y-5">
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
          <div className="text-2xl font-semibold" id="counter">
            {count}
          </div>
          <div className="flex space-x-3">
            <button
              className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
              onClick={() => incrementHandler(5)}
            >
              Increment
            </button>
            <button
              className="bg-red-400 text-white px-3 py-2 rounded shadow"
              onClick={() => decrementHandler(2)}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;

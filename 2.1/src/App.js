import { Provider } from 'react-redux';
import './App.css';
import Counter from './components/Counter/Counter';
import store from './Store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
        <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
          Simple Counter Application
        </h1>
        <Counter id="2" />
      </div>
    </Provider>
  );
}

export default App;

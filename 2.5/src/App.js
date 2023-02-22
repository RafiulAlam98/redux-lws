import { Provider } from 'react-redux';
import './App.css';
import Counter from './components/Counter/Counter';
import store from './Store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
        <h2>hello</h2>
      </div>
    </Provider>
  );
}

export default App;

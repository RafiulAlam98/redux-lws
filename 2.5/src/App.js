import { Provider } from 'react-redux';
import './App.css';
import Counter from './components/Counter/Counter';
import Dcounter from './components/Dcounter/Dcounter';

import store from './Store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
        <Dcounter />
      </div>
    </Provider>
  );
}

export default App;

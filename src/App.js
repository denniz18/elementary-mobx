import React from 'react';
import { observer } from 'mobx-react-lite';
import counter from './store/counter';
import { Todo } from './Todo';
import './App.css';

const App = observer(() => {
  return (
    <div className="App">
      <div className="container">
        <span>Counter: {counter.count}</span>
        <div className="btns">
          <button onClick={() => counter.increment()} className="btn">
            +
          </button>
          <button onClick={() => counter.decrement()} className="btn">
            -
          </button>
        </div>
      </div>
      <Todo />
    </div>
  );
});

export default App;

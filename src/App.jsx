import { useReducer } from 'react';
import { upAction,dateAction,downAction,restartAction,multiAction } from './store/actions/counterAction';
import {counterReducer} from './store/reducers/counterReducer';


const initialState = 0
 

function App() {
  const [myState, dispatch] = useReducer(counterReducer, initialState);
  // const inputCounter = useRef(0)

  return (
    <div className="App">
      <h1>{myState}</h1>
      {/* <input ref={inputCounter} type="number" /> */}
      <button onClick={() => dispatch(upAction())}>UP</button>
      <button onClick={() => dispatch(downAction())}>DOWN</button>
      <button onClick={() => dispatch(restartAction())}>RESTART</button>
      <button onClick={() => dispatch(dateAction())}>DATA</button>
      <button onClick={() => dispatch(multiAction())}>MULTIPLY</button>
    </div>
    
  );
}

export default App;

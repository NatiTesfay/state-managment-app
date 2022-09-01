import { useReducer } from 'react';
import {counterReducer} from './components/store/reducers/counterReducer/'
import { UP_ACTION,DOWN_ACTION,ZERO_ACTION } from './components/store/actions/counterAction/';



const initialState = 0
 

function App() {
  const [myState, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>{myState}</h1>
      <button onClick={() => dispatch({type:"UP"})}>UP</button>
      <button onClick={() => dispatch({type:"DOWN"})}>DOWN</button>
      <button onClick={() => dispatch({type:"ZERO"})}>0</button>
    </div>
    
  );
}

export default App;

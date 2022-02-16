import './App.css';
import{useSelector,useDispatch} from "react-redux"
//state için useSelector, action için useDispatch
import {increase,reset,decrease,increaseMore} from "./redux/actions/actions"

function App() {
  const counter = useSelector(state => state.counter)
  // const {counter}=useSelector(state => state)
  const dispatch = useDispatch()
  
  return (
    <div className="App">
      <header className='App-header'>
        <h2>Counter</h2>
          <div>
            <h1>{counter}</h1>
          </div>
          <div>
          {/* <button onClick={()=>dispatch({type:"INCREASE"})}
                      className='btn-increment'>Increase</button> */}
          <button onClick={()=>dispatch(increase(1))}
                  className='btn-increment'>Increase</button>
          <button onClick={()=>dispatch(reset(0))}
                  className='btn-reset'>Reset</button>
          <button onClick={()=>dispatch(decrease(1))}
                  className='btn-decrement'>Decrease</button>
          <button onClick={()=>dispatch(increaseMore(100))}
                  className='btn-incrementMore'>increaseMore</button>
          </div>
      </header>
    </div>
  );
}

export default App;

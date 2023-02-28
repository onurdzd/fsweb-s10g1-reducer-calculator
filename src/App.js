import React from 'react';
import { useReducer } from 'react';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer from './reducers';
import { initialState } from './reducers';
import { addOne ,applyNumber,changeOperation,clearDisplay,memoryPlus,memoryReplace,memoryClear} from './actions/index';

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation"><b>Operation:{state.operation}</b> X</span>
              <span id="memory"><b>Memory:{state.memory}</b> 0</span>
            </div>

            <div className="row">
              <CalcButton
                onClick={(item) => dispatch(memoryPlus(item))}
                value={"M+"}
              />
              <CalcButton
                onClick={(number) => dispatch(memoryReplace(number))}
                value={"MR"}
              />
              <CalcButton
                onClick={() => dispatch(memoryClear())}
                value={"MC"}
              />
            </div>

            <div className="row">
              <CalcButton onClick={() => dispatch(applyNumber(1))} value={1} />
               {/* <CalcButton value={1} onClick={(e)=>addOne(dispatch)} /> */}
              <CalcButton onClick={() => dispatch(applyNumber(2))} value={2} />
              <CalcButton onClick={() => dispatch(applyNumber(3))} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={() => dispatch(applyNumber(4))} value={4} />
              <CalcButton onClick={() => dispatch(applyNumber(5))} value={5} />
              <CalcButton onClick={() => dispatch(applyNumber(6))} value={6} />
            </div>

            <div className="row">
              <CalcButton onClick={() => dispatch(applyNumber(7))} value={7} />
              <CalcButton onClick={() => dispatch(applyNumber(8))} value={8} />
              <CalcButton onClick={() => dispatch(applyNumber(9))} value={9} />
            </div>

            <div className="row">
              <CalcButton
                onClick={() => dispatch(changeOperation("+"))}
                value={"+"}
              />
              <CalcButton
                onClick={() => dispatch(changeOperation("*"))}
                value={"*"}
              />
              <CalcButton
                onClick={() => dispatch(changeOperation("-"))}
                value={"-"}
              />
            </div>

            <div className="row ce_button">
              <CalcButton
                onClick={() => dispatch(clearDisplay())}
                value={"CE"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

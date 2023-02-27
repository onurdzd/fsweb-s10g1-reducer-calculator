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
              <CalcButton value={"M+"} onClick={()=>memoryPlus(dispatch)}/>
              <CalcButton value={"MR"} onClick={()=>memoryReplace(dispatch)}/>
              <CalcButton value={"MC"} onClick={()=>memoryClear(dispatch)}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={()=>applyNumber(dispatch,1)} />
              {/* <CalcButton value={1} onClick={()=>addOne(dispatch)} /> */}
              <CalcButton value={2} onClick={()=>applyNumber(dispatch,2)}/>
              <CalcButton value={3} onClick={()=>applyNumber(dispatch,3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={()=>applyNumber(dispatch,4)}/>
              <CalcButton value={5} onClick={()=>applyNumber(dispatch,5)}/>
              <CalcButton value={6} onClick={()=>applyNumber(dispatch,6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={()=>applyNumber(dispatch,7)}/>
              <CalcButton value={8} onClick={()=>applyNumber(dispatch,8)}/>
              <CalcButton value={9} onClick={()=>applyNumber(dispatch,9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={()=>changeOperation(dispatch,"+")}/>
              <CalcButton value={"*"} onClick={()=>changeOperation(dispatch,"*")}/>
              <CalcButton value={"-"} onClick={()=>changeOperation(dispatch,"-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={()=>clearDisplay(dispatch)} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

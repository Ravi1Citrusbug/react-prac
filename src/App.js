
import './App.css';
import React,{useReducer} from 'react';
import HookCounterone from './Usestate/HookCounterone';
import HookCounter2 from './Usestate/HookCounter2';
import HookCounter3 from './Usestate/HookCounter3';
import HookCounter4 from './Usestate/HookCounter4';
import HookEffect1 from './Useeffect/HookEffect1';
import HookEffect2 from './Useeffect/HookEffect2';
import HookEffect3 from './Useeffect/HookEffect3';
import HookEffect4 from './Useeffect/HookEffect4';
import IntervalHookCounter from './Datafetching/IntervalHookCounter';
import DataFetchingOne from './Datafetching/DataFetchingOne';
import DataFetchingTwo from './Datafetching/DataFetchingTwo';
import DataFetchingThree from './Datafetching/DataFetchingThree';
// import ComponentC from './Usecontext/ComponentC';
import CounterOne from  "./usereducer/CounterOne";
import CounterTwo from  "./usereducer/CounterTwo";
import CounterThree from  "./usereducer/CounterThree";
import ComponentA from './usereducer_usecontext/ComponentA';
import ComponentB from './usereducer_usecontext/ComponentB';
import ComponentC from './usereducer_usecontext/ComponentC';
import FetchingErrorState from './Data_fetching_error/FetchingErrorState';
export const userContext = React.createContext();
export const channelContext = React.createContext();
export const countContext = React.createContext();


const intialState = 0;
const reducer=(state,action)=>{
    switch (action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return intialState
        default:
            return state            
    }
}

function App() {
  const  [count,dispatch] = useReducer(reducer,intialState);
  return (
    <div className="App">
      {/* <HookCounterone></HookCounterone> */}
      {/* <HookCounter2></HookCounter2> */}
      {/* <HookCounter3></HookCounter3> */}
      {/* <HookCounter4></HookCounter4> */}
      {/* <HookEffect1></HookEffect1> */}
      {/* <HookEffect2></HookEffect2> */}
      {/* <HookEffect3></HookEffect3> */}
      {/* <HookEffect4></HookEffect4> */}
      {/* <IntervalHookCounter></IntervalHookCounter> */}
      {/* <DataFetchingOne></DataFetchingOne> */}
      {/* <DataFetchingTwo></DataFetchingTwo> */}
      {/* <DataFetchingThree></DataFetchingThree> */}
      {/* <userContext.Provider value ={ 'ravi'}>
         <channelContext.Provider value = { 'reactjs'}>
            <ComponentC/>

          </channelContext.Provider>
      </userContext.Provider> */}
      {/* <CounterOne></CounterOne> */}
      {/* <CounterTwo></CounterTwo> */}
      {/* <CounterThree></CounterThree> */}
      <FetchingErrorState></FetchingErrorState>
     
    </div>
    // <div className="App">
    //   <countContext.Provider value = {{count, dispatch}}>
    //     count -{count}
    //     <ComponentA></ComponentA>
    //     <ComponentB></ComponentB>
    //     <ComponentC></ComponentC>
    //   </countContext.Provider>
    // </div>
  );
}

export default App;

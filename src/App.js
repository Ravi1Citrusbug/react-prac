
import './App.css';
import React from 'react';
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
import ComponentC from './Usecontext/ComponentC';
export const userContext = React.createContext();
export const channelContext = React.createContext();
function App() {
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
      <userContext.Provider value ={ 'ravi'}>
         <channelContext.Provider value = { 'reactjs'}>
            <ComponentC/>

          </channelContext.Provider>
      </userContext.Provider>
    </div>
  );
}

export default App;

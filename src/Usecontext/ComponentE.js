import React,{useContext} from 'react';
import  ComponentF  from './ComponentF'
import  { userContext,channelContext }  from "../App"
function ComponentE(){
    const user = useContext(userContext)
    const channel = useContext(channelContext);
    return (
       <>
       <div>heloo {user} {channel}</div>
        <ComponentF></ComponentF>
        </>
    )
}
export default ComponentE
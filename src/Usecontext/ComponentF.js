import React from 'react';
import  { userContext,channelContext }  from "../App"
function ComponentF(){
    return (
      <div>
        <userContext.Consumer>
            {
                user =>{
                    return <channelContext.Consumer>
                        {
                            channelValue =>{
                                return <div>i'm {user} and {channelValue}</div>
                            }
                        }

                    </channelContext.Consumer>
                 
                }
            }
        </userContext.Consumer>
      </div>
    )
}
export default ComponentF
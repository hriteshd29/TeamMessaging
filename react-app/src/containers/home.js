import React from 'react';
import Button from '../component/button/index.js'
export default function Home(){
    return(
      <>
      <div style="display:flex">
        <Left/>
        <Middle/>
        <Right/>
      </div>
      </>
    )
  }
  
  function Left(){
    const [channelList, setChannel] = React.useState([]);
    function createChannel(){
  
    }
    return(
      <>
      <h2>Channels ...</h2>
      <Button onClick={createChannel} text="Create : First Channel" type="create"/>
      <ul>
      {/* {
        channelList.maps(function(channel){
          
        })
      } */}
      </ul>
      </>
    )
  }
  
  function Middle(){
    return(
      <>
      <h1>Welcome Hritesh</h1>
      </>
    )
  }
  
  function Right(){
    return(
      <>
         <h2>Participants ...</h2>
      </>
    )
  }
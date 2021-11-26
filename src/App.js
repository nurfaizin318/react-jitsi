import React, { useState } from 'react'
import Jitsi from 'react-jitsi'
 
export const App = () => {
 
  const [displayName, setDisplayName] = useState('')
  const [roomName, setRoomName] = useState('')
  const [password, setPassword] = useState('')
  const [onCall, setOnCall] = useState(false)



  const handleAPI = (JitsiMeetAPI) => {
    JitsiMeetAPI.addEventListener("passwordRequired", () => {
        JitsiMeetAPI.executeCommand("password", password);
    });
    JitsiMeetAPI.executeCommand('toggleVideo')
}
 
  return onCall
    ? (
      <Jitsi
      config={{ prejoinPageEnabled: false ,}}
      containerStyle={{ width: '100vw', height: '100vh' }}
      interfaceConfig={{ filmStripOnly: true }}
      roomName={roomName}
      displayName={displayName}
      password={password}
      //     loadingComponent={<div>loading</div>}
      onAPILoad={handleAPI}
  />)
    : (
      <div style={{width:"100vw",height:"100vh",background:"orange",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",backgroundImage:"url(https://c0.wallpaperflare.com/preview/452/302/536/brainstorming-colleagues-communication-discussion.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"100%"}}>
        <h1>Crate a Meeting</h1>
        <input style={{outline:"none",border:"none",height:40,width:240,borderRadius:5,textAlign:"center",marginTop:2}} className="roomInput" type='text' placeholder='Room name' value={roomName} onChange={e => setRoomName(e.target.value)} />
        <input  style={{outline:"none",border:"none",height:40,width:240,borderRadius:5,textAlign:"center",marginTop:2}} className="nameInput" type='text' placeholder='Your name' value={displayName} onChange={e => setDisplayName(e.target.value)} />
        <input style={{outline:"none",border:"none",height:40,width:240,borderRadius:5,textAlign:"center",marginTop:2}} className="passwordInput" type='password' placeholder='password' value={password} onChange={e => setPassword(e.target.value)} />
        <button style={{width:120,height:40, borderRadius:5,outline:"none",border:"none",marginTop:5}} onClick={() => setOnCall(true)}> Let&apos;s start!</button>
      </div>
    )
 
}

export default App
import  Axios  from 'axios';
import React from 'react'
import { Route, Switch } from "react-router-dom";
import Feedback from './pages/Feedback';
import GenerateQR from './pages/GenerateQR';
// import Home2 from './pages/Home2'

import Home from './pages/Home';
import MapRoutes from './pages/MapRoutes';
import Send from './pages/Send';


const App = () => {
  // Axios.get("https://api.tomtom.com/search/2/reverseGeocode/52.157831,5.223776.json?key={A4JdjAXem9GMnoBQweVRTjljsJpen4Bg}&radius=100").then(x=>{
  //   console.log(x);
  // }).catch(e=>{
  //   console.log(e);
  // })
  return (
    
       <div>
      <Switch>
      

        <Route exact  path="/"  >
        <Home />
        </Route>  
        
        <Route  path="/qr"  >
        <GenerateQR />
        </Route>  
        {/* <Route path="/home2">
          <Home2 />
        </Route> */}
        <Route path="/feedback">
          <Feedback />
        </Route>

        <Route path="/send">
          <Send />
        </Route>

        <Route path="/maps">
          <MapRoutes />
        </Route>
         
      </Switch>

      </div>

  )
}

export default App

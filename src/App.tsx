import * as React from 'react';
import Home from './modules/Home/index'
import Camera from './modules/Camera/index'
import {Switch, Route} from "react-router-dom";

import './App.css';

const App: React.FC<{ loading: boolean }> = ({ loading }) => {
    if (loading) {
      return <header>{`Loading...`}</header>
    }

    const getMockedPhotoSrc = (randomNumber: number) => `./mocked-fotos/driver-licence_${randomNumber}.jpg`;
    const fotoSrc = getMockedPhotoSrc(1);

      return(
        <div>
          <Switch>
              <Route exact path="/">
                <Home isAccepted={true} fotoSrc={'o'} />
              </Route>
              <Route exact path="/camera">
                <Camera hasPhotoTakenCorrectly={true} isLightSufficient={true} />
              </Route>
          </Switch>
          
         {/*  <Camera hasPhotoTakenCorrectly={true} isLightSufficient={true} /> */}
        </div>
      ) 
}

export default App;

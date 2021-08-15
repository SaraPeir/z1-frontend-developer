import * as React from 'react';
import Home from './modules/Home/index'
import Camera from './modules/Camera/index'
import {Switch, Route} from "react-router-dom";
import {useSelector} from 'react-redux';
import {RootState} from './redux/store';

import './App.css';

const App: React.FC = () => {
    const currentState = useSelector((state: RootState) => {
        return state
    })

    const {hasPhotoBeenTakenCorrectly, apiHasBeenCalled} = currentState.fetchApi.value
    const {srcPhoto} = currentState.setPhoto.photo;
    console.log('srcPhoto App', srcPhoto)

      return(
        <React.Fragment>
          <Switch>
              <Route exact path="/">
                <Home hasPhotoBeenTakenCorrectly={hasPhotoBeenTakenCorrectly} fotoSrc={srcPhoto} />
              </Route>
              <Route exact path="/camera">
                <Camera hasPhotoBeenTakenCorrectly={hasPhotoBeenTakenCorrectly} apiHasBeenCalled={apiHasBeenCalled} isLightSufficient={false} fotoSrc={srcPhoto} />
              </Route>
          </Switch>
        </React.Fragment>
      ) 
}

export default App;

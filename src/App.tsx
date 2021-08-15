import * as React from 'react';
import Home from './modules/Home/index'

import './App.css';

const App: React.FC<{ loading: boolean }> = ({ loading }) => {
    if (loading) {
      return <header>{`Loading...`}</header>
    }

    const getMockedPhotoSrc = (randomNumber: number) => `./mocked-fotos/driver-licence_${randomNumber}.jpg`;
    const fotoSrc = getMockedPhotoSrc(1);

      return(
        <div>
          <Home loading={false} fotoSrc={'f'} />
        </div>
      ) 
}

export default App;

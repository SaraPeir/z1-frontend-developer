import * as React from 'react';
import Home from './modules/Home/index'

import './App.css';

const App: React.FC<{ loading: boolean }> = ({ loading }) => {
    if (loading) {
      return <header>{`Loading...`}</header>
    }

      return(
        <div>
          <Home loading={false} />
        </div>
      ) 
}

export default App;

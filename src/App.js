import './App.css';

import React, { useState } from 'react'
import NavBar from './components/Navbar';
import Queries from './components/Queries';
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const [progress, setProgress] = useState(0);
  return (
    <div>
      <NavBar />
      <br />
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
      <Queries setProgress={setProgress} />
    </div>
  )

}

export default App;
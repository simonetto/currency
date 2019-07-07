import React from 'react';
import AppHeader from '../appHeader';
import LeftPanel from '../leftPanel';
import RightPanel from '../rightPanel';
import './App.scss';


function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="grey-bg"></div>
      <div className="centered-row page-main">
        <div className="page-width">
          <LeftPanel />
          <RightPanel />
        </div>
      </div>
    </div>
  );
}

export default App;

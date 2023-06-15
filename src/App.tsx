import React, { useState } from 'react';
import './App.css';
import MenuBar from './MenuBar/MenuBar';
import AddHealthData from './components/AddHealthData/AddHealthData';
import ShowHealthData from './components/ShowHealthData/ShowHealthData';
import AnData from './components/AnData/AnData';
import { MainContextWrapper } from './Store/mainContext/mainContext';

function App() {
  const [loadComponent, setLoadComponent] = useState(<AddHealthData/>)
  const  buttonArr = [
    {
      id: 1,
      label: 'add-health',
      btFun: () => {setLoadComponent(<AddHealthData/>)}
    },
    {
      id: 2,
      label: 'show-health',
      btFun: () => {setLoadComponent(<ShowHealthData/>)}
    },
    {
      id: 3,
      label: 'analytics-health',
      btFun:() => {setLoadComponent(<AnData/>)}
    },
  ];

  return (
  <MainContextWrapper>
       <div>
      <MenuBar buttonArr={buttonArr} />
    {loadComponent}
    </div>
  </MainContextWrapper>
  );
}

export default App;

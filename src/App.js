import React, { useContext } from 'react'
import './App.css'
import { MyContext } from './myContext'
import ChildOne from './components/childOne'
import ChildTwo from './components/childTwo'
import ChildThree from './components/childThree'

function App() {
  const { commonData } = useContext(MyContext)
  return (
    <div className="App">
      <h2>Content : <b>{commonData}</b></h2>
      <div className="children">
        <div className="child child-1"><ChildOne /></div>
        <div className="child child-2"><ChildTwo /></div>
        <div className="child child-3"><ChildThree /></div>
      </div>
    </div>
  );
}

export default App;

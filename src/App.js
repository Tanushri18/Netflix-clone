import React from 'react'
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import "./App.css"
import RowPost from './components/RowPost/RowPost';
function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RowPost/>
    </div>
  )
}




export default App;

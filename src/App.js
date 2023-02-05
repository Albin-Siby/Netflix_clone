import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import "./App.css"
import Banner from './Components/Banner/Banner';
import RowPoster from './Components/RowPoster/RowPoster';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPoster/>
    </div>
  );
}

export default App;

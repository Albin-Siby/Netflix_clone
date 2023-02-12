import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import "./App.css"
import {originals,action,comedy,horror,romance} from "./urls"
import Banner from './Components/Banner/Banner';
import RowPoster from './Components/RowPoster/RowPoster';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPoster url={originals} title= "Netflix Originals" />
      <RowPoster url={action} title="Action Movies" isSmall />
      <RowPoster url={comedy} title="Comedy Movies" isSmall />
      <RowPoster url={horror} title="Horror Movies" isSmall />
      <RowPoster url={romance} title="Romance Movies" isSmall />
    </div>
  );
}

export default App;

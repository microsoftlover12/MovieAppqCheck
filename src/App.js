import React from 'react';
import Content from './Components/Content.js';
import FirstMovieContent from './Components/FirstMovieContent.js';


function App() {
  return (
    <div className="App">
      <h1>Movie App</h1>
      <Content />
      <h1>Movie Names</h1>
      <FirstMovieContent/>
    

    </div>

  );
}

export default App;

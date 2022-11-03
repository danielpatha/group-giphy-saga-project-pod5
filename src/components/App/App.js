import React from 'react';
import Search from '../Search/Search';
import {useEffect} from 'react';
import axios from 'axios';


function App(props) {

  useEffect(() => {
   //
    
  }, [])
  return (

    <div>
      <h1>Giphy Search!</h1>
      <Search />
    </div>
  );
}

export default App;

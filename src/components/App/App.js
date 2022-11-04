import React from 'react';
import Search from '../Search/Search';
import { useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';


function App(props) {
  const store = useSelector(store => store.giphyReducer)

  console.log('store', store.data)

  useEffect(() => {
  
  }, []);

  return (

    <div>
      <h1>Giphy Search!</h1>
      <Search />
      {store.data && store.data.map((item) => (
        <>
        <img src={item} />
        </>
      ))}

    </div>
  );
}

export default App;

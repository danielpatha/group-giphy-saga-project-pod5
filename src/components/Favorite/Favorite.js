import React, {useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';


function Favorite(){
    const dispatch = useDispatch();
    const reduxState = useSelector(store => store.favoriteList);

    useEffect(() => {
        console.log('component did mount');
        // dispatch an action to request the plantList from the API
        dispatch({
            type: 'FETCH_FAVORITES'
          });
    }, []); 

    const addFunny = (() => {
        dispatch({
            type: 'DELETE_PLANT'
          });
    }, []); 

    const addMeme = (() => {
        dispatch({
            type: 'DELETE_PLANT'
          });
    }, []); 

    const addSports = (() => {
        dispatch({
            type: 'DELETE_PLANT'
          });
    }, []); 


    const addCats = (() => {
        dispatch({
            type: 'DELETE_PLANT'
          });
    }, []); 



return(
    <>
           <h3>This these are the favorites</h3>
            <ul>
        {reduxState.map((element) => (
          <li key={element.id}>
            {element.name}
            <h4>Select a Category</h4> 
        <button onClick = {addFunny}> Funny </button>  
        <button onClick = {addMeme}> Meme </button> 
        <button onClick = {addSports}> Sports </button> 
        <button onClick = {addCats}> Cats </button> 
        </li>
        ))}
      </ul>
    
    
    </>


)

}


export default Favorite;
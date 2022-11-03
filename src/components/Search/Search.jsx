
import {useDispatch} from 'react-redux';
 

function Search(){
    console.log('in Search');

    const dispatch = useDispatch();

    let input = '';

 const handleSearch = (event) => {
      input= event.target.value
  }

const postSearch = (event) => {
    event.preventDefault();
    console.log('input is', input);

    dispatch ({
        type: 'SEARCH_GIPHY',
        payload: input
    })

    // send input to GET API on server

}

    return (
    <>
    <form onSubmit={postSearch}>
      <input
        onChange={handleSearch}
        type='text'
        placeholder='type in your search!'
      />
      <button type='submit'>Submit</button>
    </form>


    </>);
}

export default Search;
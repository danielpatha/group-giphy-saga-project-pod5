
import { useState } from 'react';
import { useDispatch } from 'react-redux';


function Search() {
  console.log('in Search');

  const dispatch = useDispatch();
  const [search, setSearch] = useState('')

  const handleSearch = (event) => {
    event.preventDefault()
    setSearch(event.target.value)
  }

  const postSearch = (event) => {
    event.preventDefault();

    dispatch({
      type: 'SEARCH_GIPHY',
      payload: search
    })

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
        {/* <GiphList /> */}
      </form>


    </>);
}

export default Search;
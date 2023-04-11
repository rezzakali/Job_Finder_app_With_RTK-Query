import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../features/jobs/jobsSlice';

function Search() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className="search-field group flex-1">
      <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>

      <input
        type="text"
        onChange={handleChange}
        placeholder="Search Job"
        className="search-input"
        id="lws-searchJob"
      />
    </div>
  );
}

export default Search;

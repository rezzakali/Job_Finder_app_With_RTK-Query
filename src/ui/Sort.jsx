import React from 'react';
import { useDispatch } from 'react-redux';
import { sortJobsBySalary } from '../features/jobs/jobsSlice';

function Sort() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(sortJobsBySalary(value));
  };

  return (
    <select
      id="lws-sort"
      name="sort"
      autoComplete="sort"
      className="flex-1"
      onChange={handleChange}
    >
      <option>Default</option>
      <option value="low to high">Salary (Low to High)</option>
      <option value="high to low">Salary (High to Low)</option>
    </select>
  );
}

export default Sort;

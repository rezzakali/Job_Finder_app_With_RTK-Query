import React from 'react';
import Search from '../ui/Search';
import Sort from '../ui/Sort';

function Header() {
  return (
    <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10">
      <h1 className="lws-section-title">All Available Jobs</h1>
      <div className="flex gap-4">
        <Search />
        <Sort />
      </div>
    </div>
  );
}

export default Header;

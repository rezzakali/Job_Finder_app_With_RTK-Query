import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  allJobs,
  fullTime,
  internship,
  remote,
} from '../../features/jobs/jobsSlice';

function Sidebar() {
  const dispatch = useDispatch();

  const handleAll = () => {
    dispatch(allJobs());
  };

  const handleInternship = () => {
    dispatch(internship('Internship'));
  };

  const handleFullTime = () => {
    dispatch(fullTime('Full Time'));
  };

  const handleRemote = () => {
    dispatch(remote('Remote'));
  };

  return (
    <div className="sidebar">
      <nav>
        <ul className="space-y-4">
          <li>
            <a
              className="main-menu menu-active cursor-pointer"
              id="lws-alljobs-menu"
              onClick={handleAll}
            >
              <i className="fa-solid fa-briefcase"></i>
              <span> All Available Jobs </span>
            </a>
            <ul className="space-y-6 lg:space-y-2">
              <li onClick={handleInternship} className="cursor-pointer">
                <a
                  className="sub-menu"
                  // href="/jobs/internship"
                  id="lws-internship-menu"
                >
                  <i className="fa-solid fa-stop !text-[#FF5757]"></i>
                  {''} Internship
                </a>
              </li>
              <li onClick={handleFullTime} className="cursor-pointer">
                <a
                  className="sub-menu"
                  // href="/jobs/fulltime"
                  id="lws-fulltime-menu"
                >
                  <i className="fa-solid fa-stop !text-[#FF8A00]"></i>
                  {''} Full Time
                </a>
              </li>
              <li onClick={handleRemote} className="cursor-pointer">
                <a
                  className="sub-menu"
                  // href="/jobs/remote"
                  id="lws-remote-menu"
                >
                  <i className="fa-solid fa-stop !text-[#56E5C4]"></i>
                  {''} Remote
                </a>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/create" className="main-menu" id="lws-addJob-menu">
              <i className="fa-solid fa-file-circle-plus"></i>
              <span>{''} Add New Job</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;

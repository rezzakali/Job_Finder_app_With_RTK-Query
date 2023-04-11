import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../features/jobs/jobsSlice';
import Error from '../ui/Error';
import Loading from '../ui/Loading';
import Job from './Job';

function Jobs() {
  const dispatch = useDispatch();
  const { isLoading, isError, error } = useSelector((state) => state.jobs);
  const jobs = useSelector((state) => state.jobs.filterJobs);

  const allJobs = useSelector((state) => state.jobs.jobs);
  const query = useSelector((state) => state.jobs.query);

  let content = null;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError) content = <Error error={error} />;

  if (!isLoading && !isError && jobs?.length === 0)
    content = <p style={{ color: 'white' }}>No Jobs Found!</p>;

  if (!isLoading && !isError && jobs?.length > 0)
    content = jobs
      .filter((jb) => {
        if (query === '') {
          return jb;
        } else if (jb.title.toLowerCase().includes(query.toLowerCase())) {
          return jb;
        } else {
        }
      })
      .map((job) => <Job key={job.id} job={job} />);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return <div className="jobs-list">{content}</div>;
}

export default Jobs;

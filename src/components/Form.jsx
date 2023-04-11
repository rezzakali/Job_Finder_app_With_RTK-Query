import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  addingJob,
  changeJob,
  enabledEditMode,
} from '../features/jobs/jobsSlice';

function Form() {
  const dispatch = useDispatch();
  const editJob = useSelector((state) => state.jobs.editJob);
  const changeEditMode = useSelector((state) => state.jobs.editMode);

  const {
    title: editTitle,
    type: editType,
    salary: editSalary,
    deadline: editDeadline,
    id: editJobId,
  } = editJob;

  const [title, setTitle] = useState(editTitle);
  const [type, setType] = useState(editType);
  const [salary, setSalary] = useState(editSalary ? editSalary : '');
  const [deadline, setDeadline] = useState(editDeadline ? editDeadline : '');

  const navigate = useNavigate();

  const reset = () => {
    setTitle('');
    setType('');
    setSalary('');
    setDeadline('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addingJob({
        title,
        type,
        salary,
        deadline,
      })
    );
    reset();
    navigate('/');
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      changeJob({
        id: editJobId,
        data: {
          title,
          type,
          salary,
          deadline,
        },
      })
    );
    dispatch(enabledEditMode(false));
    reset();
    navigate('/');
  };

  return (
    <>
      <h1 className="mb-10 text-center lws-section-title">
        {changeEditMode ? 'Edit Job' : 'Add New Job'}
      </h1>
      <div className="max-w-3xl mx-auto">
        <form
          className="space-y-6"
          onSubmit={changeEditMode ? handleUpdate : handleSubmit}
        >
          <div className="fieldContainer">
            <label
              htmlFor="lws-JobTitle"
              className="text-sm font-medium text-slate-300"
            >
              Job Title
            </label>
            <select
              id="lws-JobTitle"
              name="lwsJobTitle"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            >
              <option>Select Job</option>
              <option>Software Engineer</option>
              <option>Software Developer</option>
              <option>Full Stack Developer</option>
              <option>MERN Stack Developer</option>
              <option>DevOps Engineer</option>
              <option>QA Engineer</option>
              <option>Product Manager</option>
              <option>Social Media Manager</option>
              <option>Senior Executive</option>
              <option>Junior Executive</option>
              <option>Android App Developer</option>
              <option>IOS App Developer</option>
              <option>Frontend Developer</option>
              <option>Frontend Engineer</option>
            </select>
          </div>

          <div className="fieldContainer">
            <label htmlFor="lws-JobType">Job Type</label>
            <select
              id="lws-JobType"
              name="lwsJobType"
              required
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option>Select Job Type</option>
              <option>Full Time</option>
              <option>Internship</option>
              <option>Remote</option>
            </select>
          </div>

          <div className="fieldContainer">
            <label htmlFor="lws-JobSalary">Salary</label>
            <div className="flex border rounded-md shadow-sm border-slate-600">
              <span className="input-tag">BDT</span>
              <input
                type="number"
                name="lwsJobSalary"
                id="lws-JobSalary"
                required
                className="!rounded-l-none !border-0"
                placeholder="20,00,000"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>
          </div>

          <div className="fieldContainer">
            <label htmlFor="lws-JobDeadline">Deadline</label>
            <input
              type="date"
              name="lwsJobDeadline"
              id="lws-JobDeadline"
              required
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>

          <div className="text-right">
            <button
              type="submit"
              id="lws-submit"
              className="cursor-pointer btn btn-primary w-fit"
            >
              {changeEditMode ? 'Edit' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;

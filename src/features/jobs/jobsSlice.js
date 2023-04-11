import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addJob, getJobs, removeJob, updateJob } from './jobsAPI';

// initial state
const initialState = {
  isLoading: false,
  isError: false,
  error: '',
  jobs: [],
  filterJobs: [],
  editJob: {},
  editMode: false,
  query: '',
};

// fetch all jobs
export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
  const jobs = await getJobs();
  return jobs;
});

// add job
export const addingJob = createAsyncThunk('jobs/addingJob', async (data) => {
  const response = await addJob(data);
  return response;
});

// remove job
export const deleteJob = createAsyncThunk('jobs/deleteJob', async (id) => {
  const response = await removeJob(id);
  return response;
});

// udpate job
export const changeJob = createAsyncThunk(
  'jobs/udpateJob',
  async ({ id, data }) => {
    const response = await updateJob(id, data);
    return response;
  }
);

// create slice
const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    allJobs: (state) => {
      state.filterJobs = state.jobs;
    },
    internship: (state, action) => {
      state.filterJobs = state.jobs?.filter(
        (job) => job.type === action.payload
      );
    },
    remote: (state, action) => {
      state.filterJobs = state.jobs?.filter(
        (job) => job.type === action.payload
      );
    },
    fullTime: (state, action) => {
      state.filterJobs = state.jobs?.filter(
        (job) => job.type === action.payload
      );
    },
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },
    editActiveJob: (state, action) => {
      state.editJob = action.payload;
    },
    editInActiveJob: (state) => {
      state.editJob = {};
    },
    enabledEditMode: (state, action) => {
      state.editMode = action.payload;
    },
    sortJobsBySalary: (state, action) => {
      if (action.payload === 'low to high') {
        state.filterJobs?.sort((a, b) => a.salary - b.salary);
      } else if (action.payload === 'high to low') {
        state.filterJobs?.sort((a, b) => b.salary - a.salary);
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.jobs = action.payload;
        state.filterJobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.jobs = [];
        state.error = action.error?.message;
      })
      .addCase(addingJob.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(addingJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.jobs = action.payload;
      })
      .addCase(addingJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.jobs = [];
        state.error = action.error?.message;
      })
      .addCase(changeJob.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(changeJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        const indexToEdit = state.jobs.findIndex(
          (job) => job.id === action.payload.id
        );
        state.jobs[indexToEdit] = action.payload;
      })
      .addCase(changeJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.jobs = [];
        state.error = action.error?.message;
      })
      .addCase(deleteJob.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;

        state.jobs = state.jobs?.filter((job) => job.id !== action.meta.arg);
        state.filterJobs = state.filterJobs?.filter(
          (job) => job.id !== action.meta.arg
        );
      })
      .addCase(deleteJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.jobs = [];
        state.error = action.error?.message;
      });
  },
});

export const {
  internship,
  remote,
  fullTime,
  allJobs,
  editActiveJob,
  editInActiveJob,
  enabledEditMode,
  setSearchQuery,
  sortJobsBySalary,
} = jobsSlice.actions;

export default jobsSlice.reducer;

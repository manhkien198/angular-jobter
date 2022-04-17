export interface SearchValue {
  search: string;
  status: string;
  type: string;
  sort: string;
}
export interface Jobs {
  jobs: Job[];
  totalJobs: number;
  numOfPages: number;
}

export interface Job {
  _id: string;
  company: string;
  position: string;
  status: string;
  jobType: string;
  jobLocation: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

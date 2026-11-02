import axios from "axios";
import type { JobDataProps } from "../types/job.types";

const API = axios.create({
    baseURL: import.meta.env.VITE_JOBS_BASE_API_URL,
});

export const getJobs = async (): Promise<JobDataProps[]> => {
    const response = await API.get("/api/jobs");
    return response.data.jobs;
};
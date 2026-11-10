import { useEffect, useState } from "react";
import type { JobDataProps } from "../types/job.types";
import { getJobs } from "../server/jobServer.server";
import JobCard from "../components/ui/JobCard";

export default function Jobs() {
    const [jobDetail, setJobDetail] = useState<JobDataProps[]>([]);    // state to store the job details
    const [isLoading, setIsLoading] = useState<boolean>(false); // state to store the loading state
    const [error, setError] = useState<string>(''); // state to store the error message

    useEffect(() => {
        const fetchJobApi = async () => {
            try {
                setIsLoading(true);
                const apiResponse = await getJobs();
                setJobDetail(apiResponse);
            } catch (error) {
                setError('Error fetching jobs');
            } finally {
                setIsLoading(false);
            }
        };
        fetchJobApi();
    }, []);

    return (
        <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-28">
            <section aria-label="Job listings" className="flex flex-col gap-6">
                {isLoading ? (
                    <div className="flex flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
                        <div
                            className="mx-auto h-[1em] w-[1em] animate-spin rounded-full border-4 border-slate-200 border-t-blue-600"
                            role="status"
                            aria-label="Loading jobs"
                        />

                        <h3 className="mt-5 text-2xl font-bold text-slate-900">
                            Loading...
                        </h3>
                    </div>
                ) : error ? (
                    <div className="flex flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
                        <h3 className="text-2xl font-bold text-slate-900">
                            {error}
                        </h3>
                    </div>
                ) : (
                    <>
                        <header className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                            <h1 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl lg:text-3xl">
                                {jobDetail.length} {jobDetail.length === 1 ? "job" : "jobs"} found
                            </h1>
                            <p className="text-sm text-slate-500">
                                Browse open roles across companies
                            </p>
                        </header>

                        {jobDetail.length === 0 ? (
                            <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-200 bg-white px-6 py-16 text-center">
                                <p className="text-lg font-semibold text-slate-900">No jobs to show yet</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
                                {jobDetail.map((job) => (
                                    <JobCard key={job.id} job={job} />
                                ))}
                            </div>
                        )}
                    </>
                )}
            </section>
        </div>
    );
}
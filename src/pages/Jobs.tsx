
import { useEffect, useState } from "react";
import type { JobDataProps } from "../types/job.types";

export default function Jobs() {
    const [jobDetail, setJobDetail] = useState<JobDataProps[]>([]);

    useEffect(() => {
        const fetchJobApi = async () => {
            try {
                const apiUrl = import.meta.env.VITE_JOBS_BASE_API_URL;

                const response = await fetch(`${apiUrl}/api/jobs`);

                if (!response.ok) {
                    throw new Error("Jobs API isn't responding");
                }

                const data = await response.json();

                setJobDetail(data.jobs);
            } catch (error) {
                console.error('Error', error)
            }
        };

        fetchJobApi();
    }, []);

    return (
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <section aria-label="Latest Technology News" className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {jobDetail.length === 0 ? (
                    <div className="col-span-full flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-6 py-16 text-center backdrop-blur-xl">

                        <div className="text-5xl">
                            🔍
                        </div>

                        <h3 className="mt-5 text-2xl font-bold text-black">
                            No Jobs Found
                        </h3>

                        <p className="mt-3 max-w-md text-black">
                            We couldn't find any jobs matching your search.
                            Try different keywords like React, AI, Frontend, or Backend.
                        </p>

                    </div>
                ) : (
                    jobDetail.map((job) => (
                        <article key={job.id.toString()} className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                            <span className="inline-flex w-fit rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                                Job Role
                            </span>

                            <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
                                {job.title}
                            </h2>

                            <div className="mt-6 flex-1 space-y-3 text-sm">
                                <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                                    <span className="font-medium text-slate-500">Company</span>
                                    <span className="font-semibold text-slate-900">{job.company_name}</span>
                                </div>

                                <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                                    <span className="font-medium text-slate-500">Job Type</span>
                                    <span className="font-semibold text-emerald-600">{job.job_type}</span>
                                </div>

                                <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                                    <span className="font-medium text-slate-500">Location</span>
                                    <span className="font-semibold text-slate-900">{job.candidate_required_location}</span>
                                </div>

                                <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                                    <span className="font-medium text-slate-500">Salary</span>
                                    <span className="font-bold text-indigo-600">{job.salary.trim() ? job.salary : 'NA'}</span>
                                </div>
                            </div>

                            <footer className="mt-6 border-t border-slate-100 pt-6">
                                <a
                                    className="inline-flex w-full items-center justify-center rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 px-5 py-3.5 font-semibold text-white shadow-md transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg"
                                    href={job.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Apply Now
                                </a>
                            </footer>
                        </article>
                    ))
                )}
            </section>
        </div>
    );
}

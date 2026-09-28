'use client';

import { JobsDataProps } from "@/types/jobsData.types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function JobsPage() {
    const [jobsData, setJobsData] = useState<JobsDataProps[]>([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('/api/jobs');

                const result = await response.json();

                console.log(result.data.jobs);

                setJobsData(result.data.jobs);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchJobs();
    }, []);


    return (
        <main className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="mb-10">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
                        Job Opportunities
                    </p>

                    <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                        Find Your Next Opportunity
                    </h1>

                    <p className="mt-3 max-w-2xl text-slate-600">
                        Explore remote jobs from companies hiring across
                        different industries and experience levels.
                    </p>
                </div>

                {/* Jobs Count */}
                <div className="mb-6">
                    <p className="text-sm font-medium text-slate-600">
                        {jobsData.length} jobs available
                    </p>
                </div>

                {/* Jobs Grid */}
                {jobsData.length ? (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                        {jobsData.map((job) => (
                            <article key={job.id} className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                                <span className="inline-flex w-fit rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                                    Job Role
                                </span>

                                <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">

                                </h2>

                                <div className="mt-6 flex-1 space-y-3 text-sm">
                                    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                                        <span className="text-xl font-semibold text-slate-900">{job.title}</span>
                                    </div>

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
                                        <span className="font-bold text-indigo-600">{job.salary?.trim() ? job.salary : 'NA'}</span>
                                    </div>
                                </div>

                                <footer className="mt-6 border-t border-slate-100 pt-6">
                                    <Link
                                        className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3.5 font-semibold text-white shadow-md transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg"
                                        href={job.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Apply Now
                                    </Link>
                                </footer>
                            </article>
                        ))}

                    </div>
                ) : (
                    <div className="rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center">
                        <h2 className="text-xl font-semibold text-slate-900">
                            No Jobs Found
                        </h2>

                        <p className="mt-2 text-sm text-slate-500">
                            There are currently no jobs available.
                        </p>
                    </div>
                )}

            </div>
        </main>
    );
}
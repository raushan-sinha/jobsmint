import type { JobDataProps } from "../../types/job.types";

export default function JobCard({ job }: { job: JobDataProps }) {
    return (
        <article key={job.id} className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
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
    );
}
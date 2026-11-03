
import { useEffect, useState } from "react";
import type { JobDataProps } from "../types/job.types";
import { getJobs } from "../server/jobServer.server";
import JobCard from "../components/ui/JobCard";

export default function Jobs() {
    const [jobDetail, setJobDetail] = useState<JobDataProps[]>([]);

    useEffect(() => {
        const fetchJobApi = async () => {
            try {
                const apiResponse = await getJobs();
                setJobDetail(apiResponse);
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
                        <JobCard key={job.id} job={job} />
                    ))
                )}
            </section>
        </div>
    );
}


import { useEffect, useState } from "react";
import type { JobDataProps } from "../types/job.types";
import { getJobs } from "../server/jobServer.server";
import JobCard from "../components/ui/JobCard";

export default function Jobs() {
    const [jobDetail, setJobDetail] = useState<JobDataProps[]>([]);    // state to store the job details
    const [isLoading, setIsLoading] = useState<boolean>(false); // state to store the loading state

    useEffect(() => {
        const fetchJobApi = async () => {
            try {
                setIsLoading(true);
                const apiResponse = await getJobs();
                setJobDetail(apiResponse);
            } catch (error) {
                console.error('Error', error)
            } finally {
                setIsLoading(false);
            }
        };

        fetchJobApi();
    }, []);

    return (
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <section aria-label="Latest Technology News" className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {isLoading ? (
                    <div className="col-span-full flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-6 py-16 text-center backdrop-blur-xl">
                        <div className="text-5xl">
                            🔍
                        </div>

                        <h3 className="mt-5 text-2xl font-bold text-black">
                            Loading...
                        </h3>
                    </div>
                ) : (
                    jobDetail.map((job) => <JobCard key={job.id} job={job} />))
                }
            </section>
        </div>
    );
}

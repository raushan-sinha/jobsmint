import { ArrowRight, BriefcaseBusiness, MapPin, Search } from "lucide-react";
import { useEffect, useRef } from "react";

interface JobsProps {
    id: number;
    name: string;
}

const PopularJobs: JobsProps[] = [
    { id: 1, name: "Full-stack Engineer" },
    { id: 2, name: "AI Engineer" },
    { id: 3, name: "ML Engineer" },
    { id: 4, name: "DevOps Engineer" },
    { id: 5, name: "CyberSecurity Engineer" },
];

export default function HeroSection() {
    const inputRef = useRef<HTMLInputElement>(null);

    // Focus the input field when the page load -
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <section className="relative overflow-hidden bg-black px-6 py-20 text-white lg:px-8 lg:py-28 min-h-screen">
            <div className="absolute left-1/2 top-0 z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-6xl text-center">
                <div className="mx-auto mt-6 flex w-fit items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
                    <BriefcaseBusiness size={16} />
                    Discover your next opportunity
                </div>

                {/* <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    Find Your Next <span className="text-blue-400">Opportunity.</span>
                </h1> */}

                <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
                    Search thousands of job opportunities, discover roles that match your
                    skills, or create a job post and connect with talented professionals.
                </p>

                <div className="mx-auto mt-10 grid max-w-4xl gap-3 rounded-2xl border border-slate-800 bg-slate-700 p-3 shadow-2xl md:grid-cols-[1fr_1fr_auto]">
                    <div className="flex items-center gap-3 rounded-xl bg-slate-800 px-4 py-3">
                        <Search className="text-slate-400" size={20} />

                        <input
                            type="text"
                            ref={inputRef}
                            id="skill"
                            name="skill"
                            placeholder="Job title, skill or keyword"
                            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                        />
                    </div>

                    <div className="flex items-center gap-3 rounded-xl bg-slate-800 px-4 py-3">
                        <MapPin className="text-slate-400" size={20} />

                        <input
                            type="text"
                            id="location"
                            name="location"
                            placeholder="Location"
                            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                        />
                    </div>

                    <button className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold transition hover:bg-blue-500 cursor-pointer">
                        <Search size={18} />
                        Search Jobs
                    </button>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
                    <span className="text-slate-300">Popular:</span>

                    {PopularJobs.map((job) => (
                        <button
                            key={job.id}
                            className="rounded-full border border-slate-800 px-3 py-1.5 text-slate-400 transition hover:border-blue-500/50 hover:text-blue-400 cursor-pointer">
                            {job.name}
                        </button>
                    ))}
                </div>

                <div className="mt-10">
                    <button className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300 cursor-pointer">
                        Looking to hire? Post a Job
                        <ArrowRight size={16} />
                    </button>
                </div>
            </div>
        </section>
    );
}

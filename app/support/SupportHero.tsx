export default function SupportHero() {
    return (
        <section className="relative overflow-hidden bg-white">
            {/* Background Decorations */}
            <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
            <div className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-cyan-100/50 blur-3xl" />

            <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
                <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">

                    {/* Left Content */}
                    <div className="max-w-2xl">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                            <span className="h-2 w-2 rounded-full bg-blue-500" />
                            JobsMint Support
                        </div>

                        <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                            How can we
                            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                                help you?
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                            We're here to help you with JobsMint. Find answers,
                            explore helpful resources, or get the support you
                            need to make your job search experience easier.
                        </p>

                        {/* Search Box */}
                        <div className="mt-8 max-w-2xl">
                            <div className="flex items-center rounded-2xl border border-slate-200 bg-white p-2 shadow-lg shadow-slate-200/60 transition-all duration-300 focus-within:border-blue-400 focus-within:shadow-blue-100">

                                {/* Search Icon */}
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.8}
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m21 21-4.35-4.35m1.35-5.4a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0Z"
                                        />
                                    </svg>
                                </div>

                                {/* Input */}
                                <input
                                    type="text"
                                    id="search"
                                    name="search"
                                    placeholder="Search for help..."
                                    className="min-w-0 flex-1 bg-transparent px-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 sm:text-base"
                                />

                                {/* Search Button */}
                                <button
                                    type="button"
                                    className="hidden rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:block"
                                >
                                    Search
                                </button>
                            </div>

                            <p className="mt-3 px-1 text-xs text-slate-400 sm:text-sm">
                                Try searching for "jobs", "account",
                                "applications", or "post a job"
                            </p>
                        </div>
                    </div>

                    {/* Right Support Card */}
                    <div className="relative mx-auto w-full max-w-md lg:ml-auto">
                        <div className="relative rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50 p-6 shadow-xl shadow-slate-200/50 sm:p-8">

                            {/* Decorative Circle */}
                            <div className="absolute right-6 top-6 h-20 w-20 rounded-full bg-blue-100/70" />

                            <div className="relative">

                                {/* Support Icon */}
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-200">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.8}
                                        stroke="currentColor"
                                        className="h-7 w-7"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.847a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.847.813a4.5 4.5 0 0 0-3.09 3.09Z"
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.456-2.456L14.25 6l1.035-.259a3.375 3.375 0 0 0 2.456-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z"
                                        />
                                    </svg>
                                </div>

                                <h2 className="mt-6 text-2xl font-bold text-slate-900">
                                    We're here to help
                                </h2>

                                <p className="mt-3 text-sm leading-6 text-slate-600">
                                    Whether you're looking for a job or hiring
                                    talent, our support resources are here to
                                    help you get the most out of JobsMint.
                                </p>

                                {/* Support Categories */}
                                <div className="mt-6 space-y-3">

                                    <div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-100">
                                        <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />

                                        <span className="text-sm font-medium text-slate-700">
                                            Job Seekers
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-100">
                                        <div className="h-2.5 w-2.5 rounded-full bg-blue-500" />

                                        <span className="text-sm font-medium text-slate-700">
                                            Employers & Recruiters
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-100">
                                        <div className="h-2.5 w-2.5 rounded-full bg-violet-500" />

                                        <span className="text-sm font-medium text-slate-700">
                                            Account & Technical Support
                                        </span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
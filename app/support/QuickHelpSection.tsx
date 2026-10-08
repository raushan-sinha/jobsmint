import { QuickHelpCategories } from "@/data/quickHelpSection.data";

export default function QuickHelpSection() {
    return (
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-7xl">

                {/* Section Header */}
                <div className="mx-auto mb-12 max-w-2xl text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
                        Quick Help
                    </p>

                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        What can we help you with?
                    </h2>

                    <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
                        Find quick answers and helpful resources for using JobsMint.
                    </p>
                </div>

                {/* Help Cards */}
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {QuickHelpCategories.map((category) => {
                        const Icon = category.icon;

                        return (
                            <button
                                key={category.title}
                                type="button"
                                className="group rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                            >
                                {/* Icon */}
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                                    <Icon className="h-6 w-6" />
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-semibold text-slate-900">
                                    {category.title}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                    {category.description}
                                </p>

                                {/* Link */}
                                <div className="mt-5 text-sm font-semibold text-blue-600 transition-colors group-hover:text-blue-700 cursor-pointer">
                                    Get help →
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
import { NavbarLinkData } from "../../data/navbarLinks.data";

export default function Navbar() {
    return (
        <header className="fixed top-[2%] left-1/2 z-50 w-[90%] -translate-x-1/2">
            <nav className="flex h-[76px] items-center justify-between rounded-2xl border border-slate-200 bg-white/95 px-8 shadow-lg shadow-slate-200/50 backdrop-blur-xl">

                {/* Logo */}
                <a href="/" className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect x="3" y="7" width="18" height="13" rx="2" />
                            <path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2" />
                        </svg>
                    </span>

                    <span className="text-2xl font-bold tracking-tight text-slate-900">
                        Jobs<span className="text-blue-600">Mint</span>
                    </span>
                </a>

                {/* Navigation Links */}
                <div className="flex items-center gap-8">
                    {NavbarLinkData.map((link) => (
                        <a key={link.id} href={link.href} className="text-base font-semibold text-black-600">
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Auth Buttons */}
                <div className="flex items-center gap-3">
                    <a
                        href="/login"
                        className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:border-blue-300 hover:text-blue-600"
                    >
                        Login
                    </a>
                    <a
                        href="/signup"
                        className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700"
                    >
                        Sign Up
                    </a>
                </div>

            </nav>
        </header>
    );
}
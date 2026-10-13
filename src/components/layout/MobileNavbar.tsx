import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { NavbarLinkData } from "../../data/navbarLinks.data";

export default function MobileNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <header className="fixed left-1/2 top-[2%] z-50 w-[90%] -translate-x-1/2 lg:hidden">
            <nav className="flex h-[68px] items-center justify-between rounded-2xl border border-slate-200 bg-white/95 px-4 shadow-lg shadow-slate-200/50 backdrop-blur-xl sm:h-[76px] sm:px-6">

                {/* Logo */}
                <a href="/" className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white sm:h-10 sm:w-10">
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

                    <span className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                        Jobs<span className="text-blue-600">Mint</span>
                    </span>
                </a>

                {/* Menu/Cross Icon — UI only */}
                <button
                    type="button"
                    aria-label="Open menu"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50 sm:h-11 sm:w-11"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <X color="black" />
                    ) : (
                        <MenuIcon color="black" />
                    )}
                </button>

                {/* Navigation Links */}
                {isMenuOpen && (
                    <div className="absolute left-0 right-0 top-full z-40 px-3 sm:px-6">
                        <div className="mx-auto mt-2 rounded-2xl border border-slate-800/80 bg-slate-900 p-3 shadow-2xl shadow-black/30 sm:mx-6">
                            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                                {NavbarLinkData.map((link) => (
                                    <a
                                        key={link.id}
                                        href={link.href}
                                        className="flex items-center rounded-xl border border-slate-800 bg-slate-800/60 px-4 py-3.5 text-sm font-medium text-slate-300 transition-all duration-200 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-400"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

            </nav>
        </header>
    );
}
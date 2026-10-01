'use client';

import { NavbarLinksData } from "@/data/navbarLinkData.data";
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function MobileNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    return (
        <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/95 backdrop-blur-xl">
            <nav className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6">

                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl font-bold tracking-tight text-white"
                >
                    Skill<span className="text-cyan-400">Zen</span>
                </Link>

                {/* Menu & Cross Icon - UI Only */}
                <button
                    type="button"
                    aria-label="Open menu"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-slate-200 transition-colors duration-200 hover:border-cyan-400/40 hover:bg-slate-800 hover:text-cyan-400"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <X size={30} />
                    ) : (
                        <MenuIcon size={30} />
                    )}
                </button>

            </nav>

            {/* Navigation links for Mobile + Tablet */}
            {isMenuOpen && (
                <div className="absolute left-0 right-0 top-full z-40 px-3 sm:px-6">
                    <div className="mx-auto mt-2 rounded-2xl border border-slate-800/80 bg-slate-900 p-3 shadow-2xl shadow-black/30 sm:mx-6">
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                            {NavbarLinksData.map((link) => (
                                <Link
                                    key={link.id}
                                    href={link.href}
                                    className="flex items-center rounded-xl border border-slate-800 bg-slate-800/60 px-4 py-3.5 text-sm font-medium text-slate-300 transition-all duration-200 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-400"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
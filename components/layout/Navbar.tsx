import { NavbarLinksData } from "@/data/navbarLinkData.data";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/95 backdrop-blur-xl">
            <nav className="mx-auto flex h-[72px] max-w-7xl items-center px-4 sm:px-6 lg:px-8">

                {/* Logo */}
                <Link
                    href="/"
                    className="shrink-0 text-2xl font-bold tracking-tight text-white"
                >
                    Jobs<span className="text-cyan-400">Mint</span>
                </Link>

                {/* Navigation Links */}
                <div className="ml-auto hidden items-center gap-6 lg:flex xl:gap-8">
                    {NavbarLinksData.map((link) => (
                        <Link
                            key={link.id}
                            href={link.href}
                            className="relative text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-cyan-400 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-gradient-to-r after:from-cyan-400 after:to-blue-500 after:transition-all after:duration-300 after:ease-out hover:after:w-full"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Auth Buttons */}
                <div className="ml-8 hidden items-center gap-2.5 lg:flex">
                    <Link
                        href="#"
                        className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
                    >
                        Login
                    </Link>

                    <Link
                        href="#"
                        className="rounded-lg bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/10 transition-all hover:bg-cyan-300"
                    >
                        Sign Up
                    </Link>
                </div>

            </nav>
        </header>
    )
}
import Image from "next/image";
import Spotlight from "@/components/spotlight";

export default function Products() {
    return (
        <section>
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
                    {/* Section header */}
                    <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
                        <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
                            <span className="inline-flex bg-gradient-to-r from-[#027efc] to-[#99ccff] bg-clip-text text-transparent">
                                Our Products
                            </span>
                        </div>
                        <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                            Transforming Industries
                        </h2>
                        <p className="text-lg text-blue-200/65">
                            We've built innovative solutions across sports management, vehicle services, and education technology. Each product is designed to solve real-world problems and deliver exceptional value.
                        </p>
                    </div>

                    {/* Products grid */}
                    <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
                        {/* Sports Loop - Ready */}
                        <div className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-[#027efc]/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-[#027efc] after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100">
                            <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 p-6 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                                {/* Status badge */}
                                <div className="mb-4 flex items-center justify-between">
                                    <span className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                                        <span className="h-1.5 w-1.5 rounded-full bg-green-400"></span>
                                        Ready
                                    </span>
                                    <a
                                        href="https://sportsloop.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                                        aria-label="Visit Sports Loop"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={9}
                                            height={8}
                                            fill="none"
                                        >
                                            <path
                                                fill="#F4F4F5"
                                                d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                                            />
                                        </svg>
                                    </a>
                                </div>

                                {/* Content */}
                                <h3 className="mb-2 font-nacelle text-xl font-semibold text-gray-200">
                                    Sports Loop
                                </h3>
                                <p className="mb-4 text-sm text-blue-200/65">
                                    Comprehensive sports management platform connecting players, teams, and venues.
                                </p>

                                {/* Features list */}
                                <ul className="space-y-2 text-sm text-indigo-200/65">
                                    <li className="flex items-start gap-2">
                                        <svg className="mt-0.5 h-4 w-4 shrink-0 fill-indigo-500" viewBox="0 0 16 16">
                                            <path d="M13.5 2.5 6 10 2.5 6.5l1-1L6 8l6.5-6.5 1 1Z" />
                                        </svg>
                                        <span>Find opponents, players & teams</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="mt-0.5 h-4 w-4 shrink-0 fill-indigo-500" viewBox="0 0 16 16">
                                            <path d="M13.5 2.5 6 10 2.5 6.5l1-1L6 8l6.5-6.5 1 1Z" />
                                        </svg>
                                        <span>Venue management for field owners</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="mt-0.5 h-4 w-4 shrink-0 fill-indigo-500" viewBox="0 0 16 16">
                                            <path d="M13.5 2.5 6 10 2.5 6.5l1-1L6 8l6.5-6.5 1 1Z" />
                                        </svg>
                                        <span>Tournament creation & organizing</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="mt-0.5 h-4 w-4 shrink-0 fill-indigo-500" viewBox="0 0 16 16">
                                            <path d="M13.5 2.5 6 10 2.5 6.5l1-1L6 8l6.5-6.5 1 1Z" />
                                        </svg>
                                        <span>Corporate league management</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* MetroG - Upcoming */}
                        <div className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-[#027efc]/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-[#027efc] after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100">
                            <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 p-6 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                                {/* Status badge */}
                                <div className="mb-4">
                                    <span className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400">
                                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
                                        Upcoming
                                    </span>
                                </div>

                                {/* Content */}
                                <h3 className="mb-2 font-nacelle text-xl font-semibold text-gray-200">
                                    MetroG
                                </h3>
                                <p className="mb-4 text-sm text-blue-200/65">
                                    Metro Garage - Complete vehicle workshop solution connecting car owners with professional services.
                                </p>

                                {/* Features list */}
                                <ul className="space-y-2 text-sm text-indigo-200/65">
                                    <li className="flex items-start gap-2">
                                        <svg className="mt-0.5 h-4 w-4 shrink-0 fill-indigo-500" viewBox="0 0 16 16">
                                            <path d="M13.5 2.5 6 10 2.5 6.5l1-1L6 8l6.5-6.5 1 1Z" />
                                        </svg>
                                        <span>Connect car owners with services</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="mt-0.5 h-4 w-4 shrink-0 fill-indigo-500" viewBox="0 0 16 16">
                                            <path d="M13.5 2.5 6 10 2.5 6.5l1-1L6 8l6.5-6.5 1 1Z" />
                                        </svg>
                                        <span>Comprehensive garage owner panel</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="mt-0.5 h-4 w-4 shrink-0 fill-indigo-500" viewBox="0 0 16 16">
                                            <path d="M13.5 2.5 6 10 2.5 6.5l1-1L6 8l6.5-6.5 1 1Z" />
                                        </svg>
                                        <span>Service booking & management</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="mt-0.5 h-4 w-4 shrink-0 fill-indigo-500" viewBox="0 0 16 16">
                                            <path d="M13.5 2.5 6 10 2.5 6.5l1-1L6 8l6.5-6.5 1 1Z" />
                                        </svg>
                                        <span>Vehicle maintenance tracking</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Loop Education Network - Upcoming */}
                        <div className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-[#027efc]/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-[#027efc] after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100">
                            <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 p-6 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                                {/* Status badge */}
                                <div className="mb-4">
                                    <span className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400">
                                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
                                        Upcoming
                                    </span>
                                </div>

                                {/* Content */}
                                <h3 className="mb-2 font-nacelle text-xl font-semibold text-gray-200">
                                    Loop Education Network
                                </h3>
                                <p className="mb-4 text-sm text-blue-200/65">
                                    Complete education management system tracking student careers from school to professional life.
                                </p>

                                {/* Features list */}
                                <ul className="space-y-2 text-sm text-indigo-200/65">
                                    <li className="flex items-start gap-2">
                                        <svg className="mt-0.5 h-4 w-4 shrink-0 fill-indigo-500" viewBox="0 0 16 16">
                                            <path d="M13.5 2.5 6 10 2.5 6.5l1-1L6 8l6.5-6.5 1 1Z" />
                                        </svg>
                                        <span>Student career & education tracking</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="mt-0.5 h-4 w-4 shrink-0 fill-indigo-500" viewBox="0 0 16 16">
                                            <path d="M13.5 2.5 6 10 2.5 6.5l1-1L6 8l6.5-6.5 1 1Z" />
                                        </svg>
                                        <span>Career planning & job offerings</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="mt-0.5 h-4 w-4 shrink-0 fill-indigo-500" viewBox="0 0 16 16">
                                            <path d="M13.5 2.5 6 10 2.5 6.5l1-1L6 8l6.5-6.5 1 1Z" />
                                        </svg>
                                        <span>Content creation platform</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="mt-0.5 h-4 w-4 shrink-0 fill-indigo-500" viewBox="0 0 16 16">
                                            <path d="M13.5 2.5 6 10 2.5 6.5l1-1L6 8l6.5-6.5 1 1Z" />
                                        </svg>
                                        <span>Professional community network</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Spotlight>
                </div>
            </div>
        </section>
    );
}

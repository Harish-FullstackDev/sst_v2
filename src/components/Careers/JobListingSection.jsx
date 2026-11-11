"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import iconSearch from "@/assets/career/icons/search-16.svg";
import iconChevron from "@/assets/career/icons/chevron-down-18.svg";
import iconReset from "@/assets/career/icons/reset-24.svg";
import iconLocation from "@/assets/career/icons/location-pin-17x21.svg";
import iconBriefcase from "@/assets/career/icons/briefcase-meta-24.svg";
import iconClock from "@/assets/career/icons/clock-meta-24.svg";
import prevPageIcon from "@/assets/career/icons/previous page toggle.svg";
import nextPageIcon from "@/assets/career/icons/Next page toggle arrow.svg";
import { getAllJobs } from "@/lib/jobs";
import { AREA_OF_INTEREST } from "@/components/Constants/Career/filterCategories";

const PAGE_SIZE = 5;

// Filters sit in one row above the list (search first, then the dropdowns),
// following the reference site's /careers/open-positions/. Area
// of Interest uses the fixed department list; the other dropdowns are built
// from the live jobs so they only ever offer values that return results.
// `field` is the key on a mapped job (see mapJob in src/lib/jobs.js).
const FILTERS = [
    { key: "area", label: "Area of Interest", field: "categories", width: "sm:w-[190px]" },
    { key: "location", label: "Location", field: "location", width: "sm:w-[150px]" },
    { key: "experience", label: "Experience Level", field: "experienceLevel", width: "sm:w-[186px]" },
    { key: "workType", label: "Work Type", field: "typeOfWork", width: "sm:w-[150px]" },
];

const EMPTY_FILTERS = Object.fromEntries(FILTERS.map((filter) => [filter.key, ""]));

// A job field can be a single value or a list (categories), and admin-entered
// values may differ in case from the option text.
function jobMatches(job, field, selected) {
    const values = [].concat(job[field] ?? []);
    return values.some((value) => value?.toLowerCase() === selected.toLowerCase());
}

// A native select sizes itself to its longest option, so each one gets an
// explicit width and a long selected value truncates.
function FilterSelect({ label, value, options, onChange, width }) {
    return (
        <label className="relative flex w-full min-w-0 sm:inline-flex sm:w-auto sm:shrink-0">
            <span className="sr-only">{label}</span>
            <select
                value={value}
                onChange={(event) => onChange(event.target.value)}
                className={`h-[34px] cursor-pointer appearance-none truncate w-full ${width} border border-[#c9d0d8] bg-white py-[7px] pl-[13px] pr-[43px] text-[14px] leading-[1.4] text-[#374151] outline-none focus:border-[#0061af]`}
            >
                <option value="">{label}</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <Image
                src={iconChevron}
                alt=""
                className="pointer-events-none absolute right-[13px] top-1/2 size-[18px] -translate-y-1/2"
            />
        </label>
    );
}

function Meta({ icon, children }) {
    return (
        <span className="flex items-center gap-[6px] whitespace-nowrap">
            {icon}
            {children}
        </span>
    );
}

// One full-width row per job: title + department over a 0.5px rule with View
// More on the right, then a one-line summary and location / experience /
// work type.
function JobRow({ job }) {
    const subtitle = job.categories[0] ?? job.department;
    const href = `/careers/${job.slug}`;

    return (
        <article className="flex flex-col gap-4 bg-[#f7f7f7] p-5 sm:p-6">
            <div className="flex flex-col gap-4 border-b-[0.5px] border-[#8695a7] pb-2 sm:min-h-[67px] sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-[6px] text-[#0e2b4b]">
                    <h3 className="text-xl sm:text-2xl font-medium leading-[1.2]">
                        <Link href={href} className="transition-colors hover:text-[#0061af]">
                            {job.title}
                        </Link>
                    </h3>
                    {subtitle && <p className="text-base leading-[1.5]">{subtitle}</p>}
                </div>

                <Link
                    href={href}
                    className="flex h-[33px] w-[126px] shrink-0 items-center justify-center bg-[#0061af] text-[14px] leading-[1.4] text-[#f8f8f8] transition-colors hover:bg-[#005192]"
                >
                    View More
                </Link>
            </div>

            {job.aboutJob && (
                <p className="line-clamp-2 text-base leading-[1.5] text-[#415773] lg:line-clamp-1">{job.aboutJob}</p>
            )}

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-base capitalize leading-[1.5] text-[#0e2b4b]">
                {job.location && (
                    <Meta
                        icon={
                            <span className="flex size-6 items-center justify-center">
                                <Image src={iconLocation} alt="" width={17} height={21} />
                            </span>
                        }
                    >
                        {job.location}
                    </Meta>
                )}
                {job.experienceLevel && (
                    <Meta icon={<Image src={iconBriefcase} alt="" width={24} height={24} />}>{job.experienceLevel}</Meta>
                )}
                {job.typeOfWork && (
                    <Meta icon={<Image src={iconClock} alt="" width={24} height={24} />}>{job.typeOfWork}</Meta>
                )}
            </div>
        </article>
    );
}

export default function JobListingSection() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [filters, setFilters] = useState(EMPTY_FILTERS);
    const [page, setPage] = useState(1);
    const listRef = useRef(null);

    useEffect(() => {
        let isMounted = true;

        getAllJobs()
            .then((data) => {
                if (isMounted) setJobs(data);
            })
            .catch((err) => {
                console.error("Error fetching jobs:", err.message);
                if (isMounted) setJobs([]);
            })
            .finally(() => {
                if (isMounted) setLoading(false);
            });

        return () => {
            isMounted = false;
        };
    }, []);

    const filterOptions = useMemo(() => {
        const distinct = (field) =>
            [...new Set(jobs.map((job) => job[field]).filter(Boolean))].sort((a, b) => a.localeCompare(b));
        return {
            area: AREA_OF_INTEREST,
            location: distinct("location"),
            experience: distinct("experienceLevel"),
            workType: distinct("typeOfWork"),
        };
    }, [jobs]);

    const filteredJobs = useMemo(() => {
        const query = search.trim().toLowerCase();
        return jobs.filter((job) => {
            const matchesSearch =
                !query ||
                [job.title, job.location, ...job.categories].some((field) => field?.toLowerCase().includes(query));
            const matchesFilters = FILTERS.every(
                (filter) => !filters[filter.key] || jobMatches(job, filter.field, filters[filter.key])
            );
            return matchesSearch && matchesFilters;
        });
    }, [jobs, search, filters]);

    const totalPages = Math.max(1, Math.ceil(filteredJobs.length / PAGE_SIZE));
    const pageStart = (page - 1) * PAGE_SIZE;
    const paginatedJobs = filteredJobs.slice(pageStart, pageStart + PAGE_SIZE);

    useEffect(() => {
        setPage(1);
    }, [search, filters]);

    // Changing page brings the top of the list back into view when the reader
    // has scrolled past it; the first render never scrolls.
    const isFirstPage = useRef(true);
    useEffect(() => {
        if (isFirstPage.current) {
            isFirstPage.current = false;
            return;
        }
        const top = listRef.current?.getBoundingClientRect().top;
        if (top !== undefined && top < 96) {
            listRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, [page]);

    const hasActiveFilters = search !== "" || Object.values(filters).some(Boolean);

    const reset = () => {
        setSearch("");
        setFilters(EMPTY_FILTERS);
    };

    return (
        <section id="job-listings" className="w-full bg-white border-y border-[#d9dcdf] px-6 pt-10 pb-10 sm:px-[64px] sm:pt-16 sm:pb-16 scroll-mt-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center mb-10 sm:mb-12"
            >
                <p className="text-[#2d8ec5] text-base sm:text-lg font-normal">Opportunities</p>
                <h2 className="text-xl sm:text-[28px] font-semibold text-[#2E3033] mt-2">Find Work That Matches Your Expertise.</h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="flex w-full flex-col gap-6"
            >
                {/* Filters — across the top of the list. */}
                <div className="flex flex-col gap-3">
                    {/* Search leads the row, ahead of Area of Interest, taking the
                        spare width. Below xl the dropdowns leave it too little
                        room, so it gets its own line above them. */}
                    <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center">
                        <label className="relative col-span-2 block sm:w-full xl:w-auto xl:min-w-[260px] xl:flex-1">
                            <span className="sr-only">Search jobs</span>
                            <Image
                                src={iconSearch}
                                alt=""
                                className="pointer-events-none absolute left-[14px] top-1/2 size-4 -translate-y-1/2"
                            />
                            <input
                                type="search"
                                value={search}
                                onChange={(event) => setSearch(event.target.value)}
                                placeholder="Search by job title, keyword or location"
                                className="h-[34px] w-full border border-[#c9d0d8] bg-white pl-[41px] pr-[17px] text-[14px] leading-[1.4] text-[#111827] outline-none placeholder:text-[#8695a7] focus:border-[#0061af]"
                            />
                        </label>

                        {FILTERS.map((filter) => (
                            <FilterSelect
                                key={filter.key}
                                label={filter.label}
                                width={filter.width}
                                value={filters[filter.key]}
                                options={filterOptions[filter.key]}
                                onChange={(value) => setFilters((prev) => ({ ...prev, [filter.key]: value }))}
                            />
                        ))}

                        <button
                            type="button"
                            onClick={reset}
                            disabled={!hasActiveFilters}
                            className="col-span-2 justify-self-end sm:ml-auto flex items-center gap-1 px-2 py-[6px] text-base leading-[1.5] text-[#6b7280] transition-opacity hover:opacity-70 disabled:opacity-50"
                        >
                            <Image src={iconReset} alt="" className="size-6" />
                            Reset
                        </button>
                    </div>
                </div>

                {!loading && filteredJobs.length > 0 && (
                    <p className="text-sm text-[#6b7280]">
                        Showing {pageStart + 1}–{pageStart + paginatedJobs.length} of {filteredJobs.length}{" "}
                        {filteredJobs.length === 1 ? "role" : "roles"}
                    </p>
                )}

                {/* Five roles per page, no inner scroll box; the pagination below moves to the next five. */}
                <div ref={listRef} className="scroll-mt-28">
                    {loading ? (
                        <ul className="flex flex-col gap-4" aria-busy="true">
                            {Array.from({ length: 3 }).map((_, index) => (
                                <li key={index} className="h-[188px] animate-pulse bg-[#f7f7f7]" />
                            ))}
                        </ul>
                    ) : filteredJobs.length === 0 ? (
                        <p className="py-10 text-center text-base leading-[1.5] text-[#415773]">
                            {jobs.length === 0
                                ? "There are no open positions right now."
                                : "No roles match your search. Try clearing a filter."}
                        </p>
                    ) : (
                        <ul className="flex flex-col gap-4">
                            {paginatedJobs.map((job) => (
                                <li key={job.slug}>
                                    <JobRow job={job} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {totalPages > 1 && (
                    <nav aria-label="Job list pages" className="flex items-center justify-end gap-3">
                        <button
                            type="button"
                            onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                            disabled={page === 1}
                            className="flex items-center justify-center size-6 disabled:opacity-30"
                            aria-label="Previous page"
                        >
                            <Image src={prevPageIcon} alt="" width={20} height={20} />
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                            <button
                                key={pageNumber}
                                type="button"
                                onClick={() => setPage(pageNumber)}
                                aria-current={pageNumber === page ? "page" : undefined}
                                className={`flex items-center justify-center size-6 text-sm font-semibold transition-colors ${pageNumber === page
                                    ? "border border-[#0061af] text-[#0061af]"
                                    : "text-black opacity-50 hover:opacity-80"
                                    }`}
                            >
                                {pageNumber}
                            </button>
                        ))}
                        <button
                            type="button"
                            onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
                            disabled={page === totalPages}
                            className="flex items-center justify-center size-6 disabled:opacity-30"
                            aria-label="Next page"
                        >
                            <Image src={nextPageIcon} alt="" width={20} height={20} />
                        </button>
                    </nav>
                )}
            </motion.div>
        </section>
    );
}

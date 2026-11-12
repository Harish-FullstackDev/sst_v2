"use client";

import Image from "next/image";
import Link from "next/link";
import { Bookmark } from "lucide-react";

import heroBg from "@/assets/career/job-details/hero-bg.png";
import iconArrow from "@/assets/career/job-details/arrow-right-21-dark.svg";
import { hrmsUrl } from "@/lib/jobs";
import JobSectionAccordion from "./JobSectionAccordion";
import SimilarJobCard from "./SimilarJobCard";

// Job detail page body, laid out as ref/Carees.svg: careers sub-nav, a
// full-width dark hero with the apply actions, then the job summary and
// section accordions beside similar jobs. Hero art, accordion and job card are
// ported from the HRMS portal (same Figma). Applying and saving happen in the
// HRMS portal, which signs the candidate in first.

const SUB_NAV = [
    { label: "Search Jobs", href: "/careers", internal: true, current: true },
    { label: "Saved Jobs", href: hrmsUrl("/saved-jobs") },
    { label: "My Application", href: hrmsUrl("/my-profile") },
];

const ABOUT_SST =
    "Support Studio Technologies (SST) designs, builds and runs enterprise technology for organisations across India and the GCC: SAP transformation, cloud and infrastructure, data and AI, digital engineering, cybersecurity and managed services, delivered by one accountable team.";

const PAYMENT_NOTICE =
    "Support Studio Technologies never asks candidates for payment at any stage of the hiring process. Apply only through this website or the SST careers portal, and report suspicious offers to info@isupportz.com.";

// Same horizontal frame as the reference: 64px side margins at desktop.
const FRAME = "mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-16";

function formatDate(value) {
    if (!value) return "";
    return new Date(value).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

function CareersSubNav() {
    const linkClass = "whitespace-nowrap text-base text-[#0e2b4b] underline-offset-4 hover:underline";
    return (
        <nav aria-label="Careers" className="w-full border-b border-black/10 bg-[#f5f6f6]">
            <ul className={`${FRAME} flex gap-8 overflow-x-auto py-6`}>
                {SUB_NAV.map((item) => (
                    <li key={item.label}>
                        {item.internal ? (
                            <Link
                                href={item.href}
                                aria-current={item.current ? "page" : undefined}
                                className={`${linkClass} ${item.current ? "underline" : ""}`}
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <a href={item.href} className={linkClass}>
                                {item.label}
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

function JobHero({ job }) {
    const department = job.categories[0] || job.department;
    // Admin data can repeat a value (location "Hybrid" with mode "Hybrid"), so
    // repeats collapse into one chip.
    const tags = [
        ...new Set([job.typeOfWork, job.modeOfWork, job.location, department && `Dept: ${department}`].filter(Boolean)),
    ];

    return (
        <section className="relative isolate w-full overflow-hidden bg-[#00223d]">
            <Image src={heroBg} alt="" fill priority sizes="100vw" className="-z-10 object-cover object-right" />
            {/* Phones show the bright right edge of the art behind the text; fade it. */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#00223d] via-[#00223d]/80 to-[#00223d]/40 sm:hidden" aria-hidden="true" />
            <div className={`${FRAME} flex flex-col gap-8 py-8 sm:py-12`}>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-[28px] leading-[1.2] font-medium text-white capitalize sm:text-[32px]">
                            {job.title}
                        </h1>
                        {job.jobCode && <p className="text-sm leading-[1.4] text-[#afc9e6] sm:text-base">Job ID: {job.jobCode}</p>}
                    </div>
                    <ul className="flex flex-wrap items-center gap-3 text-xs leading-[1.4] text-white sm:text-sm">
                        {tags.map((tag) => (
                            <li key={tag} className="bg-[rgba(221,241,253,0.1)] p-[6px]">
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-wrap items-start gap-4">
                    <a
                        href={job.applyUrl}
                        className="group flex h-11 w-full items-center justify-center gap-1 bg-[#f8f8f8] text-lg leading-[1.2] font-medium text-[#0e2b4b] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] transition-colors hover:bg-white sm:w-[264px]"
                    >
                        Apply for this Position
                        <Image
                            src={iconArrow}
                            alt=""
                            className="h-4 w-[21px] transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </a>
                    {/* Saving needs a candidate account, so this opens the job in the
                        HRMS portal, which signs the candidate in and has the toggle. */}
                    <a
                        href={job.hrmsJobUrl}
                        className="flex h-11 items-center gap-2 border border-[#8695a7] px-3 text-lg leading-[1.2] font-medium text-white transition-colors hover:border-white"
                    >
                        <Bookmark className="size-5" aria-hidden="true" />
                        Save Job
                    </a>
                </div>
            </div>
        </section>
    );
}

function DetailRow({ label, value }) {
    if (!value) return null;
    return (
        <div className="flex gap-3">
            <dt className="w-32 shrink-0 font-medium text-[#0e2b4b]">{label}</dt>
            <dd>{value}</dd>
        </div>
    );
}

export default function JobDescription({ job, otherJobs = [] }) {
    const experience = [job.experienceLevel, job.minExperienceYears > 0 ? `${job.minExperienceYears}+ years` : ""]
        .filter(Boolean)
        .join(", ");

    const sections = [
        job.responsibilities.length > 0 && {
            title: "Roles and Responsibilities",
            items: job.responsibilities,
        },
        {
            title: "Job Description",
            content: (
                <dl className="flex flex-col gap-1.5">
                    <DetailRow label="Department" value={job.department} />
                    <DetailRow label="Experience" value={experience} />
                    <DetailRow label="Location" value={job.location} />
                    <DetailRow label="Mode of work" value={job.modeOfWork} />
                    <DetailRow label="Type of work" value={job.typeOfWork} />
                    <DetailRow label="Skills" value={job.skills.join(", ")} />
                    <DetailRow label="Openings" value={job.vacancies > 1 ? String(job.vacancies) : ""} />
                    <DetailRow label="Posted" value={job.postedAgo} />
                    <DetailRow label="Apply by" value={formatDate(job.closesOn)} />
                </dl>
            ),
        },
        job.qualifications.length > 0 && {
            title: "Qualification",
            items: job.qualifications,
        },
        {
            title: "About SST",
            content: (
                <p>
                    {ABOUT_SST}{" "}
                    <Link href="/about-us" className="text-[#2D8EC5] underline-offset-2 hover:underline">
                        Learn more about us
                    </Link>
                </p>
            ),
        },
        {
            title: "Important Notice",
            // HR's optional notes for this posting first, then the standing notice.
            items: [...job.notes, PAYMENT_NOTICE],
        },
    ].filter(Boolean);

    return (
        <>
            <CareersSubNav />
            <JobHero job={job} />

            <div className={`${FRAME} grid gap-12 py-8 sm:py-10 lg:grid-cols-[minmax(0,776fr)_minmax(0,470fr)] lg:gap-4`}>
                <div className="flex flex-col gap-6 lg:border-r-[0.5px] lg:border-[#8695a7] lg:pr-14">
                    {job.aboutJob && (
                        <div className="flex flex-col gap-4">
                            <h2 className="text-lg leading-[1.2] font-medium text-[#0e2b4b]">Job Summary</h2>
                            <p className="text-sm leading-[1.4] whitespace-pre-line text-[#415773]">{job.aboutJob}</p>
                        </div>
                    )}

                    {sections.map((section) => (
                        <JobSectionAccordion key={section.title} title={section.title} items={section.items}>
                            {section.content}
                        </JobSectionAccordion>
                    ))}
                </div>

                {otherJobs.length > 0 && (
                    <aside className="flex flex-col gap-6 lg:pl-4">
                        <h2 className="text-lg leading-[1.2] font-medium text-[#2D8EC5]">Similar jobs</h2>
                        <ul className="flex flex-col gap-10">
                            {otherJobs.map((other) => (
                                <li key={other.slug}>
                                    <SimilarJobCard job={other} />
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="/careers"
                            className="flex h-11 items-center justify-center border border-[#8695a7] text-base font-medium text-[#0e2b4b] transition-colors hover:border-[#2D8EC5] hover:text-[#2D8EC5]"
                        >
                            View all open roles
                        </Link>
                    </aside>
                )}
            </div>
        </>
    );
}

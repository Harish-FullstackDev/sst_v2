"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, Link2, Check } from "lucide-react";
import locationIcon from "@/assets/career/icons/location.svg";
import modeOfWorkIcon from "@/assets/career/icons/mode of work.svg";
import typeOfWorkIcon from "@/assets/career/icons/type of work.svg";
import shareIcon from "@/assets/career/icons/share.svg";
import ViewDetailsButton from "@/components/Careers/ViewDetailsButton";


function MetaItem({ icon, label }) {
    return (
        <span className="inline-flex items-center gap-1.5 text-sm text-[#4a5565]">
            <Image src={icon} alt="" width={16} height={16} />
            {label}
        </span>
    );
}

function Badge({ children }) {
    return (
        <span className="inline-flex items-center bg-[#eceef2] px-2.5 py-1 text-xs font-medium text-[#030213]">
            {children}
        </span>
    );
}

function BulletList({ items }) {
    return (
        <ul className="space-y-2">
            {items.map((item) => (
                <li key={item} className="flex gap-2 text-base leading-6 text-[#364153]">
                    <span aria-hidden="true">•</span>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}

function IconButton({ icon, label, onClick, children }) {
    return (
        <button
            type="button"
            aria-label={label}
            onClick={onClick}
            className="flex h-9 w-9 items-center justify-center border border-black/10 bg-white text-[#0a0a0a] transition-colors hover:bg-slate-50"
        >
            {children ?? <Image src={icon} alt="" width={16} height={16} />}
        </button>
    );
}

export default function JobDescription({ job, otherJobs = [] }) {
    const [copied, setCopied] = useState(false);

    const handleShare = () => {
        if (typeof window === "undefined") return;
        if (navigator.share) {
            navigator.share({ title: job.title, url: window.location.href }).catch(() => { });
        } else {
            navigator.clipboard.writeText(window.location.href);
        }
    };

    const handleCopyLink = () => {
        if (typeof window === "undefined") return;
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="w-full space-y-4">
            {/* Job Details Card */}
            <div className="bg-white border border-black/10 p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex gap-4">
                        <div className="border-l-5 border-[#2d8ec5] pl-4">
                            <h1 className="text-base font-semibold text-[#0a0a0a]">{job.title}</h1>
                            <p className="text-base text-[#4a5565] mt-1">{job.company}</p>
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2">
                                <MetaItem icon={locationIcon} label={job.location} />
                                <span className="text-[#4a5565] text-sm">•</span>
                                <MetaItem icon={modeOfWorkIcon} label={job.modeOfWork} />
                                <span className="text-[#4a5565] text-sm">•</span>
                                <MetaItem icon={typeOfWorkIcon} label={job.typeOfWork} />
                            </div>
                            <div className="flex items-center gap-2 mt-2 text-sm text-[#6a7282]">
                                <Clock className="w-4 h-4" />
                                <span>{job.postedAgo}</span>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-3">
                                <Badge>{job.experienceLevel}</Badge>
                                {/* <Badge>{job.typeOfWork}</Badge> */}
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2 self-start">
                        <IconButton icon={shareIcon} label="Share this job" onClick={handleShare} />
                        <IconButton label="Copy link" onClick={handleCopyLink}>
                            {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
                        </IconButton>
                    </div>
                </div>

                <div className="border-t border-black/10 mt-6 pt-6 pl-5 pr-9 space-y-6">
                    <div>
                        <h2 className="text-xl font-medium text-[#0a0a0a] mb-2">About the job</h2>
                        <p className="text-base leading-6 text-[#364153]">{job.aboutJob}</p>
                    </div>

                    <div>
                        <h3 className="text-base font-medium text-[#0a0a0a] mb-2">Responsibilities</h3>
                        <BulletList items={job.responsibilities} />
                    </div>

                    <div>
                        <h3 className="text-base font-medium text-[#0a0a0a] mb-2">Qualifications</h3>
                        <BulletList items={job.qualifications} />
                    </div>
                </div>
            </div>

            {/* Instant Apply Card */}
            <div className="bg-white border border-black/10 p-5 sm:p-6">
                <h3 className="text-base font-medium text-[#0a0a0a]">Apply for this role</h3>
                <p className="text-sm text-[#4a5565] mt-1">Apply through the SST careers portal</p>

                <div className="border-t border-black/10 mt-4 pt-4">
                    <div className="bg-[#eff6ff] border border-[#bedbff] px-3.5 py-3">
                        <p className="text-xs leading-4 text-[#1c398e]">
                            <span className="font-bold">How it works:</span> Sign in or create an account, upload
                            your resume and complete a few short steps. You can track your application status from
                            your dashboard.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 mt-4">
                        <a
                            href={job.applyUrl}
                            className="w-full h-10 bg-[#030213] text-white text-sm font-medium flex items-center justify-center transition-colors hover:bg-black cursor-pointer"
                        >
                            Apply Now
                        </a>
                    </div>
                </div>
            </div>

            {/* View More Jobs Card */}
            {otherJobs.length > 0 && (
                <div className="bg-white border border-black/10 p-5 sm:p-6">
                    <h4 className="text-base font-medium text-[#0a0a0a] mb-3">View More Jobs</h4>
                    <div className="space-y-4">
                        {otherJobs.map((other) => (
                            <div
                                key={other.slug}
                                className="flex items-center justify-between gap-4 border-l-4 border-[#2d8ec5] px-3 py-3"
                            >
                                <div>
                                    <p className="text-sm text-[#5c5c5c]">{other.title}</p>
                                    <p className="text-xs font-light text-[#5c5c5c] mt-0.5">
                                        {other.location} | {other.typeOfWork} | Experience: {other.experienceLevel}
                                    </p>
                                </div>
                                <ViewDetailsButton href={`/careers/${other.slug}`} />
                            </div>
                        ))}
                    </div>
                    <Link
                        href="/careers"
                        className="mt-4 w-full h-9 border border-black/10 bg-white text-[#0a0a0a] text-sm font-medium flex items-center justify-center transition-colors hover:bg-slate-50"
                    >
                        View More Jobs
                    </Link>
                </div>
            )}
        </div>
    );
}


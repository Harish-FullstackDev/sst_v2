import Image from "next/image";
import Link from "next/link";

import iconArrow from "@/assets/career/job-details/arrow-right-21.svg";
import iconLocation from "@/assets/career/job-details/location-pin-17x21.svg";
import iconBriefcase from "@/assets/career/job-details/briefcase-meta-24.svg";
import iconClock from "@/assets/career/job-details/clock-meta-24.svg";

function Meta({ icon, children }) {
    return (
        <span className="flex items-center gap-[6px] whitespace-nowrap">
            {icon}
            {children}
        </span>
    );
}

// Ported from the HRMS portal (HrmsSST JobCard, Figma 1524:415): title block
// over a 0.5px rule, a 3-line summary, then location / experience / work type.
// The subtitle shows the department, since the work type is in the meta row.
export default function SimilarJobCard({ job }) {
    const subtitle = job.categories[0] ?? job.typeOfWork;

    return (
        <Link href={`/careers/${job.slug}`} className="group flex flex-col gap-4 bg-[#f7f7f7] p-6">
            <div className="flex items-start justify-between gap-4 border-b-[0.5px] border-[#8695a7] pb-2">
                <div className="flex flex-col gap-[6px] capitalize text-[#0e2b4b]">
                    <h3 className="text-lg leading-[1.2] font-medium">{job.title}</h3>
                    {subtitle && <p className="text-base leading-[1.5]">{subtitle}</p>}
                </div>

                {/* Figma turns the 21×16 arrow -47° to point up-right. */}
                <span className="flex size-[38px] shrink-0 items-center justify-center bg-[#0061af] transition-colors duration-300 group-hover:bg-[#005192]">
                    <Image
                        src={iconArrow}
                        alt=""
                        className="h-4 w-[21px] -rotate-[47deg] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                </span>
            </div>

            {job.aboutJob && (
                <p className="line-clamp-3 text-sm leading-[1.5] text-[#415773]">{job.aboutJob}</p>
            )}

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm leading-[1.5] text-[#0e2b4b] capitalize">
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
        </Link>
    );
}

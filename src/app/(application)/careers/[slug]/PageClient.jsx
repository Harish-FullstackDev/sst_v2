import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CareersLayout from "@/components/Careers/CareersLayout";
import ContactBand from "@/components/Careers/ContactBand";
import JobDescription from "@/components/Careers/JobDescription/JobDescription";

const PageClient = ({ job, otherJobs }) => {
    if (!job) {
        return (
            <CareersLayout>
                <div className="max-w-3xl mx-auto text-center py-8">
                    <h1 className="text-xl font-semibold text-slate-900 mb-3">Job Not Found</h1>
                    <p className="text-slate-500 mb-6">
                        This position may have been filled or is no longer accepting applications.
                    </p>
                    <Link
                        href="/careers"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold transition-colors"
                    >
                        Back to Careers
                    </Link>
                </div>
            </CareersLayout>
        );
    }

    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />
            {/* Dark band behind the fixed, transparent-at-top navbar (Navbar renders
                its own 64/68px spacer; pull this band up into it). */}
            <div className="-mt-[64px] lg:-mt-[68px] h-[64px] lg:h-[68px] bg-[#081a2c]" aria-hidden="true" />

            <main className="flex-grow">
                <JobDescription job={job} otherJobs={otherJobs} />
            </main>

            {/* "Why Join Us" band, kept from the previous design */}
            <ContactBand />
            <Footer />
        </div>
    );
};

export default PageClient;

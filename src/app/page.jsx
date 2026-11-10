import PageClient from "./PageClient";

export const metadata = {
    alternates: { canonical: "/" },
    title: { absolute: "Support Studio Technologies | Enterprise Technology, SAP and Managed Services" },
    description: "Support Studio Technologies designs, builds and runs enterprise technology — SAP, cloud, data, AI, security and managed operations — under one team.",
};

export default function Page() {
    return <PageClient />;
}

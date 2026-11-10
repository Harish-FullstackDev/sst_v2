import PageClient from "./PageClient";

export const metadata = {
  title: "Under Maintenance",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <PageClient />;
}

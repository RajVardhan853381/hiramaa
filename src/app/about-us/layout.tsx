import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Hira Maa Group | Rural Development & Sustainability",
  description:
    "Learn about Hira Maa Group's journey across agriculture, dairy, solar energy, horticulture, and farmer empowerment in Chhattisgarh.",
  alternates: {
    canonical: "/about-us",
  },
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

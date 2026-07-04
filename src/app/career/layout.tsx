import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Hira Maa Group",
  description:
    "Explore career opportunities with Hira Maa Group across agriculture, clean energy, dairy, manufacturing, and rural development.",
  alternates: {
    canonical: "/career",
  },
};

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

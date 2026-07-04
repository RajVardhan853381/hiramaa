import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hiramaa FPO | Farmer Producer Organization in Chhattisgarh",
  description:
    "Hiramaa FPO supports farmer families in Bastar with fair prices, market access, millet products, training, and sustainable supply chains.",
  alternates: {
    canonical: "/hiramaa-fpo",
  },
};

export default function HiramaaFPOLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

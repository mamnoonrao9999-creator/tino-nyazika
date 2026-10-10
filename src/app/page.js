import HomePage from "@/components/home-page";

export const metadata = {
  title: "Tino — Organic Social Media Management",
  description:
    "Organic social media management for local businesses and personal brands that want to become the go-to in their niche.",
  openGraph: {
    title: "Tino — Organic Social Media Management",
    description:
      "Turn your social media into a consistent source of attention, authority & leads.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return <HomePage />;
}
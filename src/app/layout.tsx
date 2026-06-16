import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fast Forward >> Typing",
  description: "The modern typing tutor for adults.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

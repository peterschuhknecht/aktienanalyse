import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aktienanalyse · Thesen-Cockpit",
  description:
    "Thesen verwalten, Auswertungen lesen und Rückfragen an die KI stellen — Layout-Vorschau.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}

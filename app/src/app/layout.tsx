import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ThesisRadar MVP",
  description: "Mockup fuer KI-gestuetzte Investment-Auswertungen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}

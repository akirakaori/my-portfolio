import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../src/components/Navbar";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ashika Kambang",
  description: "Portfolio of Ashika Kambang",
};

const themeScript = `
(() => {
  try {
    const savedTheme = window.localStorage.getItem("theme");
    const shouldUseDark = savedTheme === "dark";

    document.documentElement.classList.toggle("dark", shouldUseDark);
    document.documentElement.style.colorScheme = shouldUseDark ? "dark" : "light";
  } catch {
    document.documentElement.classList.remove("dark");
    document.documentElement.style.colorScheme = "light";
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`h-full antialiased ${spaceGrotesk.variable} ${inter.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/navbar";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DigitalOOH — AI Platform for OOH Media Owners",
  description:
    "From chaos to control in 30 seconds. AI-powered platform to manage OOH inventory, campaigns, leads, and revenue with real-time analytics and automation.",
  openGraph: {
    title: "DigitalOOH — AI Platform for OOH Media Owners",
    description:
      "Transform how you manage OOH inventory, campaigns, and revenue with native AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.variable,"font-sans")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

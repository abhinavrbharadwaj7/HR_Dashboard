import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HR Performance Dashboard",
  description: "Track and manage employee performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="py-4 px-6 border-b">
            <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-xl font-bold">HR Dashboard</h1>
              <ThemeSwitcher />
            </div>
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
} 
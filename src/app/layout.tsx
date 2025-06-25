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
      <body className={`${inter.className} transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          {/* Light mode gradient + dark mode black */}
          <div className="min-h-screen light-bg-gradient dark:bg-black transition-all duration-300">
            {/* Sticky Top Bar */}
            <header className="sticky top-0 z-50 w-full flex justify-center px-4 pt-4">
              <div className="glass w-full max-w-6xl px-8 py-5 flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-inner" />
                  <h1
                    className="text-3xl font-bold tracking-tight text-[#3b53a0] dark:text-white"
                    style={{ letterSpacing: "-1px" }}
                  >
                    HR Dashboard
                  </h1>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm sm:text-base font-medium text-gray-800 dark:text-gray-300">
                    Track and manage employee performance
                  </span>
                  <div className="flex flex-1 justify-end items-center">
                    <ThemeSwitcher />
                  </div>
                </div>
              </div>
            </header>

            {/* Main Page Content */}
            <main className="pt-8 px-4 sm:px-8">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

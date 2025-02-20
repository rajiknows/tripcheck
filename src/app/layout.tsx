import type React from "react";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "~/components/theme-provider";
import { BottomNav } from "~/components/bottom-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TripCheck",
  description: "Manage group expenses for trips",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex min-h-screen flex-col">
            <main className="container mx-auto max-w-md flex-1 p-4">
              {children}
            </main>
            <BottomNav />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

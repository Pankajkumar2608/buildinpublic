import type { Metadata } from "next";
import { Geist, Geist_Mono, Mozilla_Headline  } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const mozillaHeadline = Mozilla_Headline({
  variable: "--font-mozilla-headline",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BuildInPublic",
  description: "BuildInPublic is a platform for developers to connect with other developers and share their knowledge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <SidebarProvider>
            <AppSidebar/>
          <SidebarTrigger className="md:hidden" />
          {children}
          </SidebarProvider>
          </ThemeProvider>
        <Toaster/>
      </body>
    </html>
  );
}

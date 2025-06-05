import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/ui/header";

const inter = Inter({subsets:["latin"]});

export const metadata = {
  title: "SkillSage- AI Career Coach",
  description: "An AI-powered career coach that builds your resume, preps you for interviews, and tracks your growth — all in one smart dashboard.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* header */}
            <Header/>
            <main className="min-h-screen">
                {children}
            </main>
            {/* footer */}
            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>Made with &hearts; by Hafiza</p>
              </div>
            </footer>
            
          </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}

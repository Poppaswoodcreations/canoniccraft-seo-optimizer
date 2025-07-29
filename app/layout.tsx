import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CanoniCraft SEO Optimizer - AI-Powered SEO Tools",
  description:
    "Comprehensive AI-powered SEO optimization toolkit. Analyze, optimize, and monitor your website's search engine performance with advanced tools for meta tags, technical SEO, and more.",
  keywords:
    "SEO, optimization, meta tags, canonical tags, alt text, technical SEO, search engine optimization, AI SEO tools",
  authors: [{ name: "CanoniCraft" }],
  openGraph: {
    title: "CanoniCraft SEO Optimizer - AI-Powered SEO Tools",
    description: "Comprehensive AI-powered SEO optimization toolkit for better search rankings",
    type: "website",
    siteName: "CanoniCraft SEO Optimizer",
  },
  twitter: {
    card: "summary_large_image",
    title: "CanoniCraft SEO Optimizer - AI-Powered SEO Tools",
    description: "Comprehensive AI-powered SEO optimization toolkit for better search rankings",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen">
          <nav className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    CanoniCraft SEO Optimizer
                  </h1>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600 hidden sm:block">AI-Powered SEO Tools</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </nav>
          <main>{children}</main>
          <footer className="bg-gray-50 border-t border-gray-200 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="text-center text-gray-600">
                <p>&copy; 2024 CanoniCraft SEO Optimizer. Built for Poppa's Wooden Creations and beyond.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Search,
  FileText,
  ImageIcon,
  Link,
  Settings,
  BarChart3,
  CheckCircle,
  TrendingUp,
  Globe,
  Zap,
  ArrowRight,
  Sparkles,
  XCircle,
  AlertTriangle,
  Wand2,
  ExternalLink,
  Download,
  Copy,
  Calendar,
  RefreshCw,
} from "lucide-react"
import NextLink from "next/link"

export default function Home() {
  const [url, setUrl] = useState("https://www.poppaswoodencreations.com")
  const [seoScore, setSeoScore] = useState(75)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResults, setAnalysisResults] = useState<any>(null)

  const handleAnalyze = async () => {
    if (!url) return
    setIsAnalyzing(true)

    // Simulate analysis
    setTimeout(() => {
      const score = Math.floor(Math.random() * 40) + 60 // 60-100
      setSeoScore(score)
      setAnalysisResults({
        score,
        issues: [
          "Missing meta descriptions on 3 pages",
          "5 images without alt text",
          "Page loading speed could be improved",
          "Missing canonical tags",
        ],
        recommendations: [
          "Add meta descriptions to all pages",
          "Optimize images with alt text",
          "Implement canonical tags",
          "Improve page loading speed",
        ],
      })
      setIsAnalyzing(false)
    }, 2000)
  }

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      alert("Copied to clipboard!")
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const features = [
    {
      title: "SEO Analysis",
      description: "Comprehensive website analysis with AI-powered recommendations",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      href: "/seo-analyzer",
      iconComponent: Search,
    },
    {
      title: "Meta Tags Generator",
      description: "Create optimized meta descriptions and titles that rank higher",
      color: "bg-gradient-to-br from-green-500 to-green-600",
      href: "/meta-tags",
      iconComponent: FileText,
    },
    {
      title: "Alt Tags Generator",
      description: "AI-powered alt text for better accessibility and SEO",
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      href: "/alt-tags",
      iconComponent: ImageIcon,
    },
    {
      title: "Canonical Tags",
      description: "Prevent duplicate content issues with proper canonical tags",
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
      href: "/canonical-tags",
      iconComponent: Link,
    },
    {
      title: "Technical SEO",
      description: "Generate robots.txt and XML sitemaps automatically",
      color: "bg-gradient-to-br from-red-500 to-red-600",
      href: "/technical-seo",
      iconComponent: Settings,
    },
    {
      title: "Search Console Guide",
      description: "Complete guide to Google Search Console setup and monitoring",
      color: "bg-gradient-to-br from-indigo-500 to-indigo-600",
      href: "/google-search-console",
      iconComponent: BarChart3,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            AI-Powered SEO Optimization
          </div>

          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6 leading-tight">
            CanoniCraft
            <span className="block text-4xl md:text-5xl mt-2">SEO Optimizer</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Transform your website's search engine performance with our comprehensive AI-powered SEO toolkit. Perfect
            for <strong className="text-blue-600">Poppa's Wooden Creations</strong> and any business ready to dominate
            search results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <NextLink href="/seo-analyzer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <Search className="h-5 w-5 mr-2" />
                Start Free Analysis
              </Button>
            </NextLink>
            <NextLink href="/technical-seo">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-200 hover:border-blue-300 px-8 py-3 text-lg font-semibold bg-transparent"
              >
                <Settings className="h-5 w-5 mr-2" />
                Generate SEO Files
              </Button>
            </NextLink>
          </div>
        </div>

        {/* Quick Analysis Card */}
        <Card className="mb-12 bg-gradient-to-r from-white to-blue-50 border-0 shadow-2xl">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3 text-2xl text-gray-800">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                <Search className="h-6 w-6 text-white" />
              </div>
              Real-Time SEO Health Check
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Get instant insights into your website's SEO performance and discover optimization opportunities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <Input
                placeholder="https://www.poppaswoodencreations.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 text-lg py-3 border-2 border-gray-200 focus:border-blue-400 rounded-lg"
              />
              <Button
                onClick={handleAnalyze}
                disabled={!url || isAnalyzing}
                size="lg"
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 px-8 py-3 text-lg font-semibold min-w-[160px]"
              >
                {isAnalyzing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Search className="h-5 w-5 mr-2" />
                    Analyze Now
                  </>
                )}
              </Button>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-2 mb-6">
              <Button
                size="sm"
                variant="outline"
                onClick={() => window.open("https://pagespeed.web.dev/", "_blank")}
                className="flex items-center gap-1"
              >
                <ExternalLink className="h-3 w-3" />
                PageSpeed Test
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => window.open("https://search.google.com/search-console", "_blank")}
                className="flex items-center gap-1"
              >
                <Globe className="h-3 w-3" />
                Google Search Console
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() =>
                  handleCopy(
                    "SEO Tips: Use HTTPS, Add meta descriptions, Optimize images with alt text, Ensure mobile-friendly design, Improve page loading speed",
                  )
                }
                className="flex items-center gap-1"
              >
                <Copy className="h-3 w-3" />
                Copy SEO Tips
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Weekly%20SEO%20Check&dates=${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0].replace(/-/g, "")}/${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0].replace(/-/g, "")}&details=Check%20website%20SEO%20performance`
                  window.open(calendarUrl, "_blank")
                }}
                className="flex items-center gap-1"
              >
                <Calendar className="h-3 w-3" />
                Schedule Check
              </Button>
            </div>

            {/* SEO Score Display */}
            {analysisResults && !isAnalyzing && (
              <div className="bg-white p-6 rounded-xl border-2 border-gray-100 shadow-lg mb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold text-gray-800">SEO Health Score</span>
                  <Badge
                    variant={seoScore >= 80 ? "default" : seoScore >= 60 ? "secondary" : "destructive"}
                    className="text-lg px-4 py-2"
                  >
                    {seoScore}/100
                  </Badge>
                </div>
                <Progress value={seoScore} className="h-4 mb-4" />

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 mt-6">
                  <Button
                    onClick={() =>
                      alert("AI Fixes: Check console for detailed recommendations or use the individual tools below!")
                    }
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  >
                    <Wand2 className="h-4 w-4 mr-2" />
                    Generate AI Fixes
                  </Button>

                  <Button
                    onClick={() =>
                      handleCopy(
                        `SEO Report - ${url}\nScore: ${seoScore}/100\nIssues: ${analysisResults.issues.join(", ")}`,
                      )
                    }
                    variant="outline"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Export Report
                  </Button>

                  <Button onClick={handleAnalyze} variant="outline" size="sm">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Re-analyze
                  </Button>
                </div>
              </div>
            )}

            {/* Issues and Recommendations */}
            {analysisResults && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-yellow-50 p-6 rounded-xl border-2 border-yellow-200">
                  <h4 className="text-lg font-bold text-yellow-800 mb-4 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Issues Found
                  </h4>
                  <div className="space-y-2">
                    {analysisResults.issues.map((issue: string, index: number) => (
                      <div key={index} className="flex items-start gap-2">
                        <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{issue}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
                  <h4 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Recommendations
                  </h4>
                  <div className="space-y-2">
                    {analysisResults.recommendations.map((rec: string, index: number) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="bg-green-100 text-green-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-gray-700 text-sm">{rec}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <NextLink href="/meta-tags">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        <FileText className="h-4 w-4 mr-2" />
                        Fix Meta Tags
                      </Button>
                    </NextLink>
                    <NextLink href="/technical-seo">
                      <Button size="sm" variant="outline">
                        <Settings className="h-4 w-4 mr-2" />
                        Technical SEO
                      </Button>
                    </NextLink>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* SEO Tools Grid */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
              Complete SEO Toolkit
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to optimize your website for search engines and boost your rankings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <NextLink key={index} href={feature.href}>
                <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group transform hover:scale-105 border-0 overflow-hidden">
                  <div className={`h-2 ${feature.color}`}></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-3">
                      <div
                        className={`p-4 rounded-xl ${feature.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <feature.iconComponent className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-200 mb-2">
                          {feature.title}
                        </CardTitle>
                        <Badge variant="default" className="bg-green-100 text-green-800">
                          Ready
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-gray-600 mb-6 text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors">
                      <span>Get Started</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform duration-200" />
                    </div>
                  </CardContent>
                </Card>
              </NextLink>
            ))}
          </div>
        </div>

        {/* Getting Started Section */}
        <Card className="bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 border-0 shadow-2xl">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
              🚀 Optimize Your Wooden Creations Website
            </CardTitle>
            <CardDescription className="text-lg text-gray-700 max-w-3xl mx-auto">
              Follow our proven 3-step process to dramatically improve your search engine rankings and attract more
              customers to your handmade wooden toys and homeware business.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h4 className="font-bold text-xl text-gray-800 mb-3">Analyze Current SEO</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Get a comprehensive analysis of your website's current SEO performance with specific recommendations
                  for improvement.
                </p>
                <NextLink href="/seo-analyzer">
                  <Button variant="outline" className="bg-white hover:bg-blue-50 border-2 border-blue-200">
                    <Search className="h-4 w-4 mr-2" />
                    Start Analysis
                  </Button>
                </NextLink>
              </div>

              <div className="text-center group">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h4 className="font-bold text-xl text-gray-800 mb-3">Generate SEO Files</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Create essential technical SEO files like robots.txt and XML sitemap to help Google find and index
                  your pages.
                </p>
                <NextLink href="/technical-seo">
                  <Button variant="outline" className="bg-white hover:bg-green-50 border-2 border-green-200">
                    <Settings className="h-4 w-4 mr-2" />
                    Generate Files
                  </Button>
                </NextLink>
              </div>

              <div className="text-center group">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h4 className="font-bold text-xl text-gray-800 mb-3">Monitor Progress</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Set up Google Search Console monitoring to track your improvements and maintain your search rankings.
                </p>
                <NextLink href="/google-search-console">
                  <Button variant="outline" className="bg-white hover:bg-purple-50 border-2 border-purple-200">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Setup Monitoring
                  </Button>
                </NextLink>
              </div>
            </div>

            <div className="mt-10 text-center">
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100">
                <h5 className="font-bold text-lg text-gray-800 mb-3">🎯 Expected Results for Your Business:</h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span className="text-gray-700">Higher search rankings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-blue-500" />
                    <span className="text-gray-700">More website visitors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-purple-500" />
                    <span className="text-gray-700">Increased sales</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

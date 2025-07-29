"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Globe,
  Shield,
  ExternalLink,
  Copy,
  Calendar,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Lightbulb,
  Download,
} from "lucide-react"

export default function SEOAnalyzer() {
  const [url, setUrl] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState<any>(null)
  const [copiedItem, setCopiedItem] = useState<string | null>(null)

  const handleAnalyze = async () => {
    if (!url) return

    setIsAnalyzing(true)

    // Simulate API call
    setTimeout(() => {
      setResults({
        score: 78,
        url: url,
        issues: [
          {
            type: "error",
            title: "Missing meta description",
            description: "Add meta descriptions to improve click-through rates",
            priority: "high",
          },
          {
            type: "warning",
            title: "Large images detected",
            description: "Optimize images to improve page load speed",
            priority: "medium",
          },
          {
            type: "success",
            title: "Mobile-friendly design",
            description: "Your site works well on mobile devices",
            priority: "low",
          },
          {
            type: "warning",
            title: "Missing alt text",
            description: "5 images are missing alt text for accessibility",
            priority: "high",
          },
        ],
        metrics: {
          performance: 85,
          accessibility: 72,
          bestPractices: 90,
          seo: 78,
        },
        recommendations: [
          "Add meta descriptions to all pages",
          "Optimize image sizes and formats",
          "Improve page loading speed",
          "Add alt text to all images",
          "Implement structured data markup",
        ],
      })
      setIsAnalyzing(false)
    }, 3000)
  }

  const handleCopy = async (text: string, item: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedItem(item)
      setTimeout(() => setCopiedItem(null), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const handleExternalLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  const getIssueIcon = (type: string) => {
    switch (type) {
      case "error":
        return <XCircle className="h-4 w-4 text-red-500" />
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      default:
        return <AlertTriangle className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">SEO Analyzer</h1>
        <p className="text-gray-600">Comprehensive website analysis with AI-powered recommendations</p>
      </div>

      {/* URL Input */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Analyze Website
          </CardTitle>
          <CardDescription>Enter your website URL to get a comprehensive SEO analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Input
              placeholder="https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleAnalyze} disabled={!url || isAnalyzing} className="min-w-[120px]">
              {isAnalyzing ? "Analyzing..." : "Analyze"}
            </Button>
          </div>
          <div className="flex gap-2 mt-4">
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleExternalLink("https://pagespeed.web.dev/")}
              className="flex items-center gap-1"
            >
              <ExternalLink className="h-3 w-3" />
              PageSpeed Insights
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() =>
                handleCopy(
                  "SEO Analysis Tips: Check meta tags, optimize images, improve loading speed, ensure mobile-friendliness",
                  "tips",
                )
              }
              className="flex items-center gap-1"
            >
              {copiedItem === "tips" ? <CheckCircle className="h-3 w-3" /> : <Lightbulb className="h-3 w-3" />}
              {copiedItem === "tips" ? "Copied!" : "SEO Tips"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      {results && (
        <div className="space-y-6">
          {/* Score Overview */}
          <Card>
            <CardHeader>
              <CardTitle>SEO Score: {results.score}/100</CardTitle>
              <CardDescription>Analysis results for {results.url}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <Globe className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                  <div className="text-2xl font-bold text-gray-900">{results.metrics.performance}</div>
                  <div className="text-sm text-gray-600">Performance</div>
                  <Progress value={results.metrics.performance} className="mt-2" />
                </div>
                <div className="text-center">
                  <Shield className="h-8 w-8 mx-auto mb-2 text-green-500" />
                  <div className="text-2xl font-bold text-gray-900">{results.metrics.accessibility}</div>
                  <div className="text-sm text-gray-600">Accessibility</div>
                  <Progress value={results.metrics.accessibility} className="mt-2" />
                </div>
                <div className="text-center">
                  <CheckCircle className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                  <div className="text-2xl font-bold text-gray-900">{results.metrics.bestPractices}</div>
                  <div className="text-sm text-gray-600">Best Practices</div>
                  <Progress value={results.metrics.bestPractices} className="mt-2" />
                </div>
                <div className="text-center">
                  <Search className="h-8 w-8 mx-auto mb-2 text-orange-500" />
                  <div className="text-2xl font-bold text-gray-900">{results.metrics.seo}</div>
                  <div className="text-sm text-gray-600">SEO</div>
                  <Progress value={results.metrics.seo} className="mt-2" />
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  onClick={() => {
                    const report = `SEO Analysis Report for ${results.url}\nScore: ${results.score}/100\nPerformance: ${results.metrics.performance}\nAccessibility: ${results.metrics.accessibility}\nBest Practices: ${results.metrics.bestPractices}\nSEO: ${results.metrics.seo}`
                    handleCopy(report, "report")
                  }}
                  className="flex items-center gap-1"
                >
                  {copiedItem === "report" ? <CheckCircle className="h-3 w-3" /> : <Download className="h-3 w-3" />}
                  {copiedItem === "report" ? "Copied!" : "Export Report"}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    const event = {
                      title: "SEO Re-analysis",
                      start: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
                      description: `Re-analyze ${results.url} for SEO improvements`,
                    }
                    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start.replace(/[-:]/g, "").split(".")[0]}Z/${event.start.replace(/[-:]/g, "").split(".")[0]}Z&details=${encodeURIComponent(event.description)}`
                    window.open(calendarUrl, "_blank")
                  }}
                  className="flex items-center gap-1"
                >
                  <Calendar className="h-3 w-3" />
                  Schedule Re-analysis
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Results */}
          <Tabs defaultValue="issues" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="issues">Issues & Fixes</TabsTrigger>
              <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            </TabsList>

            <TabsContent value="issues" className="space-y-4">
              {results.issues.map((issue: any, index: number) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      {getIssueIcon(issue.type)}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-gray-900">{issue.title}</h3>
                          <Badge
                            variant={
                              issue.priority === "high"
                                ? "destructive"
                                : issue.priority === "medium"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {issue.priority} priority
                          </Badge>
                        </div>
                        <p className="text-gray-600 text-sm">{issue.description}</p>
                        <Button
                          size="sm"
                          variant="outline"
                          className="mt-2 flex items-center gap-1 bg-transparent"
                          onClick={() => handleCopy(`${issue.title}: ${issue.description}`, `issue-${index}`)}
                        >
                          {copiedItem === `issue-${index}` ? (
                            <CheckCircle className="h-3 w-3" />
                          ) : (
                            <Copy className="h-3 w-3" />
                          )}
                          {copiedItem === `issue-${index}` ? "Copied!" : "Copy Issue"}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="recommendations" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>AI-Powered Recommendations</CardTitle>
                  <CardDescription>Prioritized actions to improve your SEO score</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {results.recommendations.map((rec: string, index: number) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                          {index + 1}
                        </div>
                        <span className="flex-1 text-gray-700">{rec}</span>
                        <Button size="sm" variant="ghost" onClick={() => handleCopy(rec, `rec-${index}`)}>
                          {copiedItem === `rec-${index}` ? (
                            <CheckCircle className="h-3 w-3" />
                          ) : (
                            <Copy className="h-3 w-3" />
                          )}
                        </Button>
                      </div>
                    ))}
                  </div>
                  <Button
                    className="w-full mt-4 flex items-center gap-2"
                    onClick={() => handleCopy(results.recommendations.join("\n"), "all-recommendations")}
                  >
                    {copiedItem === "all-recommendations" ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <Download className="h-4 w-4" />
                    )}
                    {copiedItem === "all-recommendations" ? "Copied All!" : "Copy All Recommendations"}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      )}

      {/* Loading State */}
      {isAnalyzing && (
        <Card>
          <CardContent className="pt-6">
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Analyzing your website...</h3>
              <p className="text-gray-600">This may take a few moments while we examine your SEO performance.</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

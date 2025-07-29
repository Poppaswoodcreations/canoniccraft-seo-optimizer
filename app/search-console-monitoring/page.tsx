"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  TrendingUp,
  Search,
  Globe,
  FileText,
  AlertTriangle,
  CheckCircle,
  BarChart3,
  Eye,
  Clock,
  Target,
  Tags,
  ImageIcon,
  Link,
} from "lucide-react"
import NextLink from "next/link"

export default function SearchConsoleMonitoring() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("3months")

  // Sample data for demonstration
  const sampleData = {
    indexingStatus: {
      indexed: 23,
      notIndexed: 7,
      errors: 2,
      warnings: 3,
    },
    sitemapStatus: {
      submitted: 35,
      indexed: 23,
      lastRead: "2 days ago",
      status: "Success",
    },
    searchPerformance: {
      clicks: 156,
      impressions: 2340,
      ctr: 6.7,
      position: 24.5,
    },
    topQueries: [
      { query: "wooden toys new zealand", clicks: 23, impressions: 340, position: 12 },
      { query: "handmade wooden toys", clicks: 18, impressions: 280, position: 15 },
      { query: "custom wooden homeware", clicks: 12, impressions: 190, position: 18 },
      { query: "poppa's wooden creations", clicks: 8, impressions: 120, position: 8 },
    ],
    topPages: [
      { page: "/", clicks: 45, impressions: 680, position: 14 },
      { page: "/wooden-toys", clicks: 32, impressions: 520, position: 16 },
      { page: "/homeware", clicks: 28, impressions: 410, position: 19 },
      { page: "/about", clicks: 15, impressions: 230, position: 22 },
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center gap-4">
          <NextLink href="/google-search-console">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </NextLink>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              <BarChart3 className="h-8 w-8 text-blue-600" />
              Search Console Monitoring Guide
            </h1>
            <p className="text-gray-600 mt-2">Track your website's indexing progress and search performance</p>
          </div>
        </div>

        {/* Quick Status Overview */}
        <Card className="bg-white shadow-xl border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              Current Status Overview
            </CardTitle>
            <CardDescription>Key metrics to monitor after sitemap submission</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="text-2xl font-bold text-green-600">{sampleData.indexingStatus.indexed}</div>
                <div className="text-sm text-gray-600">Pages Indexed</div>
                <CheckCircle className="h-4 w-4 text-green-600 mx-auto mt-1" />
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="text-2xl font-bold text-orange-600">{sampleData.indexingStatus.notIndexed}</div>
                <div className="text-sm text-gray-600">Not Indexed</div>
                <Clock className="h-4 w-4 text-orange-600 mx-auto mt-1" />
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-2xl font-bold text-blue-600">{sampleData.searchPerformance.clicks}</div>
                <div className="text-sm text-gray-600">Search Clicks</div>
                <Target className="h-4 w-4 text-blue-600 mx-auto mt-1" />
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="text-2xl font-bold text-purple-600">
                  {sampleData.searchPerformance.position.toFixed(1)}
                </div>
                <div className="text-sm text-gray-600">Avg Position</div>
                <Eye className="h-4 w-4 text-purple-600 mx-auto mt-1" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Monitoring Dashboard */}
        <Card className="bg-white shadow-xl border-0">
          <CardHeader>
            <CardTitle>Google Search Console Reports</CardTitle>
            <CardDescription>Monitor these key reports to track your SEO progress</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="coverage" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="coverage">Coverage</TabsTrigger>
                <TabsTrigger value="sitemaps">Sitemaps</TabsTrigger>
                <TabsTrigger value="performance">Performance</TabsTrigger>
                <TabsTrigger value="inspection">URL Inspection</TabsTrigger>
                <TabsTrigger value="timeline">Timeline</TabsTrigger>
              </TabsList>

              {/* Coverage Report */}
              <TabsContent value="coverage" className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="h-5 w-5 text-blue-600" />
                  <h3 className="text-xl font-semibold">Coverage Report</h3>
                  <Badge variant="outline">Most Important</Badge>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-800 mb-2">📊 What this shows:</h4>
                  <p className="text-blue-700 text-sm">
                    Which pages Google has successfully indexed, which ones have errors, and which are excluded.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900">Current Status</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm font-medium">Valid (Indexed)</span>
                        </div>
                        <span className="text-lg font-bold text-green-600">{sampleData.indexingStatus.indexed}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg border border-orange-200">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-orange-600" />
                          <span className="text-sm font-medium">Not Indexed</span>
                        </div>
                        <span className="text-lg font-bold text-orange-600">
                          {sampleData.indexingStatus.notIndexed}
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-red-600" />
                          <span className="text-sm font-medium">Errors</span>
                        </div>
                        <span className="text-lg font-bold text-red-600">{sampleData.indexingStatus.errors}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900">What to Look For</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-gray-50 rounded-lg border">
                        <div className="font-medium text-green-600 text-sm mb-1">✅ Good Signs:</div>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Increasing "Valid" pages over time</li>
                          <li>• Your main product pages are indexed</li>
                          <li>• Homepage and key pages show as "Valid"</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg border">
                        <div className="font-medium text-red-600 text-sm mb-1">⚠️ Issues to Fix:</div>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• "Server error (5xx)" - hosting issues</li>
                          <li>• "Not found (404)" - broken links</li>
                          <li>• "Crawl anomaly" - temporary problems</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-medium text-yellow-800 mb-2">🕐 Timeline for Your Wooden Creations Site:</h4>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>
                      • <strong>Week 1-2:</strong> Homepage and main pages should be indexed
                    </li>
                    <li>
                      • <strong>Week 3-4:</strong> Product pages start appearing
                    </li>
                    <li>
                      • <strong>Month 2-3:</strong> Most important pages indexed
                    </li>
                    <li>
                      • <strong>Month 3+:</strong> Full site coverage achieved
                    </li>
                  </ul>
                </div>
              </TabsContent>

              {/* Sitemaps Report */}
              <TabsContent value="sitemaps" className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="h-5 w-5 text-green-600" />
                  <h3 className="text-xl font-semibold">Sitemaps Report</h3>
                  <Badge variant="secondary">Check Weekly</Badge>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-medium text-green-800 mb-2">🗺️ Your Sitemap Status:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{sampleData.sitemapStatus.submitted}</div>
                      <div className="text-xs text-gray-600">URLs Submitted</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{sampleData.sitemapStatus.indexed}</div>
                      <div className="text-xs text-gray-600">URLs Indexed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">{sampleData.sitemapStatus.lastRead}</div>
                      <div className="text-xs text-gray-600">Last Read</div>
                    </div>
                    <div className="text-center">
                      <Badge variant="default" className="text-xs">
                        {sampleData.sitemapStatus.status}
                      </Badge>
                      <div className="text-xs text-gray-600 mt-1">Status</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900">Sitemap Health Indicators</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                        <div className="flex items-center gap-2 mb-1">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm font-medium text-green-800">Success Status</span>
                        </div>
                        <p className="text-xs text-green-700">Google can read your sitemap without errors</p>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex items-center gap-2 mb-1">
                          <TrendingUp className="h-4 w-4 text-blue-600" />
                          <span className="text-sm font-medium text-blue-800">Indexing Progress</span>
                        </div>
                        <Progress
                          value={(sampleData.sitemapStatus.indexed / sampleData.sitemapStatus.submitted) * 100}
                          className="h-2 mt-2"
                        />
                        <p className="text-xs text-blue-700 mt-1">
                          {Math.round((sampleData.sitemapStatus.indexed / sampleData.sitemapStatus.submitted) * 100)}%
                          of URLs indexed
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900">Common Issues & Solutions</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                        <div className="font-medium text-red-600 text-sm mb-1">❌ "Couldn't fetch"</div>
                        <p className="text-xs text-red-700">
                          <strong>Solution:</strong> Check that sitemap.xml is uploaded to your root directory and
                          accessible
                        </p>
                      </div>
                      <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                        <div className="font-medium text-orange-600 text-sm mb-1">⚠️ "Has errors"</div>
                        <p className="text-xs text-orange-700">
                          <strong>Solution:</strong> Regenerate sitemap and ensure all URLs are valid and accessible
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Performance Report */}
              <TabsContent value="performance" className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <Search className="h-5 w-5 text-purple-600" />
                  <h3 className="text-xl font-semibold">Search Performance</h3>
                  <Badge variant="outline">Track Growth</Badge>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="text-2xl font-bold text-blue-600">{sampleData.searchPerformance.clicks}</div>
                    <div className="text-sm text-gray-600">Total Clicks</div>
                    <div className="text-xs text-green-600 mt-1">+23% this month</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-2xl font-bold text-green-600">
                      {sampleData.searchPerformance.impressions.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Impressions</div>
                    <div className="text-xs text-green-600 mt-1">+45% this month</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="text-2xl font-bold text-purple-600">{sampleData.searchPerformance.ctr}%</div>
                    <div className="text-sm text-gray-600">Click Rate</div>
                    <div className="text-xs text-blue-600 mt-1">Industry avg: 3.2%</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="text-2xl font-bold text-orange-600">{sampleData.searchPerformance.position}</div>
                    <div className="text-sm text-gray-600">Avg Position</div>
                    <div className="text-xs text-green-600 mt-1">↑ 3 positions</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900">Top Search Queries</h4>
                    <div className="space-y-2">
                      {sampleData.topQueries.map((query, index) => (
                        <div key={index} className="p-3 bg-gray-50 rounded-lg border">
                          <div className="flex justify-between items-start mb-1">
                            <span className="text-sm font-medium text-gray-900">{query.query}</span>
                            <Badge variant="outline" className="text-xs">
                              Pos {query.position}
                            </Badge>
                          </div>
                          <div className="flex justify-between text-xs text-gray-600">
                            <span>{query.clicks} clicks</span>
                            <span>{query.impressions} impressions</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900">Top Performing Pages</h4>
                    <div className="space-y-2">
                      {sampleData.topPages.map((page, index) => (
                        <div key={index} className="p-3 bg-gray-50 rounded-lg border">
                          <div className="flex justify-between items-start mb-1">
                            <span className="text-sm font-medium text-gray-900">{page.page}</span>
                            <Badge variant="outline" className="text-xs">
                              Pos {page.position}
                            </Badge>
                          </div>
                          <div className="flex justify-between text-xs text-gray-600">
                            <span>{page.clicks} clicks</span>
                            <span>{page.impressions} impressions</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h4 className="font-medium text-purple-800 mb-2">🎯 Performance Goals for Wooden Creations:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="font-medium text-sm text-purple-700 mb-1">Short-term (1-3 months):</div>
                      <ul className="text-xs text-purple-600 space-y-1">
                        <li>• Get 50+ clicks per month</li>
                        <li>• Rank in top 20 for "wooden toys NZ"</li>
                        <li>• Achieve 5%+ click-through rate</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium text-sm text-purple-700 mb-1">Long-term (6+ months):</div>
                      <ul className="text-xs text-purple-600 space-y-1">
                        <li>• Get 200+ clicks per month</li>
                        <li>• Rank in top 10 for main keywords</li>
                        <li>• Expand to related search terms</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* URL Inspection */}
              <TabsContent value="inspection" className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <Eye className="h-5 w-5 text-orange-600" />
                  <h3 className="text-xl font-semibold">URL Inspection Tool</h3>
                  <Badge variant="secondary">Test Individual Pages</Badge>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <h4 className="font-medium text-orange-800 mb-2">🔍 How to Use URL Inspection:</h4>
                  <ol className="text-orange-700 text-sm space-y-1">
                    <li>1. In Search Console, click "URL Inspection" in the left menu</li>
                    <li>2. Enter a specific page URL (e.g., your wooden toys page)</li>
                    <li>3. See if Google can access and index that page</li>
                    <li>4. Request indexing for new or updated pages</li>
                  </ol>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900">Priority Pages to Test</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="font-medium text-blue-800 text-sm mb-1">🏠 Homepage</div>
                        <p className="text-xs text-blue-700">https://www.poppaswoodencreations.com/</p>
                        <Badge variant="default" className="text-xs mt-1">
                          High Priority
                        </Badge>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                        <div className="font-medium text-green-800 text-sm mb-1">🧸 Wooden Toys Page</div>
                        <p className="text-xs text-green-700">Your main product category page</p>
                        <Badge variant="default" className="text-xs mt-1">
                          High Priority
                        </Badge>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                        <div className="font-medium text-purple-800 text-sm mb-1">🏺 Homeware Page</div>
                        <p className="text-xs text-purple-700">Your second product category</p>
                        <Badge variant="secondary" className="text-xs mt-1">
                          Medium Priority
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900">What the Results Mean</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                        <div className="flex items-center gap-2 mb-1">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm font-medium text-green-800">"URL is on Google"</span>
                        </div>
                        <p className="text-xs text-green-700">✅ Perfect! Page is indexed and searchable</p>
                      </div>
                      <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                        <div className="flex items-center gap-2 mb-1">
                          <Clock className="h-4 w-4 text-orange-600" />
                          <span className="text-sm font-medium text-orange-800">"URL is not on Google"</span>
                        </div>
                        <p className="text-xs text-orange-700">⏳ Click "Request Indexing" to speed up the process</p>
                      </div>
                      <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                        <div className="flex items-center gap-2 mb-1">
                          <AlertTriangle className="h-4 w-4 text-red-600" />
                          <span className="text-sm font-medium text-red-800">"URL has issues"</span>
                        </div>
                        <p className="text-xs text-red-700">❌ Fix the reported issues before requesting indexing</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-medium text-yellow-800 mb-2">💡 Pro Tips for Wooden Creations:</h4>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• Test your homepage first - it should always be indexed</li>
                    <li>• After adding new product pages, use URL Inspection to request indexing</li>
                    <li>• If a page shows "Crawl anomaly", wait 24 hours and test again</li>
                    <li>• Use this tool weekly for your most important pages</li>
                  </ul>
                </div>
              </TabsContent>

              {/* Timeline */}
              <TabsContent value="timeline" className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-5 w-5 text-indigo-600" />
                  <h3 className="text-xl font-semibold">Monitoring Timeline</h3>
                  <Badge variant="outline">Your Roadmap</Badge>
                </div>

                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6 pb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="default">Week 1</Badge>
                      <span className="font-medium text-lg">Initial Setup</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Submit sitemap to Search Console</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Verify homepage is accessible</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-orange-600" />
                        <span className="text-sm">Wait for initial crawling (2-7 days)</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6 pb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">Week 2-3</Badge>
                      <span className="font-medium text-lg">First Results</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Eye className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">Check Coverage report daily</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="h-4 w-4 text-purple-600" />
                        <span className="text-sm">Homepage should appear in search results</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Main pages start getting indexed</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-6 pb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">Month 1</Badge>
                      <span className="font-medium text-lg">Performance Tracking</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">Performance data becomes available</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Search className="h-4 w-4 text-green-600" />
                        <span className="text-sm">First search clicks and impressions</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-purple-600" />
                        <span className="text-sm">Monitor weekly progress</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">Month 2-3</Badge>
                      <span className="font-medium text-lg">Optimization Phase</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Tags className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">Optimize based on search query data</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ImageIcon className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Add more content and images</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Link className="h-4 w-4 text-purple-600" />
                        <span className="text-sm">Build internal links between pages</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                  <h4 className="font-medium text-indigo-800 mb-2">📅 Your Weekly Monitoring Checklist:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="font-medium text-sm text-indigo-700 mb-1">Every Monday:</div>
                      <ul className="text-xs text-indigo-600 space-y-1">
                        <li>• Check Coverage report for new indexed pages</li>
                        <li>• Review any new errors or warnings</li>
                        <li>• Look at Performance data trends</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium text-sm text-indigo-700 mb-1">Monthly Deep Dive:</div>
                      <ul className="text-xs text-indigo-600 space-y-1">
                        <li>• Analyze top performing queries</li>
                        <li>• Identify pages that need optimization</li>
                        <li>• Plan content improvements</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <Card className="bg-white shadow-xl border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-indigo-600" />
              Take Action on Your Monitoring Data
            </CardTitle>
            <CardDescription>Use these tools to act on what you discover in Search Console</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* SEO Optimization Actions */}
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900 text-sm">SEO Optimization</h4>
                <div className="space-y-2">
                  <NextLink href="/seo-analyzer">
                    <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                      <Search className="h-3 w-3 mr-2" />
                      Re-analyze Website
                    </Button>
                  </NextLink>
                  <NextLink href="/meta-tags">
                    <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                      <Tags className="h-3 w-3 mr-2" />
                      Update Meta Tags
                    </Button>
                  </NextLink>
                  <NextLink href="/alt-tags">
                    <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                      <ImageIcon className="h-3 w-3 mr-2" />
                      Add Alt Tags
                    </Button>
                  </NextLink>
                  <NextLink href="/canonical-tags">
                    <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                      <Link className="h-3 w-3 mr-2" />
                      Fix Canonical Issues
                    </Button>
                  </NextLink>
                </div>
              </div>

              {/* Technical Actions */}
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900 text-sm">Technical SEO</h4>
                <div className="space-y-2">
                  <NextLink href="/technical-seo">
                    <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                      <FileText className="h-3 w-3 mr-2" />
                      Update Sitemap
                    </Button>
                  </NextLink>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start bg-transparent"
                    onClick={() => window.open("https://search.google.com/search-console/sitemaps", "_blank")}
                  >
                    <Globe className="h-3 w-3 mr-2" />
                    Submit New Sitemap
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start bg-transparent"
                    onClick={() => {
                      const url = prompt("Enter URL to request indexing:")
                      if (url) {
                        window.open(
                          `https://search.google.com/search-console/inspect?resource_id=${encodeURIComponent(url)}`,
                          "_blank",
                        )
                      }
                    }}
                  >
                    <Eye className="h-3 w-3 mr-2" />
                    Request Indexing
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start bg-transparent"
                    onClick={() => window.open("https://developers.google.com/speed/pagespeed/insights/", "_blank")}
                  >
                    <TrendingUp className="h-3 w-3 mr-2" />
                    Test Page Speed
                  </Button>
                </div>
              </div>

              {/* Content Actions */}
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900 text-sm">Content Optimization</h4>
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start bg-transparent"
                    onClick={() => {
                      const keywords = `Based on your Search Console data, focus on these keywords:

High Opportunity:
- "wooden toys new zealand" (Position 12 → Target: Top 10)
- "handmade wooden toys" (Position 15 → Target: Top 10)
- "custom wooden homeware" (Position 18 → Target: Top 15)

Content Ideas:
- Write blog posts about wooden toy safety
- Create care instructions for wooden products
- Share your crafting process and story
- Add customer testimonials and reviews

Page Improvements:
- Add more descriptive text to product pages
- Include size and material specifications
- Add "Made in New Zealand" prominently
- Create FAQ section about wooden toys`

                      try {
                        navigator.clipboard.writeText(keywords)
                        alert("Content optimization plan copied to clipboard!")
                      } catch (error) {
                        alert(keywords)
                      }
                    }}
                  >
                    <Target className="h-3 w-3 mr-2" />
                    Get Content Plan
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start bg-transparent"
                    onClick={() => {
                      const improvements = `Page Optimization Checklist:

Homepage:
- Add "Handmade Wooden Toys & Homeware in New Zealand" to title
- Include customer testimonials
- Add clear product categories

Product Pages:
- Write detailed descriptions (200+ words each)
- Add dimensions and materials
- Include care instructions
- Add related product suggestions

About Page:
- Tell your story and crafting process
- Include photos of your workshop
- Mention years of experience
- Add location (New Zealand)

Contact Page:
- Include full address
- Add business hours
- Include phone number
- Add contact form`

                      try {
                        navigator.clipboard.writeText(improvements)
                        alert("Page improvement checklist copied!")
                      } catch (error) {
                        alert(improvements)
                      }
                    }}
                  >
                    <FileText className="h-3 w-3 mr-2" />
                    Page Improvements
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start bg-transparent"
                    onClick={() => {
                      const blogIdeas = `Blog Content Ideas for Wooden Creations:

1. "The Art of Handcrafted Wooden Toys"
   - Your crafting process
   - Tools and techniques used
   - Why handmade is better

2. "Caring for Your Wooden Toys"
   - Cleaning instructions
   - Storage tips
   - Maintenance guide

3. "Why Choose Wooden Toys for Children"
   - Safety benefits
   - Educational value
   - Environmental impact

4. "Behind the Scenes: A Day in the Workshop"
   - Your daily routine
   - Current projects
   - Customer stories

5. "Custom Wooden Homeware: From Idea to Reality"
   - Design process
   - Material selection
   - Customization options`

                      try {
                        navigator.clipboard.writeText(blogIdeas)
                        alert("Blog content ideas copied!")
                      } catch (error) {
                        alert(blogIdeas)
                      }
                    }}
                  >
                    <FileText className="h-3 w-3 mr-2" />
                    Blog Ideas
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start bg-transparent"
                    onClick={() => {
                      const localSEO = `Local SEO Optimization for New Zealand:

Google My Business:
- Claim your Google My Business listing
- Add photos of your products and workshop
- Collect customer reviews
- Post regular updates

Local Keywords:
- "wooden toys Auckland"
- "handmade toys Wellington"
- "wooden homeware Christchurch"
- "custom wooden toys New Zealand"

Local Directories:
- Yellow Pages NZ
- Localist.co.nz
- NZ Business Directory
- Local craft directories

Social Media:
- Instagram: Show your crafting process
- Facebook: Share customer photos
- Pinterest: Create boards for different products`

                      try {
                        navigator.clipboard.writeText(localSEO)
                        alert("Local SEO plan copied!")
                      } catch (error) {
                        alert(localSEO)
                      }
                    }}
                  >
                    <Globe className="h-3 w-3 mr-2" />
                    Local SEO Plan
                  </Button>
                </div>
              </div>

              {/* Monitoring Actions */}
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900 text-sm">Monitoring & Tracking</h4>
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start bg-transparent"
                    onClick={() => {
                      const reminder = new Date()
                      reminder.setDate(reminder.getDate() + 7)
                      const event = {
                        title: "Weekly SEO Check - Wooden Creations",
                        start: reminder.toISOString().split("T")[0],
                        description: `Check Google Search Console:
- Coverage report for new indexed pages
- Performance data and trends
- Any new errors or warnings
- Top performing queries
- Pages needing optimization`,
                      }

                      // Try to create calendar event
                      const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                        event.title,
                      )}&dates=${event.start.replace(/-/g, "")}/${event.start.replace(
                        /-/g,
                        "",
                      )}&details=${encodeURIComponent(event.description)}`

                      window.open(calendarUrl, "_blank")
                      alert("Weekly SEO monitoring reminder created!")
                    }}
                  >
                    <Clock className="h-3 w-3 mr-2" />
                    Set Weekly Reminder
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start bg-transparent"
                    onClick={() => window.open("https://search.google.com/search-console/performance", "_blank")}
                  >
                    <BarChart3 className="h-3 w-3 mr-2" />
                    View Performance
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start bg-transparent"
                    onClick={() => window.open("https://search.google.com/search-console/coverage", "_blank")}
                  >
                    <CheckCircle className="h-3 w-3 mr-2" />
                    Check Coverage
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start bg-transparent"
                    onClick={() => {
                      const report = `SEO Monitoring Report - ${new Date().toDateString()}

Current Status:
- Pages Indexed: ${sampleData.indexingStatus.indexed}
- Search Clicks: ${sampleData.searchPerformance.clicks}
- Average Position: ${sampleData.searchPerformance.position}
- Click Rate: ${sampleData.searchPerformance.ctr}%

Top Performing Queries:
${sampleData.topQueries.map((q, i) => `${i + 1}. "${q.query}" - ${q.clicks} clicks, position ${q.position}`).join("\n")}

Next Actions:
- Continue monitoring weekly
- Optimize underperforming pages
- Create content for high-opportunity keywords
- Request indexing for new pages

Generated by CanoniCraft SEO Optimizer`

                      try {
                        navigator.clipboard.writeText(report)
                        alert("Monitoring report copied to clipboard!")
                      } catch (error) {
                        // Create downloadable file as fallback
                        const blob = new Blob([report], { type: "text/plain" })
                        const url = URL.createObjectURL(blob)
                        const a = document.createElement("a")
                        a.href = url
                        a.download = `seo-monitoring-report-${new Date().toISOString().split("T")[0]}.txt`
                        document.body.appendChild(a)
                        a.click()
                        document.body.removeChild(a)
                        URL.revokeObjectURL(url)
                        alert("Monitoring report downloaded!")
                      }
                    }}
                  >
                    <FileText className="h-3 w-3 mr-2" />
                    Export Report
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
              <h4 className="font-medium text-indigo-800 mb-3">🚀 Quick Actions Based on Your Data</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <Button
                  className="w-full"
                  onClick={() => window.open("https://search.google.com/search-console/", "_blank")}
                >
                  <Globe className="h-4 w-4 mr-2" />
                  Open Search Console
                </Button>
                <NextLink href="/seo-analyzer">
                  <Button variant="secondary" className="w-full">
                    <Search className="h-4 w-4 mr-2" />
                    Analyze Website Again
                  </Button>
                </NextLink>
                <NextLink href="/technical-seo">
                  <Button variant="outline" className="w-full bg-transparent">
                    <FileText className="h-4 w-4 mr-2" />
                    Update SEO Files
                  </Button>
                </NextLink>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

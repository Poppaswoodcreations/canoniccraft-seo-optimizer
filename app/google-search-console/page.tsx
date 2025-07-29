"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, CheckCircle, Globe, FileText, BarChart3 } from "lucide-react"
import NextLink from "next/link"

export default function GoogleSearchConsole() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center gap-4">
          <NextLink href="/">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </NextLink>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              <Globe className="h-8 w-8 text-blue-600" />
              Google Search Console Setup
            </h1>
            <p className="text-gray-600 mt-2">Complete guide to setting up and verifying your website</p>
          </div>
        </div>

        {/* Setup Steps */}
        <div className="space-y-6">
          <Card className="bg-white shadow-xl border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Step 1: Access Google Search Console
              </CardTitle>
              <CardDescription>Start by visiting Google Search Console</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Google Search Console is a free tool that helps you monitor and maintain your site's presence in Google
                Search results.
              </p>
              <Button asChild className="w-full md:w-auto">
                <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Open Google Search Console
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                Step 2: Add Your Property
              </CardTitle>
              <CardDescription>Add your website to Search Console</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-medium text-blue-800 mb-2">Choose Property Type:</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="default">Recommended</Badge>
                    <span className="text-sm text-blue-700">URL prefix (e.g., https://www.yoursite.com)</span>
                  </div>
                  <p className="text-xs text-blue-600">
                    This option is easier to verify and covers all pages under your domain.
                  </p>
                </div>
              </div>
              <ol className="text-sm text-gray-700 space-y-2">
                <li>1. Click "Add Property" in Search Console</li>
                <li>2. Select "URL prefix" option</li>
                <li>3. Enter your full website URL (e.g., https://www.poppaswoodencreations.com)</li>
                <li>4. Click "Continue"</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-purple-600" />
                Step 3: Verify Ownership
              </CardTitle>
              <CardDescription>Prove you own the website</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 className="font-medium text-purple-800 mb-2">Verification Methods:</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-white rounded border">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="default">Easiest</Badge>
                      <span className="font-medium text-sm">HTML File Upload</span>
                    </div>
                    <p className="text-xs text-gray-600">
                      Download a file and upload it to your website's root directory
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded border">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="secondary">Alternative</Badge>
                      <span className="font-medium text-sm">HTML Tag</span>
                    </div>
                    <p className="text-xs text-gray-600">Add a meta tag to your homepage's HTML head section</p>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h5 className="font-medium text-yellow-800 mb-2">💡 For Wooden Creations Website:</h5>
                <p className="text-yellow-700 text-sm">
                  If you're using a website builder (Wix, Squarespace, etc.), look for "HTML Tag" method and add the
                  verification code to your site's header.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Step 4: Submit Your Sitemap
              </CardTitle>
              <CardDescription>Help Google discover all your pages</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-medium text-green-800 mb-2">📋 Sitemap Submission Process:</h4>
                <ol className="text-green-700 text-sm space-y-1">
                  <li>1. First, generate your sitemap using our Technical SEO tool</li>
                  <li>2. Upload the sitemap.xml file to your website's root directory</li>
                  <li>3. In Search Console, go to "Sitemaps" in the left menu</li>
                  <li>4. Enter "sitemap.xml" in the "Add a new sitemap" field</li>
                  <li>5. Click "Submit"</li>
                </ol>
              </div>
              <div className="flex gap-3">
                <NextLink href="/technical-seo">
                  <Button variant="outline">
                    <FileText className="h-4 w-4 mr-2" />
                    Generate Sitemap First
                  </Button>
                </NextLink>
                <Button asChild>
                  <a href="https://search.google.com/search-console/sitemaps" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Submit Sitemap
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-orange-600" />
                Step 5: Monitor Your Progress
              </CardTitle>
              <CardDescription>Track indexing and performance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <h4 className="font-medium text-orange-800 mb-2">🎯 What to Monitor:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-sm text-orange-700 mb-1">Coverage Report:</h5>
                    <ul className="text-xs text-orange-600 space-y-1">
                      <li>• Pages successfully indexed</li>
                      <li>• Indexing errors to fix</li>
                      <li>• Pages excluded from search</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-sm text-orange-700 mb-1">Performance Report:</h5>
                    <ul className="text-xs text-orange-600 space-y-1">
                      <li>• Search clicks and impressions</li>
                      <li>• Average position in results</li>
                      <li>• Top performing queries</li>
                    </ul>
                  </div>
                </div>
              </div>
              <NextLink href="/search-console-monitoring">
                <Button className="w-full md:w-auto">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Learn How to Monitor Progress
                </Button>
              </NextLink>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <Card className="bg-white shadow-xl border-0">
          <CardHeader>
            <CardTitle>Expected Timeline</CardTitle>
            <CardDescription>What to expect after setup</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="default">Day 1</Badge>
                  <span className="font-medium">Setup Complete</span>
                </div>
                <p className="text-sm text-gray-600">Property verified and sitemap submitted</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="secondary">Week 1-2</Badge>
                  <span className="font-medium">Initial Indexing</span>
                </div>
                <p className="text-sm text-gray-600">Homepage and main pages start appearing in Google</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="secondary">Month 1-3</Badge>
                  <span className="font-medium">Full Coverage</span>
                </div>
                <p className="text-sm text-gray-600">Most pages indexed and performance data available</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

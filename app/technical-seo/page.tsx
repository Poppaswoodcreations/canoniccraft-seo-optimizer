"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Download,
  Copy,
  CheckCircle,
  FileText,
  MapIcon as Sitemap,
  Wand2,
  Globe,
  ExternalLink,
} from "lucide-react"
import NextLink from "next/link"

export default function TechnicalSEO() {
  const [url, setUrl] = useState("https://www.poppaswoodencreations.com")
  const [isGenerating, setIsGenerating] = useState(false)
  const [robotsTxt, setRobotsTxt] = useState("")
  const [xmlSitemap, setXmlSitemap] = useState("")
  const [copiedSection, setCopiedSection] = useState<string | null>(null)

  const handleGenerateFiles = async () => {
    setIsGenerating(true)

    try {
      const response = await fetch("/api/generate-technical-seo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      })

      if (!response.ok) {
        throw new Error("Failed to generate files")
      }

      const data = await response.json()
      setRobotsTxt(data.robotsTxt)
      setXmlSitemap(data.xmlSitemap)
    } catch (error) {
      console.error("Generation error:", error)
      alert("Failed to generate files. Please try again.")
    } finally {
      setIsGenerating(false)
    }
  }

  const copyToClipboard = async (text: string, section: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedSection(section)
      setTimeout(() => setCopiedSection(null), 2000)
    } catch (error) {
      console.error("Failed to copy:", error)
    }
  }

  const downloadFile = (content: string, filename: string) => {
    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

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
              <FileText className="h-8 w-8 text-blue-600" />
              Technical SEO File Generator
            </h1>
            <p className="text-gray-600 mt-2">AI-powered robots.txt and XML sitemap generation</p>
          </div>
        </div>

        {/* URL Input */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Website URL
            </CardTitle>
            <CardDescription>Enter your website URL to generate technical SEO files</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="website-url">Website URL</Label>
              <Input
                id="website-url"
                placeholder="https://www.yourwebsite.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="text-lg"
              />
            </div>
            <Button onClick={handleGenerateFiles} disabled={isGenerating || !url} className="w-full" size="lg">
              <Wand2 className="h-4 w-4 mr-2" />
              {isGenerating ? "Generating SEO Files..." : "Generate robots.txt & XML Sitemap"}
            </Button>
          </CardContent>
        </Card>

        {/* Generated Files */}
        {(robotsTxt || xmlSitemap) && (
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Generated Technical SEO Files</CardTitle>
              <CardDescription>AI-generated robots.txt and XML sitemap for your website</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="robots" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="robots" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    robots.txt
                  </TabsTrigger>
                  <TabsTrigger value="sitemap" className="flex items-center gap-2">
                    <Sitemap className="h-4 w-4" />
                    XML Sitemap
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="robots" className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">robots.txt File</h4>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={() => copyToClipboard(robotsTxt, "robots")}>
                          {copiedSection === "robots" ? (
                            <CheckCircle className="h-3 w-3 mr-1" />
                          ) : (
                            <Copy className="h-3 w-3 mr-1" />
                          )}
                          {copiedSection === "robots" ? "Copied!" : "Copy"}
                        </Button>
                        <Button size="sm" onClick={() => downloadFile(robotsTxt, "robots.txt")}>
                          <Download className="h-3 w-3 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
                      <pre className="text-sm whitespace-pre-wrap">{robotsTxt}</pre>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h5 className="font-medium text-blue-800 mb-2">How to implement:</h5>
                      <ol className="text-sm text-blue-700 space-y-1">
                        <li>1. Copy the robots.txt content above</li>
                        <li>2. Create a new file named "robots.txt"</li>
                        <li>3. Upload it to your website's root directory</li>
                        <li>4. Verify it works by visiting: {url}/robots.txt</li>
                      </ol>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="sitemap" className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">XML Sitemap</h4>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={() => copyToClipboard(xmlSitemap, "sitemap")}>
                          {copiedSection === "sitemap" ? (
                            <CheckCircle className="h-3 w-3 mr-1" />
                          ) : (
                            <Copy className="h-3 w-3 mr-1" />
                          )}
                          {copiedSection === "sitemap" ? "Copied!" : "Copy"}
                        </Button>
                        <Button size="sm" onClick={() => downloadFile(xmlSitemap, "sitemap.xml")}>
                          <Download className="h-3 w-3 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg max-h-96 overflow-y-auto">
                      <pre className="text-sm whitespace-pre-wrap">{xmlSitemap}</pre>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <h5 className="font-medium text-green-800 mb-2">How to implement:</h5>
                      <ol className="text-sm text-green-700 space-y-1">
                        <li>1. Copy the XML sitemap content above</li>
                        <li>2. Create a new file named "sitemap.xml"</li>
                        <li>3. Upload it to your website's root directory</li>
                        <li>4. Submit to Google Search Console</li>
                        <li>5. Verify it works by visiting: {url}/sitemap.xml</li>
                      </ol>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        )}

        {/* Next Steps */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Next Steps</CardTitle>
            <CardDescription>Complete your SEO setup with Google Search Console</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <NextLink href="/google-search-console">
                <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <ExternalLink className="h-5 w-5 text-blue-600" />
                    <h4 className="font-medium text-gray-900">Submit to Google Search Console</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Follow our step-by-step guide to submit your sitemap to Google and get your website indexed.
                  </p>
                </div>
              </NextLink>

              <NextLink href="/seo-analyzer">
                <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <h4 className="font-medium text-gray-900">Re-analyze Your Website</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    After uploading the files, run another SEO analysis to confirm the technical issues are resolved.
                  </p>
                </div>
              </NextLink>
            </div>
          </CardContent>
        </Card>

        {/* Benefits */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Why These Files Matter</CardTitle>
            <CardDescription>The SEO benefits of proper technical implementation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900 flex items-center gap-2">
                  <FileText className="h-4 w-4 text-blue-600" />
                  robots.txt Benefits
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Guides search engine crawlers</li>
                  <li>• Prevents crawling of private pages</li>
                  <li>• Improves crawl budget efficiency</li>
                  <li>• Points to your XML sitemap</li>
                  <li>• Required for professional SEO</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900 flex items-center gap-2">
                  <Sitemap className="h-4 w-4 text-green-600" />
                  XML Sitemap Benefits
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Helps Google find all your pages</li>
                  <li>• Shows page importance and updates</li>
                  <li>• Improves indexing speed</li>
                  <li>• Essential for large websites</li>
                  <li>• Boosts search rankings</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

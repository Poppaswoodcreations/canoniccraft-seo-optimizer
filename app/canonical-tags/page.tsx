"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Link, CheckCircle, AlertTriangle, Copy } from "lucide-react"
import NextLink from "next/link"

export default function CanonicalTags() {
  const [url, setUrl] = useState("")
  const [canonicalTag, setCanonicalTag] = useState("")

  const generateCanonicalTag = () => {
    if (!url) {
      alert("Please enter a URL")
      return
    }

    let formattedUrl = url
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      formattedUrl = "https://" + url
    }

    const tag = `<link rel="canonical" href="${formattedUrl}" />`
    setCanonicalTag(tag)
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(canonicalTag)
      alert("Canonical tag copied to clipboard!")
    } catch (error) {
      alert("Failed to copy to clipboard")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center gap-4">
          <NextLink href="/">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </NextLink>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              <Link className="h-8 w-8 text-indigo-600" />
              Canonical Tags Generator
            </h1>
            <p className="text-gray-600 mt-2">
              Generate and optimize canonical tags to prevent duplicate content issues
            </p>
          </div>
        </div>

        {/* Generator */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Generate Canonical Tag</CardTitle>
            <CardDescription>Enter your page URL to generate the proper canonical tag</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="page-url">Page URL</Label>
              <Input
                id="page-url"
                placeholder="https://example.com/page"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="text-lg"
              />
            </div>
            <Button onClick={generateCanonicalTag} className="w-full" size="lg">
              Generate Canonical Tag
            </Button>

            {canonicalTag && (
              <div className="space-y-4 mt-6">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Generated Canonical Tag</h4>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={copyToClipboard}>
                      <Copy className="h-3 w-3 mr-1" />
                      Copy
                    </Button>
                  </div>
                </div>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
                  <pre className="text-sm">{canonicalTag}</pre>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Canonical Tag Best Practices</CardTitle>
            <CardDescription>Follow these guidelines for optimal SEO results</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900">Use absolute URLs</h4>
                  <p className="text-sm text-gray-600">Always include the full URL with protocol (https://)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900">Self-referencing canonical</h4>
                  <p className="text-sm text-gray-600">Each page should have a canonical tag pointing to itself</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900">Avoid multiple canonical tags</h4>
                  <p className="text-sm text-gray-600">Only use one canonical tag per page</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

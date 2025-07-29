"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Tags, Copy, Wand2 } from "lucide-react"
import NextLink from "next/link"

export default function MetaTags() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [keywords, setKeywords] = useState("")
  const [url, setUrl] = useState("")
  const [generatedTags, setGeneratedTags] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const generateMetaTags = async () => {
    if (!title || !description) {
      alert("Please enter at least a title and description")
      return
    }

    setIsGenerating(true)

    try {
      const response = await fetch("/api/generate-meta", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description, keywords, url }),
      })

      if (!response.ok) {
        throw new Error("Failed to generate meta tags")
      }

      const data = await response.json()
      setGeneratedTags(data.metaTags)
    } catch (error) {
      console.error("Generation error:", error)
      // Fallback generation
      const tags = `<title>${title}</title>
<meta name="description" content="${description}" />
${keywords ? `<meta name="keywords" content="${keywords}" />` : ""}
${url ? `<link rel="canonical" href="${url}" />` : ""}
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${description}" />
${url ? `<meta property="og:url" content="${url}" />` : ""}
<meta property="og:type" content="website" />`
      setGeneratedTags(tags)
    } finally {
      setIsGenerating(false)
    }
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedTags)
      alert("Meta tags copied to clipboard!")
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
              <Tags className="h-8 w-8 text-green-600" />
              Meta Tags Generator
            </h1>
            <p className="text-gray-600 mt-2">Generate optimized meta tags for better search engine visibility</p>
          </div>
        </div>

        {/* Generator Form */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Generate Meta Tags</CardTitle>
            <CardDescription>Enter your page information to generate optimized meta tags</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="page-title">Page Title (50-60 characters)</Label>
              <Input
                id="page-title"
                placeholder="Your Page Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxLength={60}
              />
              <p className="text-xs text-gray-500">{title.length}/60 characters</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="page-description">Meta Description (150-160 characters)</Label>
              <Textarea
                id="page-description"
                placeholder="A compelling description of your page content"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                maxLength={160}
                rows={3}
              />
              <p className="text-xs text-gray-500">{description.length}/160 characters</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="keywords">Keywords (optional)</Label>
              <Input
                id="keywords"
                placeholder="keyword1, keyword2, keyword3"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="page-url">Page URL (optional)</Label>
              <Input
                id="page-url"
                placeholder="https://example.com/page"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>

            <Button onClick={generateMetaTags} disabled={isGenerating} className="w-full" size="lg">
              <Wand2 className="h-4 w-4 mr-2" />
              {isGenerating ? "Generating..." : "Generate Meta Tags"}
            </Button>

            {generatedTags && (
              <div className="space-y-4 mt-6">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Generated Meta Tags</h4>
                  <Button size="sm" variant="outline" onClick={copyToClipboard}>
                    <Copy className="h-3 w-3 mr-1" />
                    Copy
                  </Button>
                </div>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
                  <pre className="text-sm whitespace-pre-wrap">{generatedTags}</pre>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Guidelines */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Meta Tags Guidelines</CardTitle>
            <CardDescription>Best practices for effective meta tags</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900">Title Tags</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Keep between 50-60 characters</li>
                  <li>• Include primary keyword near the beginning</li>
                  <li>• Make it compelling and clickable</li>
                  <li>• Unique for each page</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900">Meta Descriptions</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Keep between 150-160 characters</li>
                  <li>• Include a call-to-action</li>
                  <li>• Summarize page content accurately</li>
                  <li>• Use active voice</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

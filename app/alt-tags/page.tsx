"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, ImageIcon, Wand2, Copy } from "lucide-react"
import NextLink from "next/link"

export default function AltTags() {
  const [imageUrl, setImageUrl] = useState("")
  const [context, setContext] = useState("")
  const [altText, setAltText] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const generateAltText = async () => {
    if (!imageUrl) {
      alert("Please enter an image URL")
      return
    }

    setIsGenerating(true)

    try {
      const response = await fetch("/api/generate-alt-text", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ imageUrl, context }),
      })

      if (!response.ok) {
        throw new Error("Failed to generate alt text")
      }

      const data = await response.json()
      setAltText(data.altText)
    } catch (error) {
      console.error("Generation error:", error)
      // Fallback generation
      const fallbackAlt = `Image showing ${context || "content"} - please add descriptive alt text`
      setAltText(fallbackAlt)
    } finally {
      setIsGenerating(false)
    }
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(altText)
      alert("Alt text copied to clipboard!")
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
              <ImageIcon className="h-8 w-8 text-purple-600" />
              Alt Tags Generator
            </h1>
            <p className="text-gray-600 mt-2">AI-powered alt text generation for better accessibility and SEO</p>
          </div>
        </div>

        {/* Generator */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Generate Alt Text</CardTitle>
            <CardDescription>Enter image details to generate descriptive alt text</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="image-url">Image URL</Label>
              <Input
                id="image-url"
                placeholder="https://example.com/image.jpg"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="context">Context (optional)</Label>
              <Textarea
                id="context"
                placeholder="Describe what the image shows or its purpose on the page"
                value={context}
                onChange={(e) => setContext(e.target.value)}
                rows={3}
              />
            </div>

            <Button onClick={generateAltText} disabled={isGenerating} className="w-full" size="lg">
              <Wand2 className="h-4 w-4 mr-2" />
              {isGenerating ? "Generating..." : "Generate Alt Text"}
            </Button>

            {altText && (
              <div className="space-y-4 mt-6">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Generated Alt Text</h4>
                  <Button size="sm" variant="outline" onClick={copyToClipboard}>
                    <Copy className="h-3 w-3 mr-1" />
                    Copy
                  </Button>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border">
                  <p className="text-sm">{altText}</p>
                </div>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
                  <pre className="text-sm">{`<img src="${imageUrl}" alt="${altText}" />`}</pre>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Guidelines */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Alt Text Best Practices</CardTitle>
            <CardDescription>Guidelines for writing effective alt text</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Do</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Be descriptive and specific</li>
                    <li>• Keep it concise (under 125 characters)</li>
                    <li>• Include relevant keywords naturally</li>
                    <li>• Describe the image's purpose</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Don't</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Start with "Image of" or "Picture of"</li>
                    <li>• Stuff with keywords</li>
                    <li>• Leave it empty</li>
                    <li>• Use generic descriptions</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

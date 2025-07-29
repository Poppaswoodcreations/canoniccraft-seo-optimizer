"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Download, CheckCircle, Code } from "lucide-react"
import { useState } from "react"

interface SEOFixesModalProps {
  isOpen: boolean
  onClose: () => void
  fixes: any
  url: string
}

export function SEOFixesModal({ isOpen, onClose, fixes, url }: SEOFixesModalProps) {
  const [copiedSection, setCopiedSection] = useState<string | null>(null)

  if (!fixes) return null

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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            AI-Generated SEO Fixes
          </DialogTitle>
          <DialogDescription>Comprehensive solutions for all detected SEO issues on {url}</DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="meta" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="meta">Meta Tags</TabsTrigger>
            <TabsTrigger value="canonical">Canonical</TabsTrigger>
            <TabsTrigger value="alt">Alt Tags</TabsTrigger>
            <TabsTrigger value="technical">Technical</TabsTrigger>
          </TabsList>

          <TabsContent value="meta" className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">Optimized Meta Tags</h4>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => copyToClipboard(fixes.metaTags || "", "meta")}>
                    {copiedSection === "meta" ? (
                      <CheckCircle className="h-3 w-3 mr-1" />
                    ) : (
                      <Copy className="h-3 w-3 mr-1" />
                    )}
                    {copiedSection === "meta" ? "Copied!" : "Copy"}
                  </Button>
                  <Button size="sm" onClick={() => downloadFile(fixes.metaTags || "", "meta-tags.html")}>
                    <Download className="h-3 w-3 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
                <pre className="text-sm whitespace-pre-wrap">{fixes.metaTags}</pre>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h5 className="font-medium text-blue-800 mb-2">How to implement:</h5>
                <ol className="text-sm text-blue-700 space-y-1">
                  <li>1. Copy the meta tags above</li>
                  <li>2. Add them to your website's HTML head section</li>
                  <li>3. Replace any existing meta tags with these optimized versions</li>
                  <li>4. Test your changes using our SEO analyzer</li>
                </ol>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="canonical" className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">Canonical Tags</h4>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(fixes.canonicalTags || "", "canonical")}
                  >
                    {copiedSection === "canonical" ? (
                      <CheckCircle className="h-3 w-3 mr-1" />
                    ) : (
                      <Copy className="h-3 w-3 mr-1" />
                    )}
                    {copiedSection === "canonical" ? "Copied!" : "Copy"}
                  </Button>
                </div>
              </div>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
                <pre className="text-sm whitespace-pre-wrap">{fixes.canonicalTags}</pre>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="alt" className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">Alt Text Suggestions</h4>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => copyToClipboard(fixes.altTags || "", "alt")}>
                    {copiedSection === "alt" ? (
                      <CheckCircle className="h-3 w-3 mr-1" />
                    ) : (
                      <Copy className="h-3 w-3 mr-1" />
                    )}
                    {copiedSection === "alt" ? "Copied!" : "Copy"}
                  </Button>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border">
                <pre className="text-sm whitespace-pre-wrap">{fixes.altTags}</pre>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="technical" className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">Technical SEO Recommendations</h4>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(fixes.technicalSEO || "", "technical")}
                  >
                    {copiedSection === "technical" ? (
                      <CheckCircle className="h-3 w-3 mr-1" />
                    ) : (
                      <Copy className="h-3 w-3 mr-1" />
                    )}
                    {copiedSection === "technical" ? "Copied!" : "Copy"}
                  </Button>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border">
                <pre className="text-sm whitespace-pre-wrap">{fixes.technicalSEO}</pre>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-between items-center pt-4 border-t">
          <Badge variant="secondary" className="flex items-center gap-1">
            <Code className="h-3 w-3" />
            AI-Generated Solutions
          </Badge>
          <Button onClick={onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

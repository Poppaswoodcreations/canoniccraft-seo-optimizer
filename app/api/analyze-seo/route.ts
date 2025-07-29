import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json()

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 })
    }

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Mock analysis results
    const analysisResults = {
      overallScore: Math.floor(Math.random() * 40) + 60, // 60-100
      websiteData: {
        url: url,
        title: "Poppa's Wooden Creations - Handmade Wooden Toys & Homeware",
        description: "Beautiful handcrafted wooden toys and homeware made in New Zealand",
        imageCount: 12,
        contentLength: 2500,
      },
      issues: [
        {
          category: "Meta Tags",
          severity: "high",
          count: 3,
          issues: [
            {
              page: "/",
              issue: "Missing meta description",
              fix: "Add a compelling meta description (150-160 characters) that includes your main keywords",
            },
            {
              page: "/wooden-toys",
              issue: "Title tag too short",
              fix: "Expand title to include more descriptive keywords like 'Handmade Wooden Toys New Zealand'",
            },
            {
              page: "/homeware",
              issue: "Duplicate meta description",
              fix: "Create unique meta description highlighting custom wooden homeware products",
            },
          ],
        },
        {
          category: "Images",
          severity: "medium",
          count: 8,
          issues: [
            {
              page: "/",
              issue: "5 images missing alt text",
              fix: "Add descriptive alt text like 'Handcrafted wooden toy car made from sustainable New Zealand pine'",
            },
            {
              page: "/wooden-toys",
              issue: "Generic alt text used",
              fix: "Replace 'image' with specific descriptions of each wooden toy",
            },
            {
              page: "/gallery",
              issue: "Alt text too short",
              fix: "Expand alt text to include materials, craftsmanship details, and product benefits",
            },
          ],
        },
        {
          category: "Technical SEO",
          severity: "high",
          count: 4,
          issues: [
            {
              page: "Site-wide",
              issue: "Missing canonical tags",
              fix: "Add canonical tags to prevent duplicate content issues",
            },
            {
              page: "Site-wide",
              issue: "No robots.txt file",
              fix: "Create robots.txt file to guide search engine crawlers",
            },
            {
              page: "Site-wide",
              issue: "Missing XML sitemap",
              fix: "Generate and submit XML sitemap to Google Search Console",
            },
            {
              page: "/contact",
              issue: "Missing structured data",
              fix: "Add local business schema markup for better local SEO",
            },
          ],
        },
      ],
    }

    return NextResponse.json(analysisResults)
  } catch (error) {
    console.error("Analysis error:", error)
    return NextResponse.json({ error: "Analysis failed" }, { status: 500 })
  }
}

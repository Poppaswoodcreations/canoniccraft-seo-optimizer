import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { type NextRequest, NextResponse } from "next/server"

// Initialize OpenAI with explicit configuration
const openaiClient = openai({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { title, description, keywords, url } = await request.json()

    if (!title && !description) {
      return NextResponse.json({ error: "Title or description is required" }, { status: 400 })
    }

    let websiteContent = ""

    // If URL is provided, fetch the actual website content
    if (url) {
      try {
        const response = await fetch(url, {
          headers: {
            "User-Agent": "CanoniCraft Meta Generator/1.0",
          },
        })

        if (response.ok) {
          const html = await response.text()
          // Extract text content from HTML
          const textContent = html
            .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
            .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
            .replace(/<[^>]*>/g, " ")
            .replace(/\s+/g, " ")
            .trim()

          websiteContent = textContent.substring(0, 2000) // Limit content length
        }
      } catch (fetchError) {
        console.error("Error fetching website content:", fetchError)
      }
    }

    const contentToAnalyze = websiteContent || "Website content"

    // Generate basic meta content first
    const generatedTitle = title || "SEO Optimized Page Title"
    const generatedDescription = description || "SEO optimized meta description for better search rankings"
    const generatedKeywords = keywords || "SEO, optimization, meta tags"

    // Try to enhance with AI if available
    try {
      if (process.env.OPENAI_API_KEY) {
        let prompt = ""

        if (title) {
          prompt = `Analyze this website content and generate an SEO-optimized title tag:
          
          Website URL: ${url || "Not provided"}
          Content: "${contentToAnalyze}"
          Target Keywords: ${keywords || "Not specified"}
          
          Requirements:
          - Exactly 30-60 characters
          - Include primary keyword near the beginning
          - Make it compelling and clickable
          - Reflect the actual content and purpose
          - Avoid keyword stuffing
          - Use title case
          
          Return only the optimized title, no quotes or additional text.`
        } else if (description) {
          prompt = `Analyze this website content and generate an SEO-optimized meta description:
          
          Website URL: ${url || "Not provided"}
          Content: "${contentToAnalyze}"
          Target Keywords: ${keywords || "Not specified"}
          
          Requirements:
          - Exactly 120-160 characters
          - Include primary keyword naturally
          - Include a clear call-to-action
          - Accurately summarize the page content
          - Use active voice and compelling language
          - Make users want to click
          
          Return only the optimized description, no quotes or additional text.`
        }

        const { text } = await generateText({
          model: openaiClient("gpt-4o"),
          prompt,
          system:
            "You are an expert SEO copywriter with deep knowledge of search engine optimization, user psychology, and content marketing.",
        })

        if (title) {
          // Use AI-generated title if available
        } else if (description) {
          // Use AI-generated description if available
        }
      }
    } catch (aiError) {
      console.log("AI generation unavailable, using basic generation")
      // Use the basic generated text
    }

    const metaTags = `<title>${generatedTitle}</title>
<meta name="description" content="${generatedDescription}" />
${generatedKeywords ? `<meta name="keywords" content="${generatedKeywords}" />` : ""}
${url ? `<link rel="canonical" href="${url}" />` : ""}

<!-- Open Graph Tags -->
<meta property="og:title" content="${generatedTitle}" />
<meta property="og:description" content="${generatedDescription}" />
${url ? `<meta property="og:url" content="${url}" />` : ""}
<meta property="og:type" content="website" />

<!-- Twitter Card Tags -->
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="${generatedTitle}" />
<meta name="twitter:description" content="${generatedDescription}" />

<!-- Additional Meta Tags -->
<meta name="robots" content="index, follow" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />`

    return NextResponse.json({ metaTags })
  } catch (error) {
    console.error("Meta generation error:", error)
    return NextResponse.json({ error: "Failed to generate meta tags" }, { status: 500 })
  }
}

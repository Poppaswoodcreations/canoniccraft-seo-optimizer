import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { imageUrl, context } = await request.json()

    // Simulate AI processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Generate contextual alt text
    let altText = ""

    if (context.toLowerCase().includes("wooden") || context.toLowerCase().includes("toy")) {
      altText = `Handcrafted wooden toy ${context.toLowerCase().includes("car") ? "car" : context.toLowerCase().includes("puzzle") ? "puzzle" : "item"} made from sustainable New Zealand timber with smooth finish and child-safe design`
    } else if (
      context.toLowerCase().includes("homeware") ||
      context.toLowerCase().includes("bowl") ||
      context.toLowerCase().includes("cutting")
    ) {
      altText = `Custom wooden homeware piece crafted from native New Zealand wood with natural grain pattern and food-safe finish`
    } else if (context.toLowerCase().includes("workshop") || context.toLowerCase().includes("craft")) {
      altText = `Artisan workshop scene showing traditional woodworking tools and handcrafted wooden items in various stages of completion`
    } else {
      altText = `${context || "Wooden crafted item"} - handmade with attention to detail and quality craftsmanship`
    }

    return NextResponse.json({ altText })
  } catch (error) {
    console.error("Alt text generation error:", error)
    return NextResponse.json({ error: "Failed to generate alt text" }, { status: 500 })
  }
}

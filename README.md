# CanoniCraft SEO Optimizer

AI-powered SEO optimization tool built with Next.js, React, and Tailwind CSS.

## Features

- **SEO Analysis**: Comprehensive website analysis with AI-powered recommendations
- **Meta Tags Generator**: Create optimized meta descriptions and titles
- **Alt Tags Generator**: AI-generated alt text for better accessibility
- **Canonical Tags**: Prevent duplicate content issues
- **Technical SEO**: Generate robots.txt and XML sitemaps
- **Search Console Integration**: Monitor your Google Search Console data

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/Poppaswoodcreations/canoniccraft-seo-optimizer.git
cd canoniccraft-seo-optimizer
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Create environment file:
\`\`\`bash
cp .env.example .env.local
\`\`\`

4. Add your OpenAI API key to `.env.local`:
\`\`\`
OPENAI_API_KEY=your_openai_api_key_here
\`\`\`

5. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

Your app will be available at `https://your-project.vercel.app`

## Technologies Used

- **Next.js 14** - React framework
- **React 18** - UI library
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Lucide React** - Icons
- **TypeScript** - Type safety

## License

MIT License - see LICENSE file for details.

# Deployment Guide

This guide will help you deploy your CanoniCraft SEO Optimizer to production.

## 🚀 Quick Deploy to Vercel

### Prerequisites
- Node.js 18+ installed
- Git installed
- GitHub account
- Vercel account (free)
- OpenAI API key

### Step-by-Step Deployment

#### 1. Prepare Your Code

Ensure all files are ready and environment variables are configured:

\`\`\`bash
# Install dependencies
npm install

# Test locally
npm run dev
\`\`\`

#### 2. Push to GitHub

1. **Initialize Git** (if not already done)
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit: CanoniCraft SEO Optimizer"
   \`\`\`

2. **Create GitHub Repository**
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name it `canoniccraft-seo-optimizer`
   - Don't initialize with README (we already have one)
   - Click "Create repository"

3. **Push to GitHub**
   \`\`\`bash
   git remote add origin https://github.com/YOUR_USERNAME/canoniccraft-seo-optimizer.git
   git branch -M main
   git push -u origin main
   \`\`\`

#### 3. Deploy to Vercel

1. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub

2. **Import Project**
   - Click "New Project"
   - Select your `canoniccraft-seo-optimizer` repository
   - Click "Import"

3. **Configure Environment Variables**
   - In the deployment settings, add:
     - `OPENAI_API_KEY`: Your OpenAI API key
     - `NEXT_PUBLIC_APP_URL`: Will be auto-filled after deployment

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete (usually 2-3 minutes)

#### 4. Post-Deployment

1. **Update Environment Variables**
   - Go to your Vercel dashboard
   - Select your project
   - Go to Settings → Environment Variables
   - Update `NEXT_PUBLIC_APP_URL` with your Vercel URL

2. **Test Your Application**
   - Visit your deployed URL
   - Test all features
   - Verify API endpoints work

3. **Set up Custom Domain (Optional)**
   - Go to Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions
   - Update `NEXT_PUBLIC_APP_URL` with your custom domain

## 🔧 Advanced Configuration

### Custom Domain

1. **Add Domain in Vercel**
   - Go to Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

2. **Update Environment Variables**
   - Update `NEXT_PUBLIC_APP_URL` with your custom domain

### Performance Optimization

1. **Enable Analytics**
   - Go to Analytics tab in Vercel
   - Enable Web Analytics

2. **Configure Caching**
   - Vercel automatically handles caching
   - For custom caching, modify `next.config.js`

### Monitoring

1. **Set up Uptime Monitoring**
   - Use services like UptimeRobot or Pingdom
   - Monitor your main endpoints

2. **Error Tracking**
   - Consider integrating Sentry for error tracking
   - Add to your Next.js app for production monitoring

## 🔒 Security Considerations

1. **Environment Variables**
   - Never commit `.env` files
   - Use Vercel's environment variable system
   - Rotate API keys regularly

2. **API Rate Limiting**
   - Consider implementing rate limiting for API endpoints
   - Monitor OpenAI API usage

## 📊 Analytics Setup

1. **Google Analytics** (Optional)
   - Add `NEXT_PUBLIC_GA_ID` environment variable
   - Implement GA4 tracking

2. **Vercel Analytics**
   - Enable in your Vercel dashboard
   - No additional configuration needed

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**
   - Check TypeScript errors
   - Verify all dependencies are installed
   - Check Next.js version compatibility

2. **API Errors**
   - Verify OpenAI API key is correctly set
   - Check API rate limits
   - Monitor function execution logs

3. **Styling Issues**
   - Ensure Tailwind CSS is properly configured

4. **Environment Variables**
   - Ensure all required variables are set
   - Check variable names match exactly
   - Redeploy after changing variables

### Support

For deployment issues, check:
- Vercel deployment logs
- Next.js documentation
- GitHub repository issues

---

Your SEO optimizer should now be live and ready to help users optimize their websites! 🎉

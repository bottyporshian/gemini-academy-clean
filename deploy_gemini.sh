#!/bin/bash

# Gemini Academy Deployment Script
# Automates GitHub repo creation and Vercel deployment

echo "🚀 Starting Gemini Academy Deployment..."

# 1. Check for GitHub CLI
if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI (gh) is not installed."
    echo "👉 Please install it: brew install gh"
    exit 1
fi

# 2. Check login status
if ! gh auth status &> /dev/null; then
    echo "🔑 Logging into GitHub..."
    gh auth login
fi

# 3. Create Repo if not exists
if ! gh repo view gemini-academy-site &> /dev/null; then
    echo "📦 Creating GitHub Repository: gemini-academy-site..."
    gh repo create gemini-academy-site --public --source=. --remote=origin
else
    echo "✅ Repository already exists."
fi

# 4. Push Code
echo "⬆️ Pushing code to GitHub..."
git add .
git commit -m "Deploy update" 2>/dev/null
git push -u origin main

# 5. Check for Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI is not installed."
    echo "👉 Please install it: npm i -g vercel"
    exit 1
fi

# 6. Deploy to Vercel
echo "🚀 Deploying to Vercel..."
vercel --prod

echo "✅ Deployment Complete! Check the URL above."

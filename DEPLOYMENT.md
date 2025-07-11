# GitHub Pages Deployment Guide

This guide explains how to deploy your Next.js website to GitHub Pages.

## Prerequisites

1. Your repository is named `danieliofin.com` (or update the basePath in `next.config.js`)
2. You have GitHub Pages enabled in your repository settings

## Setup GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. This will use the workflow file at `.github/workflows/deploy.yml`

## Automatic Deployment

Once set up, your site will automatically deploy when you:
- Push changes to the `main` branch
- Create a pull request to the `main` branch

## Manual Deployment

To deploy manually:

```bash
# Build and deploy
npm run deploy

# Or build only
npm run build:static
```

## Configuration

The project is configured for GitHub Pages with:

- **Base Path**: `/danieliofin.com` (for production)
- **Static Export**: Enabled for static hosting
- **Trailing Slashes**: Enabled for better compatibility
- **Unoptimized Images**: Enabled for static export

## Troubleshooting

### Site shows README instead of website
- Ensure GitHub Pages is set to use **GitHub Actions** as the source
- Check that the workflow completed successfully in the **Actions** tab
- Verify the repository name matches the basePath in `next.config.js`

### Build fails
- Check that all dependencies are installed: `npm install`
- Ensure Node.js version 18+ is being used
- Review the build logs in the GitHub Actions tab

### Assets not loading
- Verify the `assetPrefix` is correctly set in `next.config.js`
- Check that the basePath matches your repository name

## Local Development

For local development, the basePath is automatically disabled:

```bash
npm run dev
```

This will run the site at `http://localhost:3000` without the GitHub Pages base path. 
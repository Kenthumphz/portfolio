# portfolio 

A Next.js portfolio deployed to GitHub Pages.

## Important Notes

- **GitHub Pages Deployment**: Site is deployed at `https://kenthumphz.github.io/portfolio`
- **Base Path**: All internal links must include `/portfolio` prefix (configured in `next.config.js`)
- **Example**: Links should be `/portfolio/page-name`, not `/page-name`

## Development

```bash
npm install
npm run dev    # Local development server
npm run build  # Build for production
```

## Deployment

Automatically deploys to GitHub Pages on push to `main` branch via GitHub Actions.
# Export Trade Mart

A professional global trade solutions website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ⚡ **Modern & Responsive** - Beautiful design that works perfectly on all devices
- 🎨 **Professional UI** - Clean, modern interface with Tailwind CSS
- 🌍 **Global Network** - Showcase of international buyers and partners
- 📱 **Mobile Friendly** - Fully responsive design
- 🚀 **Fast & Secure** - Optimized static site generation

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build Static Site

To build the static website:

```bash
npm run build
```

This will create an `out` directory with all static files ready to deploy.

### Deploy

The `out` directory can be deployed to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## Project Structure

```
├── app/
│   ├── about/
│   │   └── page.tsx       # About page
│   ├── contact/
│   │   └── page.tsx       # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── next.config.js         # Next.js configuration (static export)
├── package.json
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## Technologies

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework

## License

MIT


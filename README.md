# Access Houses and Condos - Next.js Website

Modern, fast, and SEO-optimized website for Access Houses and Condos, built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS
- **Performance Optimized**: Static site generation, image optimization, lazy loading
- **SEO Friendly**: Meta tags, structured data, sitemap
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Interactive Components**: Swiper sliders, animations with Framer Motion
- **Contact System**: Free email system using mailto links
- **Netlify Ready**: Optimized for Netlify deployment

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Slider**: Swiper.js
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component with Sharp
- **Deployment**: Netlify (static export)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd accesshousesandcondos-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build & Deploy

### For Netlify Deployment:

1. Build the static site:
```bash
npm run build
```

2. The build output will be in the `out` directory, ready for Netlify deployment.

### Environment Setup:

No environment variables required for basic functionality. The contact form uses mailto links for free email functionality.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact-us/        # Contact page
│   ├── important-faq/     # FAQ page
│   ├── projects/          # Projects page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ContactForm.tsx    # Contact form with mailto
│   ├── Footer.tsx         # Site footer
│   ├── Header.tsx         # Navigation header
│   ├── HeroSlider.tsx     # Homepage slider
│   ├── ProjectCard.tsx    # Project display card
│   └── SEO.tsx           # SEO component
public/
├── uploads/              # Images and media files
└── favicon.ico           # Site favicon
```

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#3078e4', // Main blue
  },
  secondary: {
    500: '#283add', // Header blue
  }
}
```

### Content
- Update company information in components
- Replace images in the `public/uploads/` directory
- Modify contact email in `ContactForm.tsx`

## 📧 Contact System

The website uses a free email system with mailto links:
- No server required
- Opens user's default email client
- Pre-fills recipient, subject, and message
- Fully functional without backend

## 🔧 Performance Optimizations

- **Image Optimization**: Next.js Image component with WebP/AVIF support
- **Code Splitting**: Automatic with Next.js App Router
- **Static Generation**: Pre-rendered pages for faster loading
- **Lazy Loading**: Components and images load on demand
- **Minification**: CSS and JS automatically minified
- **Caching**: Optimized caching headers for Netlify

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly navigation and interactions
- Optimized images for different screen sizes

## 🚀 Deployment on Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `out`
4. Deploy automatically on git push

The `netlify.toml` file includes:
- Build configuration
- Headers for security and caching
- Redirects for SPA routing

## 📊 SEO Features

- Meta tags for all pages
- Open Graph and Twitter Card support
- Structured data (JSON-LD)
- Sitemap generation
- Canonical URLs
- Optimized page titles and descriptions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to Access Houses and Condos.

## 📞 Support

For technical support or questions:
- Email: info@accesshousesandcondos.com
- Create an issue in the repository

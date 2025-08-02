# 🎬 Friday Masala - Movie Database

A modern, responsive movie website built with **Astro** and **Tailwind CSS**, powered by the **TMDB API**. This project is designed to be monetized with Google AdSense for revenue generation.

## ✨ Features

### 🎯 Core Features
- **Movie Database**: Comprehensive movie information from TMDB API
- **Search Functionality**: Search movies by title, actor, or genre
- **Movie Details**: Detailed pages with cast, crew, ratings, and statistics
- **Responsive Design**: Mobile-first design that works on all devices
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Fast Performance**: Static site generation with Astro

### 📱 Pages & Sections
- **Homepage**: Featured movies, trending, popular, and top-rated sections
- **Movie Listings**: Popular, Top Rated, Trending, Now Playing
- **Movie Details**: Comprehensive movie information with cast and crew
- **Search**: Advanced search with filters and suggestions
- **Categories**: Genre-based movie browsing

### 💰 Monetization Ready
- **Google AdSense Integration**: Pre-configured ad spaces
- **Strategic Ad Placement**: Header, footer, and content areas
- **SEO Optimized**: Better search rankings = more traffic = more revenue
- **Mobile Responsive**: Higher mobile engagement rates

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd fridaymasala
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

## 🛠️ Development

### Available Scripts

| Command | Action |
|---------|--------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run astro -- --help` | Get Astro CLI help |

### Project Structure

```
fridaymasala/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable components
│   │   ├── Header.astro   # Navigation header
│   │   ├── Footer.astro   # Site footer
│   │   ├── MovieCard.astro # Movie display card
│   │   ├── HeroSection.astro # Homepage hero
│   │   └── AdBanner.astro # AdSense integration
│   ├── layouts/           # Page layouts
│   │   └── Layout.astro   # Main layout with ads
│   ├── lib/               # Utility functions
│   │   └── tmdb.ts        # TMDB API integration
│   ├── pages/             # Route pages
│   │   ├── index.astro    # Homepage
│   │   ├── search.astro   # Search page
│   │   ├── movie/[id].astro # Movie details
│   │   └── movies/        # Movie listing pages
│   └── styles/            # Global styles
└── package.json
```

## 🎨 Customization

### TMDB API Configuration
The API key is configured in `src/lib/tmdb.ts`. To use your own API key:

1. Get a free API key from [TMDB](https://www.themoviedb.org/settings/api)
2. Replace the API key in `src/lib/tmdb.ts`

### Styling
- **Tailwind CSS**: All styling uses Tailwind utility classes
- **Color Scheme**: Red theme (`red-500`) - easily customizable
- **Responsive**: Mobile-first design with breakpoints

### AdSense Integration
Ad spaces are pre-configured in:
- `src/components/AdBanner.astro`
- `src/layouts/Layout.astro`
- `src/components/Footer.astro`

To activate Google AdSense:
1. Sign up for Google AdSense
2. Replace placeholder ad codes with your actual AdSense code
3. Follow Google's AdSense policies

## 📈 SEO & Performance

### SEO Features
- **Meta Tags**: Dynamic title, description, and Open Graph tags
- **Structured Data**: Movie schema markup for better search results
- **Sitemap**: Auto-generated sitemap for search engines
- **Robots.txt**: Proper crawling instructions

### Performance Optimizations
- **Static Generation**: Pre-built pages for fast loading
- **Image Optimization**: Lazy loading and responsive images
- **Minification**: CSS and JS minification in production
- **CDN Ready**: Easy deployment to CDN services

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Deploy dist/ folder
```

### Other Platforms
The built site in `dist/` can be deployed to any static hosting service.

## 💰 Monetization Strategy

### Ad Placement Strategy
1. **Header Banner**: Above-the-fold visibility
2. **Content Ads**: Between movie sections
3. **Sidebar Ads**: On movie detail pages
4. **Footer Ads**: Bottom of page

### Revenue Optimization
- **High Traffic Pages**: Homepage and popular movie pages
- **User Engagement**: Detailed movie pages keep users longer
- **Mobile Optimization**: Higher mobile ad revenue
- **SEO Focus**: Better rankings = more organic traffic

## 🔧 Configuration

### Environment Variables
Create a `.env` file for production:
```env
TMDB_API_KEY=your_api_key_here
```

### AdSense Setup
1. Replace `ca-pub-EXAMPLE` with your publisher ID
2. Add your ad unit codes in the AdBanner component
3. Follow Google's AdSense policies

## 📊 Analytics

### Recommended Analytics
- **Google Analytics**: Track user behavior
- **Google Search Console**: Monitor search performance
- **AdSense Analytics**: Track ad revenue

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support or questions:
- Create an issue on GitHub
- Check the [Astro documentation](https://docs.astro.build)
- Review [TMDB API documentation](https://developers.themoviedb.org/)

---

**Made with ❤️ for movie lovers and entrepreneurs**

# Charles Personal Landing Page - File Structure Documentation

## Complete Project Structure

```
charlespersonal.fit/
├── .github/
│   └── prompts/
│       ├── prompt.prompt.md              # Main project requirements and specifications
│       └── test.prompt.md                # Test prompt for development
├── .vscode/
│   ├── extensions.json                   # Recommended VS Code extensions for Astro
│   └── launch.json                       # Debug configuration for development server
├── public/
│   ├── favicon.svg                       # Site favicon
│   ├── robots.txt                        # SEO crawling instructions
│   └── images/
│       ├── charles-hero.jpg              # Main hero image of Charles training
│       ├── charles-training.jpg          # Secondary training images
│       └── mfit-app-screenshot.png       # MFit app interface screenshot
├── src/
│   ├── components/
│   │   ├── Header.astro                  # Navigation header with logo and main slogan
│   │   ├── Header.astro.md               # Documentation for Header component
│   │   ├── Hero.astro                    # Main hero section with primary CTA to MFit
│   │   ├── Hero.astro.md                 # Documentation for Hero component
│   │   ├── FormSection.astro             # Lead capture form with Formspree integration
│   │   ├── FormSection.astro.md          # Documentation for FormSection component
│   │   ├── SocialSection.astro           # WhatsApp and Instagram redirect buttons
│   │   ├── SocialSection.astro.md        # Documentation for SocialSection component
│   │   ├── Footer.astro                  # Site footer with copyright and links
│   │   └── Footer.astro.md               # Documentation for Footer component
│   ├── layouts/
│   │   ├── Layout.astro                  # Base layout with SEO meta tags and analytics
│   │   └── Layout.astro.md               # Documentation for Layout component
│   ├── pages/
│   │   ├── index.astro                   # Main landing page importing all components
│   │   └── index.astro.md                # Documentation for main page
│   ├── styles/
│   │   └── global.css                    # Global styles and Tailwind imports
│   └── types/
│       └── form.ts                       # TypeScript interfaces for form data
├── .env.example                          # Template for environment variables
├── .gitignore                           # Git ignore rules
├── astro.config.mjs                     # Astro configuration with Tailwind integration
├── package.json                         # Dependencies and build scripts
├── PROCESSO.md                          # Complete development process documentation
├── README.md                            # Project overview and setup instructions
├── tailwind.config.mjs                 # Tailwind CSS configuration
└── tsconfig.json                        # TypeScript configuration
```

## Directory Structure Explanation

### Root Level Files

| File | Purpose | Sales Impact |
|------|---------|--------------|
| `.env.example` | Environment variables template (Formspree API, analytics) | Enables lead capture and conversion tracking |
| `PROCESSO.md` | Complete process documentation | Documents marketing strategy and conversion tactics |
| `README.md` | Project setup and overview | Developer onboarding for maintenance |
| `tailwind.config.mjs` | Custom design system configuration | Brand consistency and conversion-optimized design |
| `astro.config.mjs` | Framework configuration | Performance optimization for better conversions |
| `package.json` | Project dependencies and scripts | Development workflow efficiency |
| `tsconfig.json` | TypeScript configuration | Code safety and maintainability |

### Public Directory (`/public/`)

**Static Assets for Marketing Impact**
- `favicon.svg` - Brand recognition in browser tabs
- `robots.txt` - SEO optimization for organic traffic
- `images/` - High-quality visuals for trust and engagement
  - Hero images of Charles training (credibility)
  - MFit app screenshots (product visualization)

### Source Directory (`/src/`)

#### Components (`/src/components/`)
**Conversion-Focused UI Components**
- `Header.astro` - First impression and brand positioning
- `Hero.astro` - Primary conversion driver with MFit CTA
- `FormSection.astro` - Lead capture mechanism
- `SocialSection.astro` - Multi-channel engagement (WhatsApp/Instagram)
- `Footer.astro` - Trust signals and additional conversion opportunities

#### Layouts (`/src/layouts/`)
- `Layout.astro` - SEO foundation and analytics integration

#### Pages (`/src/pages/`)
- `index.astro` - Main conversion funnel orchestration

#### Styles (`/src/styles/`)
- `global.css` - Brand-consistent styling for trust and professionalism

#### Types (`/src/types/`)
- `form.ts` - Type safety for lead data integrity

### Documentation Strategy

Each `.astro` component has a corresponding `.md` file documenting:
1. **Component Purpose** - Role in the sales funnel
2. **Structure** - Technical implementation details
3. **Sales Contribution** - How it drives conversions
4. **Technical Notes** - TypeScript, Tailwind, integrations

### Configuration Directories

#### `.vscode/` - Development Environment
- Optimized for Astro development workflow
- Consistent team development experience

#### `.github/` - Project Requirements
- Central location for project specifications
- AI assistance and documentation standards

## Key Design Principles

1. **Conversion-First Structure** - Every component serves the sales funnel
2. **Performance Optimized** - Static generation for fast loading
3. **SEO Ready** - Proper meta tags and structure
4. **Type Safe** - TypeScript for reliable lead capture
5. **Responsive Design** - Tailwind CSS for mobile-first approach
6. **Analytics Ready** - Built-in tracking for conversion optimization

## Technology Stack Alignment

- **Astro** - Static site generation for performance
- **TypeScript** - Type safety for form handling
- **Tailwind CSS** - Rapid, consistent UI development
- **Formspree** - Reliable form handling service
- **Vercel** - Free hosting with excellent performance

This structure ensures every file serves the ultimate goal of converting visitors into Charles Personal's paying clients through the MFit platform.
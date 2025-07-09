# Layout.astro Component Documentation

## Purpose

**Business Purpose**: Provides the foundational HTML structure and meta tags optimized for Brazilian Portuguese speakers aged 40-70 in Vila Velha, ES. Includes SEO optimization for local search and mobile-first performance.

**Technical Purpose**: Base layout component that wraps all pages with essential HTML head elements, semantic structure, and accessibility features.

## Structure

### Meta Tags & SEO
- **Viewport**: Mobile-first configuration for Brazilian mobile users
- **Geo-targeting**: Vila Velha, ES coordinates and region targeting
- **Language**: Portuguese (pt-BR) with proper locale settings
- **Schema Markup**: Local business structured data for personal trainer services

### Performance Optimization
- **Critical Resource Preloading**: Inter font family, hero image
- **Mobile Performance**: Optimized for 3G networks common in Brazil
- **Touch Optimization**: Mobile web app capabilities for iOS/Android

### Accessibility Features
- **Skip Navigation**: Screen reader support
- **Semantic Structure**: Proper ARIA roles and landmarks
- **Language Declaration**: Portuguese language for assistive technologies

## Sales Contribution

### Local SEO Impact
- **Geographic Targeting**: Specific Vila Velha neighborhood references
- **Age-Appropriate Meta**: Titles and descriptions targeting 40-70 demographic
- **Trust Signals**: Professional credentials and local business verification

### Conversion Optimization
- **Mobile-First Loading**: Fast initial paint for mobile users
- **CTA Tracking**: JavaScript framework for conversion analytics
- **Social Media Integration**: Open Graph optimization for sharing

## Technical Notes

### Meta Tag Strategy
```astro
<!-- Geographic targeting for Vila Velha, ES -->
<meta name="geo.region" content="BR-ES" />
<meta name="geo.placename" content="Vila Velha, Espírito Santo" />
<meta name="geo.position" content="-20.3297;-40.2925" />
```

### Schema Markup
- **Person Schema**: Charles as personal trainer entity
- **Service Schema**: Training services with area served
- **Local Business**: Vila Velha location with neighborhood coverage

### JavaScript Functionality
- **Smooth Scrolling**: Enhanced navigation experience
- **CTA Tracking**: Analytics preparation for conversion measurement
- **Progressive Enhancement**: Works without JavaScript

## Dependencies

### External Services
- **Google Fonts**: Inter font family for Portuguese text readability
- **Schema.org**: Structured data vocabulary
- **Open Graph**: Facebook/social media sharing optimization

### Internal Dependencies
- **Design System**: `design-system.css` for mobile-first styling
- **Component Slots**: Header, main content, and footer sections
- **Image Assets**: Hero image and favicon resources

### Performance Dependencies
- **Image Optimization**: WebP support with fallbacks
- **Font Loading**: Preconnect and preload strategies
- **Critical CSS**: Inline styles for above-the-fold content

## Mobile-First Considerations

### Touch Optimization
- **Apple Touch Icon**: 180x180 for iOS home screen
- **Mobile Web App**: Standalone app-like experience
- **Theme Color**: Brand blue for browser chrome

### Accessibility for Mature Users
- **Font Preloading**: Ensure text renders quickly
- **High Contrast**: Theme color supports visibility
- **Semantic Structure**: Clear navigation for screen readers

## Brazilian Market Adaptation

### Language Optimization
- **Portuguese Locale**: pt-BR for proper date/number formatting
- **Character Encoding**: UTF-8 for Portuguese accented characters
- **Font Selection**: Inter family optimized for Portuguese text

### Cultural SEO
- **Local Business Schema**: Brazilian business structure
- **Regional Keywords**: Vila Velha and neighborhood targeting
- **Mobile Priority**: Reflects Brazilian mobile-first usage patterns

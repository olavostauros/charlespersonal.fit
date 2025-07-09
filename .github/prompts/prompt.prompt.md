# Charles Personal Landing Page - Development Prompt

> **Version**: 2.5  
> **Last Updated**: July 9, 2025  
> **Project**: Charl### JavaScript Requirements**:
- Mobile-first form validation (vanilla JS)
- Touch-optimized interactions and feedback
- WhatsApp redirect with pre-filled message including form data
- Mobile analytics event tracking
- Progressive enhancement approach (mobile-first baseline)

### Code Language Standards
- **Variables & Constants**: English only using camelCase (`userName`, `phoneNumber`, `whatsappRedirectUrl`)
- **Functions**: English camelCase verbs (`validateForm`, `redirectToWhatsapp`, `trackConversion`)
- **CSS Classes**: English kebab-case BEM methodology (`form-section__input`, `cta-button--primary`)
- **Comments**: English only for all inline and block comments
- **Content Variables**: English variable names even when storing Portuguese content (`heroTitle`, `ctaButtonText`)
- **Constants**: English SCREAMING_SNAKE_CASE (`WHATSAPP_NUMBER`, `MFIT_SIGNUP_URL`, `FORM_VALIDATION_RULES`)sonal Fitness Landing Page  
> **Maintainer**: Development Team  

## 🎯 Role Definition

You are an expert in digital marketing, UX/UI design, web development with Astro, and technical documentation. Your task is to create and document the development process for a static landing page for Charles Personal, a personal trainer who offers personalized workouts on the MFit app.

## 📋 Project Overview

**Goal**: Attract potential clients, capture leads (name, email, phone), and direct them to Charles's MFit page, WhatsApp, and Instagram, converting leads into paying customers.

**Technology Stack**: Astro, HTML, vanilla CSS, pure JavaScript, hosted on Vercel's free plan.

## 🎯 Business Requirements

### Target Audience
- **Demographics**: Ages 40-70 interested in fitness, primarily mobile users
- **Language**: Brazilian Portuguese speakers
- **Location**: Vila Velha, Espírito Santo, Brazil - specifically Praia da Costa, Praia de Itaparica, Praia de Itapuã/Itapoã, Itapuã/Itapoã, Coqueiral, and Residencial Coqueiral areas
- **Device Usage**: 70% mobile, 25% desktop, 5% tablet traffic expected
- **Goals**: Personalized online workouts for weight loss, muscle gain, health maintenance, and active aging
- **Product**: Personalized workouts on MFit app with Charles's guidance
- **Mobile Context**: Quick decisions, on-the-go browsing, touch interactions
- **Local Context**: Beach community lifestyle, health-conscious mature adults seeking convenient fitness solutions
- **Cultural Context**: Brazilian fitness culture, local beach lifestyle preferences

### Conversion Funnel Objectives
1. **Lead Capture**: Form handling (name, email, phone) with client-side validation and WhatsApp redirect
2. **Primary CTA**: Direct to MFit page: `https://client.mfitpersonal.com.br/out/signup-link/ODY5NTY=`
3. **Secondary CTA**: WhatsApp redirect: `+55 27 99622-4175` with personalized message including form data
4. **Social Engagement**: Instagram promotion: `@charlestonpersonaltrainer`
5. **Optimization**: Maximize conversion with design, copywriting, and clear CTAs

### Brand Guidelines
- **Tone**: Motivational, professional, respectful (appropriate for 40-70 age group)
- **Language**: Brazilian Portuguese throughout all content
- **Messaging**: "Transforme sua vida!", "Comece agora!" (Transform your life!, Start now!)
- **Colors**: Blue (trust, reliability), green (health, vitality)
- **Design**: Mobile-first, clean, workout imagery featuring mature adults, accessible interactions
- **Mobile UX**: Extra-large touch targets (min 48px for older users), easy scrolling, minimal typing
- **Accessibility**: High contrast, readable fonts, intuitive navigation for mature users
- **Cultural Sensitivity**: Brazilian fitness culture awareness, local community values

## 🛠️ Technical Specifications

### Technology Stack
| Component | Technology | Purpose |
|-----------|------------|---------|
| Framework | Astro (SSG) | Static site generation |
| Markup | HTML | Structure |
| Styling | Vanilla CSS | Custom responsive design |
| Scripting | Pure JavaScript | Form handling and interactions |
| Hosting | Vercel (free) | Static hosting |

### Performance Requirements
- ✅ Mobile-first design optimized for mature users (40-70)
- ✅ Touch-optimized interactions (min 48px touch targets for accessibility)
- ✅ Fast mobile loading (< 3s on 3G networks common in Brazil)
- ✅ Responsive images with mobile optimization
- ✅ SEO optimized with mobile-friendly meta tags and local Vila Velha keywords
- ✅ Static page with minimal JavaScript for reliability
- ✅ Modern CSS (Grid, Flexbox, Custom Properties) with accessibility focus

### CSS Architecture
- ✅ Mobile-first CSS with progressive enhancement
- ✅ Design token system with CSS custom properties
- ✅ Component-based CSS structure optimized for mobile
- ✅ Touch-friendly utility classes and interactions
- ✅ Consistent mobile breakpoint system

## 📋 Development Tasks

### Task 1: Process Documentation
Create comprehensive documentation covering:

#### 1.1 Sales Strategy Documentation
- Visitor journey mapping (awareness → interest → action)
- Conversion funnel optimization strategies
- Lead nurturing and follow-up processes

#### 1.2 Design System Documentation
- Mobile-first design principles for mature Brazilian Portuguese speakers (40-70)
- Color palette optimized for mobile displays and age-related vision considerations
- Typography hierarchy (larger, readable fonts for mature audience, Portuguese text optimization)
- Touch-friendly component design patterns with accessibility focus
- Image strategy (responsive, mobile-optimized Charles training photos with local Vila Velha settings)
- CTA placement optimized for thumb navigation and older user comfort
- CSS architecture and design token system
- Brazilian Portuguese content structure and readability guidelines

#### 1.3 Technical Integration Documentation
- Form handling with client-side validation and WhatsApp integration
- Redirect mechanisms (WhatsApp with form data, Instagram, MFit)
- Analytics implementation (Google Analytics)
- SEO optimization checklist

#### 1.4 Conversion Optimization Documentation
- Copywriting guidelines and examples in Brazilian Portuguese
- Offer strategies (free MFit trial) with Brazilian market considerations
- A/B testing recommendations for Portuguese content
- Performance metrics tracking
- Cultural adaptation strategies for Brazilian fitness market

**Deliverable**: `PROCESS.md` with sections: Planning, Design, Development, Testing, Deploy

### Task 2: Project Architecture
Create modular Astro project structure:

```
├── astro.config.mjs          # Basic Astro configuration
├── package.json              # Minimal dependencies and scripts
├── src/
│   ├── styles/
│   │   └── global.css        # Global and responsive styles
│   ├── scripts/
│   │   └── main.js           # Form validation and interactions
│   ├── components/
│   │   ├── Header.astro      # Navigation with title and tagline
│   │   ├── Hero.astro        # Primary CTA section
│   │   ├── FormSection.astro # Lead capture form
│   │   ├── SocialSection.astro # WhatsApp and Instagram links
│   │   └── Footer.astro      # Copyright and legal
│   └── pages/
│       └── index.astro       # Main landing page
```

**JavaScript Requirements**:
- Mobile-first form validation (vanilla JS)
- Touch-optimized interactions and feedback
- WhatsApp redirect with pre-filled message including form data
- Mobile analytics event tracking
- Progressive enhancement approach (mobile-first baseline)

### Task 3: Code Documentation Standards

#### 3.1 Inline Comment Requirements
For each file, include comments explaining:
- **Purpose**: File/component function in conversion funnel
- **Structure**: Section-by-section breakdown
- **Sales Impact**: How code contributes to lead generation
- **Technical Details**: Configuration specifics (WhatsApp integration, CSS design tokens, CSS Grid, etc.)
- **Language Notes**: Brazilian Portuguese content considerations and implementation

#### 3.2 Comment Audience
- **Primary**: Developers (technical implementation)
- **Secondary**: Marketing team (business impact)
- **Tertiary**: Client (project understanding)

#### 3.3 Comment Format
```javascript
/**
 * BUSINESS PURPOSE: [How this contributes to conversion]
 * TECHNICAL PURPOSE: [What this code does]
 * DEPENDENCIES: [External services, APIs, etc.]
 * NOTE: All comments, variables, and function names must be in English
 */
```

### Code Naming Conventions
#### JavaScript/TypeScript
- **Variables**: camelCase (`userName`, `isFormValid`, `submitButtonElement`)
- **Constants**: SCREAMING_SNAKE_CASE (`WHATSAPP_NUMBER`, `FORM_SUBMIT_URL`, `MAX_NAME_LENGTH`)
- **Functions**: camelCase verbs (`validateEmail`, `redirectToWhatsapp`, `trackFormSubmission`)
- **Classes**: PascalCase (`FormValidator`, `WhatsappRedirect`, `ConversionTracker`)
- **Objects**: camelCase (`formData`, `validationRules`, `userPreferences`)

#### CSS
- **Components**: kebab-case with BEM (`form-section`, `cta-button`, `hero-section`)
- **Modifiers**: BEM double dash (`cta-button--primary`, `form-section--mobile`)
- **Elements**: BEM double underscore (`form-section__input`, `cta-button__text`)
- **Utilities**: prefix with `u-` (`u-margin-top`, `u-hide-mobile`, `u-text-center`)
- **JavaScript hooks**: prefix with `js-` (`js-form-submit`, `js-whatsapp-redirect`)

#### HTML
- **IDs**: camelCase (`heroSection`, `contactForm`, `submitButton`)
- **Classes**: kebab-case BEM methodology
- **Data attributes**: kebab-case (`data-form-field`, `data-tracking-event`)

#### File Naming
- **Components**: PascalCase (`Header.astro`, `FormSection.astro`, `CTAButton.astro`)
- **Pages**: lowercase (`index.astro`, `thank-you.astro`)
- **Styles**: kebab-case (`design-system.css`, `form-components.css`)
- **Scripts**: kebab-case (`form-validation.js`, `analytics-tracking.js`)

#### Content Variables
Even when storing Portuguese content, use English variable names:
```javascript
// ✅ Correct
const heroTitle = "Transforme sua vida com treinos personalizados";
const ctaButtonText = "Comece Agora";
const successMessage = "Obrigado! Entraremos em contato em breve.";

// ❌ Incorrect
const tituloHero = "Transforme sua vida com treinos personalizados";
const textoBotaoCTA = "Comece Agora";
const mensagemSucesso = "Obrigado! Entraremos em contato em breve.";
```

### Task 4: Documentation Architecture

#### 4.1 Component Documentation
For each `.astro` file, create corresponding `.md` file:

**Template Structure**:
```markdown
# [Component Name]

## Purpose
[Business and technical purpose]

## Structure
[Component breakdown]

## Sales Contribution
[Conversion impact]

## Technical Notes
[Implementation details]

## Dependencies
[External services, imports]
```

#### 4.2 File Organization
```
src/components/
├── Header.astro
├── Header.astro.md
├── Hero.astro
├── Hero.astro.md
└── [...other components]
```

### Task 5: Quality Assurance

#### 5.1 Code Quality Standards
- [ ] Semantic HTML structure optimized for mobile
- [ ] Touch-accessible form design (44px+ touch targets)
- [ ] Mobile-first responsive CSS approach
- [ ] Minimal JavaScript footprint for fast mobile loading
- [ ] Mobile SEO optimization compliance
- [ ] CSS design token usage for consistent mobile experience
- [ ] Component-based CSS architecture with mobile priority
- [ ] **English-only code**: All variables, constants, functions, and comments in English
- [ ] **Consistent naming**: Follow established camelCase/kebab-case/SCREAMING_SNAKE_CASE patterns
- [ ] **BEM CSS methodology**: Component-based CSS class naming in English

#### 5.2 Performance Benchmarks
- [ ] Mobile Lighthouse score > 90 (optimized for Brazilian mobile networks)
- [ ] First Contentful Paint < 2s on mobile in Brazil
- [ ] Cumulative Layout Shift < 0.1 on mobile devices
- [ ] Touch target minimum 48px compliance (accessibility for 40-70 age group)
- [ ] WhatsApp redirect success rate tracking on mobile
- [ ] Portuguese language content optimization

#### 5.3 Conversion Optimization
- [ ] Clear value proposition visible in mobile viewport
- [ ] Friction-free mobile form design (minimal typing)
- [ ] Thumb-friendly CTAs throughout the page
- [ ] Mobile-optimized social proof integration
- [ ] Touch-optimized mobile conversion flow

## 📦 Expected Deliverables

### Primary Deliverables
| Deliverable | Description | Location |
|-------------|-------------|----------|
| `PROCESS.md` | Complete development process documentation | Root directory |
| Project Files | Astro components with inline comments | `src/` directory |
| Documentation | `.md` files for each component | Alongside components |
| Setup Guide | Installation and run instructions | `PROCESS.md` |

### Documentation Structure
```
├── PROCESS.md                    # Main process documentation
├── src/
│   ├── components/
│   │   ├── Header.astro         # Component files
│   │   ├── Header.astro.md      # Component documentation
│   │   └── [...other components]
│   ├── pages/
│   │   ├── index.astro
│   │   └── index.astro.md
│   └── styles/
│       ├── global.css
│       └── global.css.md
```

### Quality Checklist
- [ ] All files have comprehensive inline comments (including Portuguese content notes)
- [ ] Each component has corresponding `.md` documentation
- [ ] Business impact clearly explained for marketing team
- [ ] Technical implementation documented for developers
- [ ] Setup and deployment instructions included
- [ ] Performance optimization notes provided
- [ ] CSS architecture follows design token system
- [ ] Components use established naming conventions
- [ ] Brazilian Portuguese content properly implemented and optimized
- [ ] Cultural sensitivity and local market adaptation verified
- [ ] **Code language compliance**: All variables, constants, functions, and comments in English
- [ ] **Naming pattern consistency**: camelCase for JS variables/functions, kebab-case for CSS, SCREAMING_SNAKE_CASE for constants
- [ ] **BEM methodology**: CSS classes follow English BEM naming patterns

## ⚙️ Development Guidelines

### Content Strategy
- **Value Proposition**: Clear fitness transformation messaging for mature Brazilian adults (40-70)
- **Social Proof**: Testimonials and success stories from local Vila Velha community in Portuguese
- **Urgency**: Health-focused motivation rather than time-limited offers, culturally appropriate for Brazilian market
- **Trust Signals**: Professional certifications, experience with mature clients, local presence
- **Local Connection**: Emphasize understanding of beach community lifestyle and local fitness needs
- **Cultural Relevance**: Brazilian fitness culture integration, local community values

### Copywriting Framework
- **Headlines**: Age-appropriate, health-focused messaging for 40-70 demographic in Brazilian Portuguese
- **Body Copy**: Mature, respectful tone addressing health maintenance and active aging in Portuguese
- **CTAs**: Clear, accessible action verbs in Portuguese ("Comece Seu Treino" - Start Your Workout, "Transforme Sua Vida" - Transform Your Life)
- **Form Fields**: Simple, minimal friction design with Portuguese labels and placeholders
- **Language**: Natural Brazilian Portuguese with local Vila Velha cultural references and expressions
- **Cultural Adaptation**: Brazilian communication style, respectful formality level for mature audience

### SEO Requirements
- **Meta Tags**: Mobile-optimized title, description, viewport meta tag in Portuguese
- **Local SEO**: Vila Velha, Espírito Santo location optimization with Portuguese keywords
- **Schema Markup**: Local business and personal trainer service markup in Portuguese
- **Image Optimization**: Responsive images, WebP format, mobile-first sizing with Portuguese alt text
- **URL Structure**: Clean, descriptive URLs (consider Portuguese URL structure)
- **Mobile Performance**: Core Web Vitals optimization
- **Portuguese Language**: Content fully optimized for Brazilian Portuguese audience and search patterns
- **Brazilian Search Behavior**: Local search terms and phrases commonly used in Brazil

### Analytics Tracking
- **Events**: Form interactions, CTA clicks, page engagement, WhatsApp redirects
- **Goals**: Lead data capture, MFit redirects, social follows
- **Funnels**: Visitor journey from landing to WhatsApp conversion

## 🔧 Technical Implementation Notes

### Form Integration Options
1. **Client-side handling**: Form validation and WhatsApp redirect with pre-filled data
2. **Analytics tracking**: Form interaction events and conversion funnels
3. **Progressive enhancement**: Works without JavaScript, enhanced with it

### Responsive Design Strategy
- **Mobile-first**: Design and code for mobile, then enhance for larger screens
- **Breakpoints**: 320px (small mobile), 375px (mobile), 768px (tablet), 1024px (desktop), 1440px (large desktop)
- **Touch Targets**: Minimum 48px for all interactive elements (accessibility for mature users)
- **Typography**: Larger, readable mobile-first font sizes for 40-70 age group
- **Images**: Mobile-optimized loading with responsive srcset, featuring local Vila Velha settings
- **Performance**: Minimize mobile data usage for Brazilian mobile networks
- **Accessibility**: High contrast ratios, clear navigation for mature users

## 🎨 CSS Architecture Guidelines

### Current CSS Structure
This project uses a mobile-first, design token-based CSS architecture with:
- Single CSS file: `src/styles/global.css` (mobile-first approach)
- CSS custom properties optimized for mobile performance
- Component-based structure with mobile-priority utility classes
- Progressive enhancement from mobile to desktop
- Touch-optimized interactions and spacing

### CSS Code Review Checklist

When reviewing or modifying CSS in this project, ensure:

#### File Organization
- [ ] CSS changes maintain the current token-based system
- [ ] New styles follow existing naming patterns
- [ ] Component styles are grouped logically
- [ ] Utility classes remain single-purpose

#### Design Tokens
- [ ] Use existing custom properties before creating new ones
- [ ] Follow the established color naming convention (`--color-*`)
- [ ] Maintain spacing scale consistency (`--space-*`)
- [ ] Typography tokens are used appropriately

#### Responsive Design
- [ ] Mobile-first CSS implementation (base styles for mobile)
- [ ] Progressive enhancement for larger screens
- [ ] Breakpoints use mobile-priority values (320px, 375px, 768px, 1024px, 1440px)
- [ ] Touch targets minimum 48px compliance (accessibility for 40-70 age group)
- [ ] Mobile-optimized typography and spacing for mature users
- [ ] Responsive utilities prioritize mobile experience
- [ ] High contrast and readable design for age-related vision considerations

### CSS Implementation Standards

#### Component CSS Template
```css
/* Mobile-first component template */
.c-component-name {
  /* Mobile base styles using design tokens */
  color: var(--color-text-primary);
  padding: var(--space-md);
  min-height: 48px; /* Touch target compliance for mature users */
  
  /* Mobile interaction states */
  &:hover, &:focus {
    /* Touch-friendly feedback */
  }
  
  &.is-active {
    /* Mobile active state */
  }
}

/* Progressive enhancement for larger screens */
@media (min-width: 768px) {
  .c-component-name {
    /* Tablet+ enhancements */
    padding: var(--space-lg);
  }
}

@media (min-width: 1024px) {
  .c-component-name {
    /* Desktop+ enhancements */
  }
}

/* Modifiers */
.c-component-name--variant {
  /* Mobile-first variant styles */
}

/* Elements */
.c-component-name__element {
  /* Mobile-first element styles */
}
```

#### Utility Class Pattern
```css
/* Mobile-first utility patterns */
.u-margin-top-{size} {
  margin-top: var(--space-{size});
}

/* Touch-friendly spacing utilities */
.u-touch-target {
  min-height: 48px; /* Accessibility for mature users */
  min-width: 48px;
}

/* Mobile-optimized logical properties */
.u-padding-inline-{size} {
  padding-inline: var(--space-{size});
}

/* Responsive display utilities */
.u-hide-mobile {
  display: none;
}

@media (min-width: 768px) {
  .u-hide-mobile {
    display: block;
  }
  
  .u-hide-desktop {
    display: none;
  }
}
```

#### Media Query Structure
```css
/* Mobile-first progressive enhancement */
.component {
  /* Base mobile styles (320px+) */
  font-size: var(--font-size-sm);
  padding: var(--space-sm);
}

/* Small mobile optimization */
@media (min-width: 375px) {
  .component {
    /* Enhanced mobile styles */
    font-size: var(--font-size-md);
  }
}

/* Tablet styles */
@media (min-width: 768px) {
  .component {
    /* Tablet+ enhancements */
    padding: var(--space-md);
    display: flex;
  }
}

/* Desktop styles */
@media (min-width: 1024px) {
  .component {
    /* Desktop+ enhancements */
    padding: var(--space-lg);
  }
}

/* Large desktop */
@media (min-width: 1440px) {
  .component {
    /* Large screen optimizations */
    max-width: 1200px;
    margin-inline: auto;
  }
}
```

### Design Token Reference

#### Color System
- `--color-primary-*`: Main brand colors (blues)
- `--color-secondary-*`: Secondary brand colors (greens)
- `--color-text-*`: Text colors (light/dark)
- `--color-bg-*`: Background colors
- `--color-border-*`: Border colors

#### Spacing Scale
- `--space-xs` through `--space-3xl`: Mobile-optimized spacing scale
- Use for padding, margin, and gap properties
- Base scale: 0.25rem increments optimized for touch interfaces
- Mobile-priority sizing with comfortable touch targets

#### Typography Tokens
- `--font-family-*`: Font stacks (system fonts optimized for Portuguese text readability by mature users)
- `--font-size-*`: Mobile-first type scale with larger base sizes for 40-70 age group, optimized for Portuguese text
- `--font-weight-*`: Font weights optimized for mobile screens and Portuguese character readability
- `--line-height-*`: Line height values for comfortable reading of Portuguese text by mature users

### CSS Naming Conventions
- **Components**: `.c-component-name` (English kebab-case)
- **Utilities**: `.u-utility-name` (English kebab-case)
- **JavaScript hooks**: `.js-hook-name` (English kebab-case)
- **State classes**: `.is-state` or `.has-state` (English state descriptors)
- **BEM Elements**: `.component-name__element` (English descriptors)
- **BEM Modifiers**: `.component-name--modifier` (English descriptors)

### CSS Performance Guidelines
- [ ] Mobile-first CSS loading strategy
- [ ] Avoid duplicate CSS rules across breakpoints
- [ ] Minimize specificity conflicts
- [ ] Use efficient selectors optimized for mobile parsing
- [ ] Leverage CSS custom properties for mobile theming
- [ ] Optimize images and minimize CSS/JS payload for mobile networks
- [ ] Critical CSS inlining for mobile performance

### CSS Quality Standards
- [ ] Mobile-first design token usage over hardcoded values
- [ ] Progressive enhancement CSS from mobile to desktop
- [ ] Document complex calculations and mobile-specific optimizations
- [ ] Prefer CSS logical properties for Brazilian Portuguese text internationalization
- [ ] Use meaningful class names describing mobile interaction patterns
- [ ] Touch-friendly interaction states and feedback
- [ ] Mobile accessibility compliance (WCAG 2.1 AA)
- [ ] Portuguese text rendering optimization (font choices, spacing, line breaks)
- [ ] **English naming**: All CSS classes, custom properties, and comments in English
- [ ] **BEM consistency**: Follow established English BEM methodology patterns
- [ ] **Naming pattern compliance**: kebab-case for all CSS identifiers

## 🚀 Project Setup Instructions

### Development Environment
```bash
# Clone and setup
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview build
npm run preview
```

### Required Dependencies
- `astro`: Static site generator
- `@astrojs/sitemap`: SEO sitemap generation
- Minimal external dependencies for performance

## 📋 Maintenance Guidelines

### Regular Updates
- [ ] Update contact information as needed
- [ ] Refresh testimonials and success stories
- [ ] Monitor WhatsApp redirect rates
- [ ] Update conversion tracking
- [ ] Review and optimize copy performance
- [ ] Maintain CSS design token consistency
- [ ] Update component documentation

### Performance Monitoring
- [ ] Mobile-first Lighthouse audits
- [ ] WhatsApp redirect conversion tracking on mobile devices
- [ ] Mobile page load speed monitoring (3G networks)
- [ ] Touch usability testing across device sizes
- [ ] CSS performance optimization for mobile
- [ ] Design token usage consistency across breakpoints
- [ ] Mobile Core Web Vitals tracking

---

## 📝 Prompt Maintenance Log

| Version | Date | Changes | Maintainer |
|---------|------|---------|------------|
| 2.6 | 2025-07-09 | Added English-only code requirements and comprehensive naming conventions | Development Team |
| 2.5 | 2025-07-09 | Emphasized Brazilian Portuguese speaking target audience throughout all sections | Development Team |
| 2.4 | 2025-07-09 | Updated target audience to 40-70 years, Vila Velha location, accessibility improvements | Development Team |
| 2.3 | 2025-07-09 | Enhanced mobile-first approach throughout all sections | Development Team |
| 2.2 | 2025-07-09 | Integrated CSS architecture guidelines | Development Team |
| 2.1 | 2025-07-09 | Removed Formspree/Netlify, focus on client-side form handling | Development Team |
| 2.0 | 2025-07-09 | Restructured for maintainability, added modular sections | Development Team |
| 1.0 | 2025-07-09 | Initial English translation from Portuguese | Development Team |

### Update Guidelines
- **Version Control**: Increment version number for major changes
- **Change Documentation**: Log all modifications in maintenance log
- **Stakeholder Review**: Marketing and development team approval for changes
- **Testing**: Validate prompt effectiveness with sample implementations

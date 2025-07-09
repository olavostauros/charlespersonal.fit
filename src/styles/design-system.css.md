# Design System CSS Documentation

## Purpose

**Business Purpose**: Provides mobile-first design foundation optimized for Brazilian Portuguese speakers aged 40-70 in Vila Velha, ES. Ensures consistent, accessible, and culturally appropriate user experience that supports conversion goals.

**Technical Purpose**: CSS custom properties (design tokens) system with mobile-first responsive utilities, component styles, and accessibility features for mature user demographic.

## Structure

### Design Token Architecture
```css
:root {
  /* Color System - Optimized for mobile displays and age-related vision */
  /* Typography - Portuguese text optimization for 40-70 age group */
  /* Spacing - Touch-friendly scale with 48px minimum targets */
  /* Breakpoints - Brazilian mobile usage patterns */
}
```

### CSS Organization
1. **Custom Properties**: Design tokens for consistency
2. **Reset & Base**: Normalize styles with accessibility defaults
3. **Layout System**: Grid and flexbox utilities
4. **Component Styles**: Reusable UI patterns
5. **Utility Classes**: Single-purpose helpers
6. **Responsive Utilities**: Mobile-first breakpoint system

### Mobile-First Methodology
- **Base Styles**: Mobile (320px+) as default
- **Progressive Enhancement**: Tablet (768px+) and desktop (1024px+)
- **Touch Optimization**: 48px minimum targets for mature users
- **Performance**: Efficient CSS for mobile parsing

## Sales Contribution

### Conversion Optimization
- **High Contrast Colors**: Trust-building blue, success green, urgency orange
- **Readable Typography**: Comfortable font sizes for 40-70 age group
- **Touch-Friendly**: Large buttons reduce friction for mature users
- **Visual Hierarchy**: Clear information flow guides to conversion

### Brand Consistency
- **Professional Appearance**: Medical/health color palette builds trust
- **Local Appeal**: Design choices appropriate for Brazilian beach culture
- **Age Appropriateness**: Mature, sophisticated visual treatment
- **Mobile Priority**: Reflects primary user behavior patterns

### Accessibility Impact
- **WCAG Compliance**: 4.5:1 color contrast ratios
- **Touch Targets**: 48px minimum for motor skill considerations
- **Font Scaling**: Readable without zoom for vision changes
- **Simplified UI**: Reduced cognitive load for decision-making

## Technical Notes

### Design Token System
```css
/* Color tokens optimized for mobile displays */
--color-primary: #3B82F6;     /* Trust, professionalism */
--color-secondary: #10B981;    /* Health, success */
--color-accent: #F59E0B;       /* Urgency, CTA */

/* Typography scale for Portuguese text */
--font-size-base: 1.125rem;    /* 18px - comfortable for 40-70 */
--line-height-normal: 1.6;     /* Portuguese text readability */

/* Touch-friendly spacing */
--touch-target-min: 48px;      /* WCAG minimum */
--touch-target-comfortable: 56px; /* Recommended for 40-70 */
```

### Mobile-First Breakpoints
```css
/* Brazilian mobile usage optimization */
--breakpoint-xs: 320px;   /* Small mobile */
--breakpoint-sm: 375px;   /* Standard mobile */
--breakpoint-md: 768px;   /* Tablet */
--breakpoint-lg: 1024px;  /* Desktop */
--breakpoint-xl: 1440px;  /* Large desktop */
```

### Component Architecture
- **BEM Methodology**: Block__Element--Modifier naming
- **Design Token Usage**: Consistent property values
- **Mobile-First Declarations**: Base styles for small screens
- **Progressive Enhancement**: Larger screen improvements

### Performance Optimization
- **CSS Custom Properties**: Efficient browser parsing
- **Mobile-First**: Smaller initial payload
- **Logical Properties**: International text support
- **Will-Change**: Performance hints for animations

## Dependencies

### External Dependencies
- **Inter Font Family**: Google Fonts for Portuguese text optimization
- **CSS Custom Properties**: Modern browser support (IE11+)
- **Flexbox/Grid**: Layout system support
- **Media Queries**: Responsive design implementation

### Internal Dependencies
- **Astro Integration**: Component scoped styles
- **Image Assets**: Responsive image system
- **JavaScript Hooks**: Class names for interaction
- **Performance Budget**: Mobile loading constraints

### Browser Support
- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **Feature Detection**: Graceful degradation for older browsers
- **Progressive Enhancement**: Core functionality without advanced CSS

## Mobile-First Considerations

### Brazilian Mobile Context
- **3G Network Optimization**: Efficient CSS loading
- **Touch Interaction**: Large, comfortable targets
- **Portrait Usage**: Vertical layout priority
- **One-Handed Use**: Thumb-friendly positioning

### Age Group Adaptation (40-70)
- **Vision Considerations**: High contrast, large text
- **Motor Skills**: Generous touch targets, error forgiveness
- **Cognitive Load**: Simple, familiar interface patterns
- **Technology Comfort**: Progressive enhancement approach

### Performance Priorities
- **Critical CSS**: Above-the-fold styles inlined
- **Loading Strategy**: Non-blocking CSS delivery
- **File Size**: Optimized for mobile bandwidth
- **Parsing Efficiency**: Simple selectors, efficient properties

## Accessibility Features

### WCAG 2.1 AA Compliance
- **Color Contrast**: 4.5:1 minimum for normal text
- **Touch Targets**: 48px minimum size
- **Focus Indicators**: Visible keyboard navigation
- **Text Scaling**: Readable at 200% zoom

### Age-Related Considerations
- **Color Blindness**: Pattern/icon reinforcement
- **Low Vision**: High contrast modes
- **Motor Limitations**: Large click areas
- **Cognitive Support**: Clear visual hierarchy

## Maintenance Guidelines

### Design Token Updates
- **Color Modifications**: Update CSS custom properties
- **Spacing Changes**: Maintain proportional relationships
- **Typography Scaling**: Test across breakpoints
- **Consistency Checks**: Audit token usage

### Performance Monitoring
- **CSS File Size**: Target < 50KB for mobile
- **Critical Path**: Above-the-fold optimization
- **Loading Times**: Monitor on 3G networks
- **Render Blocking**: Minimize layout shifts

### Browser Testing
- **Mobile Devices**: iOS/Android across versions
- **Desktop Browsers**: Major browsers current/previous
- **Feature Detection**: Graceful degradation testing
- **Accessibility Tools**: Screen reader compatibility

## Cultural Adaptation

### Brazilian Design Preferences
- **Color Psychology**: Trust (blue), health (green), energy (orange)
- **Visual Hierarchy**: Clear, confident communication
- **Professional Appearance**: Medical/health industry standards
- **Beach Lifestyle**: Appropriate but not overly casual

### Portuguese Language Support
- **Font Selection**: Proper accent character support
- **Text Spacing**: Comfortable Portuguese word lengths
- **Line Breaks**: Natural Portuguese text flow
- **Reading Patterns**: Left-to-right optimization

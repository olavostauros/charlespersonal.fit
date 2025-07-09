# Hero.astro Component Documentation

## Purpose

**Business Purpose**: Primary conversion section targeting Brazilian Portuguese speakers aged 40-70 in Vila Velha, ES. Presents clear value proposition for 90-day body transformation with immediate CTAs for WhatsApp and MFit app engagement.

**Technical Purpose**: Above-the-fold hero section with responsive image, benefit highlights, social proof, and dual conversion paths optimized for mobile-first interaction.

## Structure

### Content Hierarchy
1. **Professional Badge**: CREF credentials + experience (trust building)
2. **Headline**: "Corpo dos Sonhos em 90 Dias" (clear value proposition)
3. **Subtitle**: MFit method explanation with social proof (+200 clients)
4. **Benefits List**: Three key advantages with checkmark icons
5. **Primary CTAs**: WhatsApp (primary) and MFit app (secondary)
6. **Social Proof**: Star rating and client count
7. **Hero Image**: Professional photo of Charles in training environment

### Mobile-First Design
- **Touch Targets**: Minimum 48px for mature users (40-70 age group)
- **Readable Typography**: Large font sizes optimized for Portuguese text
- **Thumb-Friendly CTAs**: Positioned for natural mobile interaction
- **Visual Hierarchy**: Clear information flow for quick mobile consumption

## Sales Contribution

### Conversion Funnel Entry
- **Value Proposition**: Immediate "90 days" promise for results-focused mature audience
- **Trust Signals**: Professional credentials (CREF) and experience (5+ years)
- **Social Proof**: "+200 clientes transformados" builds confidence
- **Urgency**: "Agora" language encourages immediate action

### Dual CTA Strategy
1. **Primary CTA (WhatsApp)**: Lower friction, personal connection
   - Pre-filled message for easy engagement
   - Familiar platform for Brazilian users 40-70
   - Immediate human connection

2. **Secondary CTA (MFit App)**: Product demonstration
   - Direct access to training platform
   - Visual proof of service quality
   - Technology comfort building

### Age-Appropriate Messaging
- **Respectful Tone**: Professional, mature communication style
- **Health Focus**: Body transformation vs. extreme fitness
- **Achievable Goals**: 90-day timeframe feels manageable
- **Support Emphasis**: 24/7 availability reduces anxiety

## Technical Notes

### Image Implementation
```astro
<img 
  src="/images/charles-hero.jpg" 
  alt="Charles Personal Trainer, especialista em transformação corporal..."
  class="hero__img"
  width="600"
  height="400"
  loading="eager"  <!-- Above-the-fold optimization -->
/>
```

### WhatsApp Integration
```astro
href="https://wa.me/5527996224175?text=Oi%20Charles!%20Quero%20transformar..."
```
- **URL Encoding**: Proper Portuguese message encoding
- **Target Audience**: Age-appropriate, respectful message tone
- **Conversion Tracking**: `data-cta="whatsapp-hero"` for analytics

### Responsive Behavior
- **Mobile Layout**: Stacked content, full-width CTAs
- **Tablet Layout**: Side-by-side content and image
- **Desktop Layout**: Enhanced spacing, larger image
- **Touch Optimization**: Large buttons, generous spacing

### Accessibility Features
- **ARIA Labels**: Star rating properly labeled
- **Semantic HTML**: Proper heading hierarchy (h1)
- **Alt Text**: Descriptive image content for screen readers
- **Color Contrast**: High contrast for mature user vision

## Dependencies

### External Services
- **WhatsApp Business API**: +5527996224175 contact integration
- **MFit Platform**: Client signup link integration
- **Image Assets**: Professional Charles photos optimized for web

### Internal Dependencies
- **Design System**: Hero-specific CSS components using design tokens
- **Typography Scale**: Mobile-first font sizing for Portuguese text
- **Color Palette**: Brand colors for trust and energy
- **Button Components**: Reusable CTA button styles

### Performance Dependencies
- **Image Optimization**: WebP format with JPEG fallback
- **Above-the-Fold**: Critical CSS for immediate rendering
- **Font Loading**: Inter font family for Portuguese readability

## Mobile-First Considerations

### Brazilian Mobile Usage
- **3G Network Optimization**: Fast loading for common connection speeds
- **Touch Interaction**: Large, easy-to-tap elements
- **Thumb Navigation**: CTAs positioned for one-handed use
- **Visual Clarity**: High contrast for outdoor mobile usage

### Age Group Adaptation (40-70)
- **Font Sizes**: Larger than standard for comfortable reading
- **Touch Targets**: Generous spacing prevents misclicks
- **Simple Layout**: Clear visual hierarchy reduces cognitive load
- **Familiar Patterns**: Standard interaction expectations

## Conversion Optimization

### A/B Testing Opportunities
- **Headline Variations**: Different benefit emphasis
- **CTA Button Text**: Action verb variations in Portuguese
- **Social Proof Placement**: Above vs. below CTAs
- **Image Options**: Different Charles photos/environments

### Performance Metrics
- **CTA Click Rates**: WhatsApp vs. MFit engagement
- **Scroll Depth**: How far users read before acting
- **Time on Section**: Engagement before conversion
- **Mobile vs. Desktop**: Platform-specific optimization

### Brazilian Cultural Adaptation
- **Language Tone**: Warm but professional Portuguese
- **Visual Elements**: Beach/fitness lifestyle imagery
- **Trust Building**: Local credentials and community connection
- **Technology Comfort**: Balance between digital and personal touch

/**
 * BUSINESS PURPOSE: Type definitions for Charles Personal conversion funnel optimization
 * TECHNICAL PURPOSE: TypeScript interfaces for form validation, analytics, and WhatsApp integration
 * TARGET AUDIENCE: Adults 40-70 interested in fitness, primarily mobile users in Vila Velha, ES
 * CONVERSION IMPACT: Type safety prevents runtime errors and improves user experience
 * NOTE: All interface names and properties must be in English
 */

// BUSINESS PURPOSE: Lead capture form data structure for CRM integration
// TECHNICAL PURPOSE: Type-safe form data with Brazilian Portuguese field validation
export interface FormData {
  name: string;           // Full name (Portuguese characters supported)
  email: string;          // Email address for follow-up
  phone: string;          // Brazilian phone number format
}

// BUSINESS PURPOSE: Validation rules ensure data quality for lead processing
// TECHNICAL PURPOSE: Type-safe validation configuration with Portuguese error messages
export interface ValidationRule {
  required: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;       // Regex pattern for field validation
  errorMessage: string;   // Portuguese error message for users
}

// BUSINESS PURPOSE: Complete validation rules for all form fields
// TECHNICAL PURPOSE: Type-safe mapping of field names to validation rules
export interface ValidationRules {
  name: ValidationRule;
  email: ValidationRule;
  phone: ValidationRule;
}

// BUSINESS PURPOSE: WhatsApp integration configuration for maximum conversion
// TECHNICAL PURPOSE: Type-safe WhatsApp deep linking with Brazilian phone number
export interface WhatsappConfig {
  baseUrl: string;        // WhatsApp API base URL
  number: string;         // Brazilian phone number (+5527996224175)
  messageTemplate: (formData: FormData) => string; // Portuguese message template function
}

// BUSINESS PURPOSE: Analytics tracking for conversion optimization
// TECHNICAL PURPOSE: Type-safe event structure for Google Analytics 4
export interface AnalyticsEvent {
  action: string;         // Event action (form_submit, cta_click, etc.)
  category: string;       // Event category (conversion, engagement, etc.)
  label?: string;         // Event label for segmentation
  value?: number;         // Numeric value for conversion tracking
  customData?: Record<string, any>; // Additional event data
}

// BUSINESS PURPOSE: Form validation results for user feedback
// TECHNICAL PURPOSE: Type-safe validation response structure
export interface ValidationResult {
  isValid: boolean;
  errorMessage?: string;
}

// BUSINESS PURPOSE: Complete form validation results with field-specific errors
// TECHNICAL PURPOSE: Type-safe validation result for entire form
export interface FormValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof FormData, string>>;
}

// BUSINESS PURPOSE: CTA tracking configuration for optimization
// TECHNICAL PURPOSE: Type-safe CTA element identification
export interface CtaElement {
  type: 'primary' | 'secondary' | 'whatsapp' | 'mfit' | 'instagram';
  text: string;
  url?: string;
  trackingLabel: string;
}

// BUSINESS PURPOSE: Mobile menu state management for primary mobile audience
// TECHNICAL PURPOSE: Type-safe mobile navigation state
export interface MobileMenuState {
  isOpen: boolean;
  toggleElement: HTMLButtonElement | null;
  menuElement: HTMLElement | null;
}

// BUSINESS PURPOSE: Carousel functionality for testimonials and training images
// TECHNICAL PURPOSE: Type-safe carousel state management
export interface CarouselState {
  currentIndex: number;
  totalSlides: number;
  autoPlayInterval?: number;
  isPlaying: boolean;
}

// BUSINESS PURPOSE: User interaction tracking for UX optimization
// TECHNICAL PURPOSE: Type-safe user behavior analytics
export interface UserInteraction {
  type: 'click' | 'scroll' | 'form_field_focus' | 'form_field_blur' | 'page_load';
  elementId?: string;
  elementClass?: string;
  timestamp: Date;
  metadata?: Record<string, any>;
}

// BUSINESS PURPOSE: Brazilian phone number formatting support
// TECHNICAL PURPOSE: Type-safe phone number formatting configuration
export interface PhoneNumberFormat {
  pattern: RegExp;        // Validation pattern for Brazilian numbers
  mask: string;           // Display mask: (XX) 9XXXX-XXXX
  maxLength: number;      // Maximum number of digits
}

// BUSINESS PURPOSE: Local business information for Vila Velha market
// TECHNICAL PURPOSE: Type-safe business data structure
export interface BusinessInfo {
  name: string;           // "Charles Personal"
  area: string[];         // Service areas in Vila Velha, ES
  whatsappNumber: string; // +5527996224175
  instagramHandle: string; // @charlestonpersonaltrainer
  mfitSignupUrl: string;  // MFit app signup link
}

// BUSINESS PURPOSE: Error handling for improved user experience
// TECHNICAL PURPOSE: Type-safe error structure with user-friendly messages
export interface UserError {
  code: string;           // Error code for tracking
  message: string;        // Portuguese user-facing message
  field?: keyof FormData; // Related form field if applicable
  severity: 'info' | 'warning' | 'error' | 'success';
}

// BUSINESS PURPOSE: Performance monitoring for mobile optimization
// TECHNICAL PURPOSE: Type-safe performance metrics tracking
export interface PerformanceMetrics {
  pageLoadTime: number;   // Time to interactive (TTI)
  firstContentfulPaint: number; // FCP metric
  cumulativeLayoutShift: number; // CLS metric
  largestContentfulPaint: number; // LCP metric
}

// BUSINESS PURPOSE: A/B testing support for conversion optimization
// TECHNICAL PURPOSE: Type-safe variant configuration
export interface TestVariant {
  name: string;           // Variant identifier
  isControl: boolean;     // Whether this is the control group
  allocation: number;     // Percentage allocation (0-100)
  config: Record<string, any>; // Variant-specific configuration
}

// BUSINESS PURPOSE: Responsive design breakpoint management
// TECHNICAL PURPOSE: Type-safe breakpoint configuration for mobile-first design
export interface BreakpointConfig {
  xs: number;             // 320px - Small mobile
  sm: number;             // 375px - Standard mobile  
  md: number;             // 768px - Tablet
  lg: number;             // 1024px - Desktop
  xl: number;             // 1440px - Large desktop
}

// BUSINESS PURPOSE: Accessibility features for mature users (40-70)
// TECHNICAL PURPOSE: Type-safe accessibility configuration
export interface AccessibilityConfig {
  minimumTouchTargetSize: number; // 48px minimum for mature users
  highContrastMode: boolean;      // Enhanced visibility option
  fontScaling: number;            // Text size multiplier
  reducedMotion: boolean;         // Respect prefers-reduced-motion
}

// Extend Window interface for global analytics
declare global {
  interface Window {
    gtag?: (command: string, eventName: string, parameters?: Record<string, any>) => void;
  }
}

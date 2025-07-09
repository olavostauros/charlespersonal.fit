/**
 * BUSINESS PURPOSE: Additional validation types for comprehensive form handling
 * TECHNICAL PURPOSE: Extended TypeScript interfaces for advanced validation scenarios
 * TARGET AUDIENCE: Adults 40-70 interested in fitness, primarily mobile users in Vila Velha, ES
 * CONVERSION IMPACT: Enhanced type safety reduces runtime errors and improves UX
 * NOTE: All interface names and properties must be in English
 */

import type { FormData, ValidationResult } from './form-types';

// BUSINESS PURPOSE: Enhanced field validation with accessibility support
// TECHNICAL PURPOSE: Extended validation rule with ARIA and accessibility features
export interface EnhancedValidationRule {
  required: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  errorMessage: string;
  ariaLabel?: string;          // Accessibility label for screen readers
  helpText?: string;           // Additional guidance text
  autocomplete?: string;       // HTML autocomplete attribute
  inputMode?: 'text' | 'email' | 'tel' | 'numeric';
}

// BUSINESS PURPOSE: Field state management for real-time validation
// TECHNICAL PURPOSE: Type-safe field state tracking
export interface FieldState {
  value: string;
  isValid: boolean;
  isDirty: boolean;           // Has user interacted with field
  isTouched: boolean;         // Has user focused then blurred field
  errorMessage?: string;
  isValidating?: boolean;     // For async validation
}

// BUSINESS PURPOSE: Form state management for complete form control
// TECHNICAL PURPOSE: Type-safe form state with all field states
export interface FormState {
  fields: Record<keyof FormData, FieldState>;
  isSubmitting: boolean;
  isValid: boolean;
  submitAttempted: boolean;
  errorCount: number;
}

// BUSINESS PURPOSE: Input validation events for real-time feedback
// TECHNICAL PURPOSE: Type-safe validation event structure
export interface ValidationEvent {
  fieldName: keyof FormData;
  value: string;
  eventType: 'input' | 'blur' | 'focus' | 'submit';
  timestamp: Date;
  validationResult: ValidationResult;
}

// BUSINESS PURPOSE: Error categorization for better user guidance
// TECHNICAL PURPOSE: Type-safe error classification system
export interface ValidationError {
  code: string;               // Error code for programmatic handling
  message: string;            // User-facing error message in Portuguese
  severity: 'error' | 'warning' | 'info';
  field: keyof FormData;
  suggestions?: string[];     // Helpful suggestions for user
}

// BUSINESS PURPOSE: Success states for positive user feedback
// TECHNICAL PURPOSE: Type-safe success message configuration
export interface ValidationSuccess {
  message: string;            // Success message in Portuguese
  icon?: string;              // Optional icon for visual feedback
  duration?: number;          // Display duration in milliseconds
}

// Re-export commonly used types for convenience
export type { FormData, ValidationResult, FormValidationResult } from './form-types';

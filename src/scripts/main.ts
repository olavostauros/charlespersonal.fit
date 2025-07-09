/**
 * BUSINESS PURPOSE: Form validation and WhatsApp conversion optimization for Charles Personal
 * TECHNICAL PURPOSE: TypeScript-based form handling with type safety and mobile optimization
 * TARGET AUDIENCE: Adults 40-70 interested in fitness, primarily mobile users in Vila Velha, ES
 * CONVERSION IMPACT: Reduces form errors, improves WhatsApp conversion rates, enables tracking
 * DEPENDENCIES: WhatsApp Business API, Google Analytics (optional), DOM APIs
 * TYPE DEFINITIONS: FormData, ValidationRules, WhatsappConfig, AnalyticsEvent interfaces
 * NOTE: All comments, variables, and function names must be in English
 */

import type { 
  FormData, 
  ValidationRules, 
  WhatsappConfig, 
  AnalyticsEvent,
  ValidationResult,
  FormValidationResult 
} from './types/form-types';

// BUSINESS PURPOSE: Configuration constants for conversion optimization
// TECHNICAL PURPOSE: Type-safe configuration with Brazilian phone number format
const WHATSAPP_NUMBER = '+5527996224175' as const;
const MFIT_SIGNUP_URL = 'https://client.mfitpersonal.com.br/out/signup-link/ODY5NTY=' as const;

// BUSINESS PURPOSE: Form validation reduces user errors and improves conversion rates
// TECHNICAL PURPOSE: Type-safe validation rules with Portuguese message support
const FORM_VALIDATION_RULES: ValidationRules = {
  name: {
    minLength: 2,
    maxLength: 50,
    required: true,
    pattern: /^[a-záàâãéèêíïóôõöúçñ\s]+$/i, // Portuguese character support
    errorMessage: 'Por favor, digite seu nome completo (mínimo 2 caracteres)'
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMessage: 'Por favor, digite um email válido'
  },
  phone: {
    required: true,
    pattern: /^(\+55\s?)?\(?[1-9]{2}\)?\s?9?\d{4}-?\d{4}$/,
    errorMessage: 'Por favor, digite um telefone válido (ex: 27 99999-9999)'
  }
};

// BUSINESS PURPOSE: WhatsApp integration maximizes conversion by reducing friction
// TECHNICAL PURPOSE: Type-safe WhatsApp configuration with Portuguese message templates
const WHATSAPP_CONFIG: WhatsappConfig = {
  baseUrl: 'https://wa.me/',
  number: WHATSAPP_NUMBER,
  messageTemplate: (formData: FormData) => {
    return `Olá Charles! Meu nome é ${formData.name}. Quero começar minha transformação!

📱 Email: ${formData.email}
📞 Telefone: ${formData.phone}

Vim através do seu site e gostaria de saber mais sobre os treinos personalizados no MFit.`;
  }
};

/**
 * BUSINESS PURPOSE: Type-safe form validation prevents user errors and improves UX
 * TECHNICAL PURPOSE: Validates form field against defined rules with type checking
 * @param value - The input value to validate
 * @param fieldName - The name of the field being validated
 * @returns Validation result with success status and error message
 */
function validateFormField(value: string, fieldName: keyof ValidationRules): ValidationResult {
  const rules = FORM_VALIDATION_RULES[fieldName];
  
  if (!rules) {
    return { isValid: true };
  }

  // Required field validation
  if (rules.required && (!value || value.trim().length === 0)) {
    return { isValid: false, errorMessage: `${fieldName} é obrigatório` };
  }

  // Length validation
  if (rules.minLength && value.length < rules.minLength) {
    return { isValid: false, errorMessage: rules.errorMessage };
  }

  if (rules.maxLength && value.length > rules.maxLength) {
    return { isValid: false, errorMessage: rules.errorMessage };
  }

  // Pattern validation
  if (rules.pattern && !rules.pattern.test(value)) {
    return { isValid: false, errorMessage: rules.errorMessage };
  }

  return { isValid: true };
}

/**
 * BUSINESS PURPOSE: Complete form validation ensures data quality for lead processing
 * TECHNICAL PURPOSE: Type-safe validation of entire form data object
 * @param formData - The form data to validate
 * @returns Validation result with field-specific errors
 */
function validateCompleteForm(formData: FormData): FormValidationResult {
  const errors: Partial<Record<keyof FormData, string>> = {};
  let isValid = true;

  // Validate each field using type-safe iteration
  (Object.keys(formData) as Array<keyof FormData>).forEach(fieldName => {
    const validation = validateFormField(formData[fieldName], fieldName);
    if (!validation.isValid && validation.errorMessage) {
      errors[fieldName] = validation.errorMessage;
      isValid = false;
    }
  });

  return { isValid, errors };
}

/**
 * BUSINESS PURPOSE: WhatsApp redirect maximizes conversion by using preferred communication method
 * TECHNICAL PURPOSE: Type-safe URL generation with properly encoded Portuguese messages
 * @param formData - The validated form data
 * @returns WhatsApp deep link URL
 */
function generateWhatsappUrl(formData: FormData): string {
  const message = WHATSAPP_CONFIG.messageTemplate(formData);
  const encodedMessage = encodeURIComponent(message);
  return `${WHATSAPP_CONFIG.baseUrl}${WHATSAPP_CONFIG.number.replace('+', '')}?text=${encodedMessage}`;
}

/**
 * BUSINESS PURPOSE: Analytics tracking enables conversion optimization and ROI measurement
 * TECHNICAL PURPOSE: Type-safe event tracking with proper error handling
 * @param event - The analytics event to track
 */
function trackAnalyticsEvent(event: AnalyticsEvent): void {
  // Google Analytics 4 integration
  if (typeof window !== 'undefined' && 'gtag' in window && typeof window.gtag === 'function') {
    window.gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
      custom_parameter_form_data: event.customData
    });
  }

  // Console logging for development
  console.log(`Analytics Event: ${event.action}`, {
    category: event.category,
    label: event.label,
    value: event.value,
    customData: event.customData
  });
}

/**
 * BUSINESS PURPOSE: Visual feedback improves user experience and reduces form abandonment
 * TECHNICAL PURPOSE: Type-safe DOM manipulation with accessibility considerations
 * @param fieldElement - The input element to update
 * @param isValid - Whether the field is valid
 * @param errorMessage - The error message to display if invalid
 */
function updateFieldValidationUI(fieldElement: HTMLInputElement, isValid: boolean, errorMessage?: string): void {
  const errorElement = document.querySelector(`[data-error-for="${fieldElement.name}"]`) as HTMLElement;
  
  // Remove existing validation classes
  fieldElement.classList.remove('has-error', 'has-success');
  
  if (isValid) {
    fieldElement.classList.add('has-success');
    if (errorElement) {
      errorElement.textContent = '';
      errorElement.style.display = 'none';
    }
  } else {
    fieldElement.classList.add('has-error');
    if (errorElement && errorMessage) {
      errorElement.textContent = errorMessage;
      errorElement.style.display = 'block';
      errorElement.setAttribute('aria-live', 'polite'); // Accessibility for screen readers
    }
  }
}

/**
 * BUSINESS PURPOSE: Real-time validation prevents user frustration and improves completion rates
 * TECHNICAL PURPOSE: Type-safe event handler for input validation
 * @param event - The input event
 */
function handleFieldValidation(event: Event): void {
  const inputElement = event.target as HTMLInputElement;
  const fieldName = inputElement.name as keyof ValidationRules;
  const value = inputElement.value;

  const validation = validateFormField(value, fieldName);
  updateFieldValidationUI(inputElement, validation.isValid, validation.errorMessage);
}

/**
 * BUSINESS PURPOSE: Form submission handles the core conversion action
 * TECHNICAL PURPOSE: Type-safe form processing with validation and WhatsApp redirect
 * @param event - The form submission event
 */
function handleFormSubmission(event: Event): void {
  event.preventDefault();
  
  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);
  
  // Extract and type form data
  const typedFormData: FormData = {
    name: formData.get('name') as string || '',
    email: formData.get('email') as string || '',
    phone: formData.get('phone') as string || ''
  };

  // Validate complete form
  const validation = validateCompleteForm(typedFormData);
  
  if (!validation.isValid) {
    // Display validation errors
    Object.entries(validation.errors).forEach(([fieldName, errorMessage]) => {
      const fieldElement = form.querySelector(`[name="${fieldName}"]`) as HTMLInputElement;
      if (fieldElement && errorMessage) {
        updateFieldValidationUI(fieldElement, false, errorMessage);
      }
    });

    // Track form validation error
    trackAnalyticsEvent({
      action: 'form_validation_error',
      category: 'form',
      label: 'contact_form',
      customData: { errors: Object.keys(validation.errors) }
    });

    return;
  }

  // Track successful form submission
  trackAnalyticsEvent({
    action: 'form_submit_success',
    category: 'conversion',
    label: 'contact_form',
    value: 1,
    customData: typedFormData
  });

  // Generate WhatsApp URL and redirect
  const whatsappUrl = generateWhatsappUrl(typedFormData);
  
  // Track WhatsApp redirect
  trackAnalyticsEvent({
    action: 'whatsapp_redirect',
    category: 'conversion',
    label: 'form_to_whatsapp',
    value: 1,
    customData: { phone: WHATSAPP_NUMBER }
  });

  // Redirect to WhatsApp
  window.open(whatsappUrl, '_blank');
  
  // Show success message
  showSuccessMessage(typedFormData.name);
}

/**
 * BUSINESS PURPOSE: Success feedback reinforces positive user experience
 * TECHNICAL PURPOSE: Type-safe success message display
 * @param userName - The user's name for personalization
 */
function showSuccessMessage(userName: string): void {
  const successMessage = document.getElementById('form-success-message') as HTMLElement;
  
  if (successMessage) {
    successMessage.innerHTML = `
      <div class="success-message">
        <h3>Obrigado, ${userName}!</h3>
        <p>Você será redirecionado para o WhatsApp do Charles. Se não foi redirecionado automaticamente, 
           <a href="https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}">clique aqui</a>.</p>
      </div>
    `;
    successMessage.style.display = 'block';
    
    // Scroll to success message for accessibility
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

/**
 * BUSINESS PURPOSE: CTA tracking enables optimization of conversion elements
 * TECHNICAL PURPOSE: Type-safe click tracking for all CTA buttons
 * @param event - The click event
 */
function handleCtaClick(event: Event): void {
  const element = event.target as HTMLElement;
  const ctaType = element.getAttribute('data-cta') || 'unknown';
  const ctaText = element.textContent?.trim() || 'unknown';

  trackAnalyticsEvent({
    action: 'cta_click',
    category: 'engagement',
    label: ctaType,
    value: 1,
    customData: { text: ctaText, location: window.location.pathname }
  });
}

/**
 * BUSINESS PURPOSE: Phone number formatting improves user experience and reduces errors
 * TECHNICAL PURPOSE: Type-safe Brazilian phone number formatting
 * @param event - The input event
 */
function handlePhoneFormatting(event: Event): void {
  const input = event.target as HTMLInputElement;
  let value = input.value.replace(/\D/g, ''); // Remove non-digits

  // Format Brazilian phone number: (XX) 9XXXX-XXXX
  if (value.length <= 11) {
    if (value.length <= 2) {
      value = value;
    } else if (value.length <= 7) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    }
  }

  input.value = value;
}

/**
 * BUSINESS PURPOSE: Smooth scrolling improves user experience for mature users (40-70)
 * TECHNICAL PURPOSE: Type-safe smooth scroll implementation for anchor links
 * @param event - The click event
 */
function handleSmoothScroll(event: Event): void {
  event.preventDefault();
  
  const link = event.target as HTMLAnchorElement;
  const targetId = link.getAttribute('href');
  
  if (targetId?.startsWith('#')) {
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Track navigation click
      trackAnalyticsEvent({
        action: 'navigation_click',
        category: 'engagement',
        label: targetId.slice(1), // Remove #
        customData: { target: targetId }
      });
    }
  }
}

/**
 * BUSINESS PURPOSE: Mobile menu enables navigation on mobile devices for primary audience
 * TECHNICAL PURPOSE: Type-safe mobile menu toggle with accessibility features
 */
function initializeMobileMenu(): void {
  const mobileToggle = document.querySelector('.js-mobile-menu-toggle') as HTMLButtonElement;
  const mobileMenu = document.querySelector('.js-mobile-menu') as HTMLElement;
  
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('is-open');
      
      if (isOpen) {
        mobileMenu.classList.remove('is-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = ''; // Re-enable scroll
      } else {
        mobileMenu.classList.add('is-open');
        mobileToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden'; // Prevent background scroll
      }

      // Track mobile menu usage
      trackAnalyticsEvent({
        action: isOpen ? 'mobile_menu_close' : 'mobile_menu_open',
        category: 'navigation',
        label: 'mobile_menu',
        customData: { action: isOpen ? 'close' : 'open' }
      });
    });

    // Close menu when clicking menu links
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('is-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }
}

/**
 * BUSINESS PURPOSE: DOM initialization ensures all functionality is ready for user interaction
 * TECHNICAL PURPOSE: Type-safe DOM ready event handling with comprehensive event binding
 */
function initializeApp(): void {
  // Initialize mobile menu
  initializeMobileMenu();

  // Add form validation listeners
  const contactForm = document.getElementById('contact-form') as HTMLFormElement;
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmission);

    // Add real-time validation to form fields
    const formFields = contactForm.querySelectorAll('input, textarea') as NodeListOf<HTMLInputElement>;
    formFields.forEach(field => {
      field.addEventListener('blur', handleFieldValidation);
      field.addEventListener('input', handleFieldValidation);
    });

    // Add phone formatting
    const phoneField = contactForm.querySelector('[name="phone"]') as HTMLInputElement;
    if (phoneField) {
      phoneField.addEventListener('input', handlePhoneFormatting);
    }
  }

  // Add CTA click tracking
  const ctaButtons = document.querySelectorAll('[data-cta]') as NodeListOf<HTMLElement>;
  ctaButtons.forEach(button => {
    button.addEventListener('click', handleCtaClick);
  });

  // Add smooth scroll to anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]') as NodeListOf<HTMLAnchorElement>;
  anchorLinks.forEach(link => {
    link.addEventListener('click', handleSmoothScroll);
  });

  // Track page load
  trackAnalyticsEvent({
    action: 'page_load',
    category: 'engagement',
    label: 'landing_page',
    customData: { 
      userAgent: navigator.userAgent,
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      timestamp: new Date().toISOString()
    }
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}

// Export types and functions for testing
export type { FormData, ValidationRules, WhatsappConfig, AnalyticsEvent };
export { 
  validateFormField, 
  validateCompleteForm, 
  generateWhatsappUrl, 
  trackAnalyticsEvent,
  WHATSAPP_NUMBER,
  MFIT_SIGNUP_URL,
  FORM_VALIDATION_RULES
};

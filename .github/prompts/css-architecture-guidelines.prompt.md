# CSS Architecture & Maintainability Guidelines

> **Purpose**: This prompt provides guidelines for maintaining and improving the CSS architecture in the charlespersonal.fit Astro project.
> 
> **Last Updated**: July 9, 2025
> 
> **Maintainer**: Project Team

## 🎯 Project Context

This is an Astro-based fitness coaching website with:
- Single CSS file architecture (`src/styles/design-system.css`)
- CSS custom properties (design tokens)
- Component-based structure
- Mobile-first responsive design
- Utility-first approach with some component classes

## 🏗️ Current Architecture Assessment

### Strengths
- ✅ Good use of CSS custom properties for design tokens
- ✅ Consistent color system and spacing scale
- ✅ Mobile-first responsive approach
- ✅ Well-organized utility classes

### Areas for Improvement
- 🔄 Large monolithic CSS file needs modularization
- 🔄 Mixed naming conventions (BEM vs utility)
- 🔄 Scattered media queries
- 🔄 Some specificity issues
- 🔄 Limited documentation

## 📋 Code Review Checklist

When reviewing or modifying CSS in this project, ensure:

### File Organization
- [ ] CSS changes maintain the current token-based system
- [ ] New styles follow existing naming patterns
- [ ] Component styles are grouped logically
- [ ] Utility classes remain single-purpose

### Design Tokens
- [ ] Use existing custom properties before creating new ones
- [ ] Follow the established color naming convention (`--color-*`)
- [ ] Maintain spacing scale consistency (`--space-*`)
- [ ] Typography tokens are used appropriately

### Responsive Design
- [ ] Mobile-first approach is maintained
- [ ] Breakpoints use consistent values
- [ ] Responsive utilities follow the established pattern
- [ ] Consider container queries for component isolation

### Performance
- [ ] Avoid duplicate CSS rules
- [ ] Minimize specificity conflicts
- [ ] Use efficient selectors
- [ ] Leverage CSS custom properties for theming

## 🔧 Implementation Guidelines

### Adding New Components
```css
/* Template for new components */
.c-component-name {
  /* Use design tokens */
  color: var(--color-text-primary);
  padding: var(--space-md);
  
  /* Define clear states */
  &:hover {
    /* hover styles */
  }
  
  &.is-active {
    /* active state */
  }
}

/* Modifiers */
.c-component-name--variant {
  /* variant styles */
}

/* Elements */
.c-component-name__element {
  /* element styles */
}
```

### Adding Utility Classes
```css
/* Follow existing patterns */
.u-margin-top-{size} {
  margin-top: var(--space-{size});
}

/* Use logical properties when possible */
.u-padding-inline-{size} {
  padding-inline: var(--space-{size});
}
```

### Media Query Pattern
```css
/* Mobile-first approach */
.component {
  /* mobile styles */
}

@media (min-width: 768px) {
  .component {
    /* tablet+ styles */
  }
}

@media (min-width: 1024px) {
  .component {
    /* desktop+ styles */
  }
}
```

## 🎨 Design Token Reference

### Colors
- `--color-primary-*`: Main brand colors
- `--color-secondary-*`: Secondary brand colors
- `--color-text-*`: Text colors
- `--color-bg-*`: Background colors
- `--color-border-*`: Border colors

### Spacing
- `--space-xs` through `--space-3xl`: Consistent spacing scale
- Use for padding, margin, and gap properties

### Typography
- `--font-family-*`: Font stacks
- `--font-size-*`: Type scale
- `--font-weight-*`: Font weights
- `--line-height-*`: Line height values

## 🚀 Future Improvements Roadmap

### Phase 1: Modularization
1. Split `design-system.css` into logical modules:
   ```
   src/styles/
   ├── tokens/
   │   ├── colors.css
   │   ├── typography.css
   │   └── spacing.css
   ├── base/
   │   ├── reset.css
   │   └── base.css
   ├── components/
   │   └── [component-files].css
   └── utilities/
       └── [utility-files].css
   ```

### Phase 2: Naming Standardization
1. Adopt consistent BEM methodology for components
2. Standardize utility class naming
3. Create clear state class conventions

### Phase 3: Advanced Features
1. Implement container queries for component isolation
2. Add CSS documentation comments
3. Create automated CSS linting rules
4. Consider CSS-in-JS migration for dynamic theming

## 📚 Resources

### Naming Conventions
- **Components**: `.c-component-name`
- **Utilities**: `.u-utility-name`
- **JavaScript hooks**: `.js-hook-name`
- **State classes**: `.is-state` or `.has-state`

### Best Practices
- Always use design tokens over hardcoded values
- Write mobile-first responsive CSS
- Document complex calculations and magic numbers
- Prefer CSS logical properties for better internationalization
- Use meaningful class names that describe purpose, not appearance

## 🤖 AI Assistant Instructions

When working on this project:

1. **Always review existing CSS patterns** before creating new styles
2. **Use the established design token system** - never hardcode colors, spacing, or typography values
3. **Follow the mobile-first responsive approach** established in the codebase
4. **Maintain consistency** with existing naming conventions
5. **Document any complex CSS** with comments explaining the purpose
6. **Consider performance implications** of CSS changes
7. **Test across different screen sizes** when making responsive changes
8. **Suggest improvements** to the CSS architecture when appropriate

### Code Review Focus Areas
- Design token usage
- Responsive design patterns
- Component modularity
- Performance optimization
- Maintainability improvements

---

**Note**: This prompt should be updated as the project evolves and new patterns are established. Regular reviews ensure it remains relevant and useful for maintaining code quality.

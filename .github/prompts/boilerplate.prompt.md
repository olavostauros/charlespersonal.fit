# Charles Personal Landing Page - Boilerplate Structure

## 📋 Visão Geral do Projeto

Este documento define a estrutura base (boilerplate) para a landing page do Charles Personal, um personal trainer que oferece treinos personalizados no aplicativo MFit. O projeto utiliza **Astro** e **CSS puro** para criar uma página estática otimizada para conversão de leads.

## 🎯 Objetivos da Landing Page

1. **Capturar leads** via formulário (nome, email, celular)
2. **Direcionar para o MFit** (aplicativo de treinos)
3. **Redirecionar para WhatsApp** do Charles com mensagem personalizada
4. **Promover Instagram** (@charlestonpersonaltrainer)
5. **Maximizar conversão** com design atrativo e copywriting persuasivo

## 🏗️ Estrutura de Arquivos do Projeto

```
charlespersonal.fit/
├── 📁 public/                          # Arquivos estáticos
│   ├── favicon.svg                     # Ícone do site
│   ├── images/                         # Imagens da landing page
│   │   ├── charles-hero.jpg            # Foto principal do Charles
│   │   ├── charles-training.jpg        # Charles treinando
│   │   └── mfit-app-preview.png        # Preview do app MFit
│   └── robots.txt                      # SEO - Instruções para crawlers
│
├── 📁 src/                             # Código fonte
│   ├── 📁 components/                  # Componentes Astro reutilizáveis
│   │   ├── Header.astro                # Cabeçalho com navegação
│   │   ├── Header.astro.md             # Documentação do Header
│   │   ├── Hero.astro                  # Seção principal com CTA
│   │   ├── Hero.astro.md               # Documentação do Hero
│   │   ├── About.astro                 # Seção sobre o Charles
│   │   ├── About.astro.md              # Documentação do About
│   │   ├── Services.astro              # Serviços oferecidos
│   │   ├── Services.astro.md           # Documentação dos Services
│   │   ├── FormSection.astro           # Formulário de captura de leads
│   │   ├── FormSection.astro.md        # Documentação do FormSection
│   │   ├── Testimonials.astro          # Depoimentos de clientes
│   │   ├── Testimonials.astro.md       # Documentação dos Testimonials
│   │   ├── Footer.astro                # Rodapé com links
│   │   └── Footer.astro.md             # Documentação do Footer
│   │
│   ├── 📁 layouts/                     # Layouts base
│   │   ├── Layout.astro                # Layout principal
│   │   └── Layout.astro.md             # Documentação do Layout
│   │
│   ├── 📁 pages/                       # Páginas do site
│   │   ├── index.astro                 # Página principal
│   │   ├── index.astro.md              # Documentação da página principal
│   │   ├── obrigado.astro              # Página de agradecimento (pós-lead)
│   │   └── obrigado.astro.md           # Documentação da página de agradecimento
│   │
│   └── 📁 styles/                      # Estilos CSS
│       ├── global.css                  # Estilos globais + CSS custom
│       ├── global.css.md               # Documentação dos estilos
│       ├── components.css              # Estilos específicos de componentes
│       └── utilities.css               # Classes utilitárias personalizadas
│
├── 📁 .github/                         # Configurações GitHub
│   └── 📁 prompts/                     # Prompts do projeto
│       └── boilerplate.prompt.md       # Este arquivo (estrutura base)
│
├── 📄 astro.config.mjs                 # Configuração do Astro
├── 📄 package.json                     # Dependências e scripts
├── 📄 README.md                        # Documentação do projeto
├── 📄 PROCESSO.md                      # Processo de desenvolvimento
├── 📄 BOILERPLATE.md                   # Este arquivo (estrutura base)
└── 📄 .gitignore                       # Arquivos ignorados pelo Git
```

## 🛠️ Tecnologias e Dependências

### Dependências Principais
```json
{
  "dependencies": {
    "astro": "^5.9.1"
  },
  "devDependencies": {
    "@astrojs/check": "^0.9.0"
  }
}
```

### Configurações Base

#### `astro.config.mjs`
```javascript
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://charlespersonal.fit',
  output: 'static',
  compressHTML: true
});
```

## 📱 Componentes Essenciais

### 1. Header.astro
- **Propósito**: Navegação e identidade visual
- **Elementos**: Logo, menu, CTA para WhatsApp
- **Responsivo**: Menu hambúrguer no mobile
- **Estilos**: CSS Grid/Flexbox puro

### 2. Hero.astro
- **Propósito**: Primeira impressão e CTA principal
- **Elementos**: Foto do Charles, headline, CTA para MFit
- **Estratégia**: Capturar atenção em 3 segundos
- **Estilos**: CSS Grid para layout responsivo

### 3. About.astro
- **Propósito**: Credibilidade e conexão emocional
- **Elementos**: História do Charles, certificações, resultados
- **Estratégia**: Construir confiança
- **Estilos**: Flexbox para cards

### 4. Services.astro
- **Propósito**: Demonstrar valor dos treinos
- **Elementos**: Tipos de treino, benefícios, diferenciais
- **Estratégia**: Mostrar soluções para dores do cliente
- **Estilos**: CSS Grid para layout de serviços

### 5. FormSection.astro
- **Propósito**: Captura de leads
- **Elementos**: Formulário (nome, email, celular), oferta
- **Integração**: Formspree ou Netlify Forms
- **Estratégia**: Converter visitantes em leads
- **Estilos**: Form styling com CSS puro

### 6. Testimonials.astro
- **Propósito**: Prova social
- **Elementos**: Depoimentos reais, fotos, resultados
- **Estratégia**: Reduzir objeções
- **Estilos**: Carousel com CSS animations

## 🎨 Design System

### Paleta de Cores (CSS Custom Properties)
```css
:root {
  --color-primary: #3B82F6;     /* Azul - Confiança, Profissionalismo */
  --color-secondary: #10B981;   /* Verde - Energia, Saúde, Sucesso */
  --color-accent: #F59E0B;      /* Laranja - Urgência, Call-to-Action */
  --color-neutral-50: #F9FAFB;
  --color-neutral-500: #6B7280;
  --color-neutral-900: #111827;
  --color-white: #FFFFFF;
}
```

### Tipografia
```css
:root {
  --font-family-primary: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-4xl: 2.25rem;
  --font-weight-normal: 400;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
}
```

### Espaçamentos
```css
:root {
  --spacing-4: 1rem;
  --spacing-6: 1.5rem;
  --spacing-8: 2rem;
  --spacing-12: 3rem;
  --spacing-16: 4rem;
  --container-max-width: 72rem;
}
```

### Componentes CSS
- **Buttons**: Classes `.btn`, `.btn-primary`, `.btn-secondary`
- **Cards**: Classes `.card`, `.card-shadow`
- **Container**: Classes `.container`, `.section`
- **Grid**: Classes `.grid-2`, `.grid-3`, `.grid-auto`

## 🔗 Integrações Essenciais

### 1. Formulário de Leads (JavaScript Vanilla)
```javascript
interface LeadForm {
  nome: string;
  email: string;
  celular: string;
  objetivo?: 'emagrecimento' | 'ganho_muscular' | 'saude';
}
```

### 2. Links de Conversão
- **MFit**: `https://client.mfitpersonal.com.br/out/signup-link/ODY1NTY=`
- **WhatsApp**: `https://wa.me/5527996224715?text=Olá Charles! Vi sua landing page e quero saber mais sobre os treinos personalizados!`
- **Instagram**: `https://instagram.com/charlestonpersonaltrainer`

### 3. Analytics e Tracking
- Google Analytics 4
- Meta Pixel (Facebook/Instagram)
- Hotjar (opcional - heatmaps)

## 📈 Estratégia de Conversão

### Funil de Vendas
1. **Conscientização**: Hero section + About
2. **Interesse**: Services + Testimonials
3. **Consideração**: FormSection + Ofertas
4. **Ação**: CTAs para MFit + WhatsApp

### CTAs Estratégicos
- **Primário**: "Começar Treino Grátis" (MFit)
- **Secundário**: "Falar com Charles" (WhatsApp)
- **Terciário**: "Quero Meu Plano!" (Formulário)

## 🚀 Scripts de Desenvolvimento

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "check": "astro check"
  }
}
```

## 🎯 Arquitetura CSS

### Metodologia
- **BEM**: Block Element Modifier para nomenclatura
- **CSS Custom Properties**: Para design tokens
- **Mobile First**: Abordagem responsiva
- **Progressive Enhancement**: Funcionalidade básica primeiro

### Estrutura de Estilos
```css
/* global.css */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

/* Reset & Base */
/* Design Tokens */
/* Typography */
/* Layout */

/* components.css */
/* Button Components */
/* Card Components */
/* Form Components */

/* utilities.css */
/* Spacing Utilities */
/* Display Utilities */
/* Responsive Utilities */
```

## 📊 Métricas de Sucesso

### KPIs Principais
- **Taxa de conversão** (formulário): Meta 3-5%
- **CTR MFit**: Meta 15-20%
- **Engajamento WhatsApp**: Meta 10-15%
- **Tempo na página**: Meta >2 minutos

### Ferramentas de Monitoramento
- Google Analytics 4
- Formspree Analytics
- Vercel Analytics

## 📝 Próximos Passos

1. **Configurar projeto**: Inicializar Astro puro
2. **Criar sistema de design**: CSS custom properties
3. **Desenvolver componentes**: Header, Hero, FormSection
4. **Implementar formulário**: Integração com Formspree
5. **Adicionar conteúdo**: Textos, imagens, depoimentos
6. **Otimizar performance**: CSS minification, image optimization
7. **Otimizar SEO**: Meta tags, structured data
8. **Testar conversões**: A/B testing de CTAs
9. **Deploy**: Configurar Vercel

---

## 📞 Contatos do Projeto

- **Cliente**: Charles Personal Trainer
- **WhatsApp**: +55 27 99622-4715
- **Instagram**: @charlestonpersonaltrainer
- **MFit**: https://client.mfitpersonal.com.br/out/signup-link/ODY1NTY=

---

*Este boilerplate serve como base para o desenvolvimento da landing page usando Astro com CSS puro. Cada arquivo .md específico conterá detalhes técnicos e de implementação para sua respectiva parte do projeto.*

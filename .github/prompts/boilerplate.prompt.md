# Charles Personal Landing Page - Boilerplate Structure

## 📋 Visão Geral do Projeto

Este documento define a estrutura base (boilerplate) para a landing page do Charles Personal, um personal trainer que oferece treinos personalizados no aplicativo MFit. O projeto utiliza **Astro**, **TypeScript** e **Tailwind CSS** para criar uma página estática otimizada para conversão de leads.

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
│   ├── 📁 styles/                      # Estilos CSS
│   │   ├── global.css                  # Estilos globais + Tailwind
│   │   └── global.css.md               # Documentação dos estilos
│   │
│   └── 📁 types/                       # Tipos TypeScript
│       ├── form.ts                     # Tipos para formulários
│       └── form.ts.md                  # Documentação dos tipos
│
├── 📁 .github/                         # Configurações GitHub
│   └── 📁 prompts/                     # Prompts do projeto
│       └── prompt.prompt.md            # Prompt principal do projeto
│
├── 📄 astro.config.mjs                 # Configuração do Astro
├── 📄 package.json                     # Dependências e scripts
├── 📄 tsconfig.json                    # Configuração TypeScript
├── 📄 tailwind.config.mjs              # Configuração Tailwind CSS
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
    "astro": "^5.9.1",
    "@astrojs/tailwind": "^5.1.2",
    "@astrojs/typescript": "^5.0.0",
    "tailwindcss": "^3.4.0"
  }
}
```

### Configurações Base

#### `astro.config.mjs`
```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://charlespersonal.fit',
  output: 'static'
});
```

#### `tailwind.config.mjs`
```javascript
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',    // Azul confiança
        secondary: '#10B981',  // Verde energia
        accent: '#F59E0B'      // Laranja ação
      }
    }
  }
}
```

## 📱 Componentes Essenciais

### 1. Header.astro
- **Propósito**: Navegação e identidade visual
- **Elementos**: Logo, menu, CTA para WhatsApp
- **Responsivo**: Menu hambúrguer no mobile

### 2. Hero.astro
- **Propósito**: Primeira impressão e CTA principal
- **Elementos**: Foto do Charles, headline, CTA para MFit
- **Estratégia**: Capturar atenção em 3 segundos

### 3. About.astro
- **Propósito**: Credibilidade e conexão emocional
- **Elementos**: História do Charles, certificações, resultados
- **Estratégia**: Construir confiança

### 4. Services.astro
- **Propósito**: Demonstrar valor dos treinos
- **Elementos**: Tipos de treino, benefícios, diferenciais
- **Estratégia**: Mostrar soluções para dores do cliente

### 5. FormSection.astro
- **Propósito**: Captura de leads
- **Elementos**: Formulário (nome, email, celular), oferta
- **Integração**: Formspree ou Netlify Forms
- **Estratégia**: Converter visitantes em leads

### 6. Testimonials.astro
- **Propósito**: Prova social
- **Elementos**: Depoimentos reais, fotos, resultados
- **Estratégia**: Reduzir objeções

## 🎨 Design System

### Paleta de Cores
- **Primária**: #3B82F6 (Azul - Confiança, Profissionalismo)
- **Secundária**: #10B981 (Verde - Energia, Saúde, Sucesso)
- **Accent**: #F59E0B (Laranja - Urgência, Call-to-Action)
- **Neutros**: #F9FAFB, #6B7280, #111827

### Tipografia
- **Principal**: Inter (Google Fonts)
- **Títulos**: font-bold, text-4xl/text-2xl
- **Corpo**: font-normal, text-lg/text-base
- **CTAs**: font-semibold, text-xl

### Espaçamentos
- **Seções**: py-16 (desktop), py-12 (mobile)
- **Containers**: max-w-6xl mx-auto px-4
- **Elementos**: gap-8, space-y-6

## 🔗 Integrações Essenciais

### 1. Formulário de Leads
```typescript
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

1. **Configurar dependências**: Instalar Tailwind CSS
2. **Criar componentes base**: Header, Hero, FormSection
3. **Implementar formulário**: Integração com Formspree
4. **Adicionar conteúdo**: Textos, imagens, depoimentos
5. **Otimizar SEO**: Meta tags, structured data
6. **Testar conversões**: A/B testing de CTAs
7. **Deploy**: Configurar Vercel

---

## 📞 Contatos do Projeto

- **Cliente**: Charles Personal Trainer
- **WhatsApp**: +55 27 99622-4715
- **Instagram**: @charlestonpersonaltrainer
- **MFit**: https://client.mfitpersonal.com.br/out/signup-link/ODY1NTY=

---

*Este boilerplate serve como base para o desenvolvimento da landing page. Cada arquivo .md específico conterá detalhes técnicos e de implementação para sua respectiva parte do projeto.*

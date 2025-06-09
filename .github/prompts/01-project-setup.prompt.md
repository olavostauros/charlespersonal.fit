# Setup do Projeto - Charles Personal Landing Page

## 📋 Visão Geral

Este prompt cobre a configuração inicial do projeto Astro para a landing page do Charles Personal.

## 🎯 Objetivos

- Configurar projeto Astro com estrutura básica
- Configurar package.json com dependências necessárias
- Criar estrutura de pastas seguindo o boilerplate
- Configurar astro.config.mjs
- Configurar arquivos base (.gitignore, README.md)

## 🛠️ Tecnologias

- **Framework**: Astro 5.9.1 (modo estático)
- **Estilos**: CSS puro com custom properties
- **Deploy**: Vercel

## 📁 Estrutura de Pastas a Criar

```
charlespersonal.fit/
├── public/
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   └── styles/
└── .github/prompts/
```

## ⚙️ Configurações Necessárias

- Site URL: https://charlespersonal.fit
- Output: static
- CompressHTML: true

## 📦 Dependências

- astro: ^5.9.1
- @astrojs/check: ^0.9.0 (dev)

## 🚀 Scripts

- dev: astro dev
- build: astro build
- preview: astro preview
- check: astro check
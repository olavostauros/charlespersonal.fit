# Prompt: Transformação em Landing Page de Página Única

**Objetivo**: Converter o projeto charlespersonal.fit de uma estrutura multi-página para uma landing page otimizada de página única, focada exclusivamente na captura de leads via WhatsApp e redirecionamento para o MFit.

## Estrutura Atual vs. Desejada

### Remover completamente:
- Página `src/pages/obrigado.astro` e toda sua lógica
- Componente `src/components/FormSection.astro` e formulário de captura
- Todas as referências ao Formspree
- Redirecionamentos para página de agradecimento

### Manter e otimizar:
- Página `src/pages/index.astro` como única página
- Todos os componentes existentes: Header, Hero, Services, Testimonials, Footer
- Layout base e sistema de design
- Estrutura de pastas do projeto

## Modificações na Estratégia de Conversão

### Substituir formulário por CTAs diretos:
- Onde antes havia o FormSection, criar uma seção de CTA final poderosa
- Todos os botões devem direcionar para WhatsApp ou MFit
- Remover completamente a captura de email/dados pessoais
- Focar em conversão imediata via WhatsApp

### Otimizar mensagens do WhatsApp:
- Personalizar mensagens por seção (Hero, Services, CTA final)
- Incluir contexto específico em cada link do WhatsApp
- Mensagens devem indicar de onde o usuário veio na página

## Ajustes Específicos por Componente

### Header:
- Manter navegação interna (âncoras para seções)
- Remover link "Avaliação Grátis" que apontava para formulário
- Substituir por "Contato" que leva para seção CTA final

### Hero:
- Manter estrutura atual
- Otimizar CTAs principais para WhatsApp e MFit
- Ajustar copy para urgência sem prometer email

### Services:
- Manter cartões de serviços
- Todos os CTAs direcionam para WhatsApp com mensagens específicas por objetivo
- Manter seção diferencial MFit

### Seção CTA Final (nova):
- Substituir FormSection por uma seção de CTA poderosa
- Múltiplas opções de contato (WhatsApp prioritário)
- Benefícios resumidos e urgência
- Links para redes sociais
- Prova social final

### Testimonials:
- Manter estrutura atual
- Adicionar CTA no final da seção

### Footer:
- Manter informações de contato
- Remover qualquer referência a formulários
- Manter links sociais e MFit

## Otimizações de Performance

### Navegação interna aprimorada:
- Smooth scroll entre seções
- Indicadores visuais de progresso na página
- Menu sticky com destaque da seção atual

### Tracking e Analytics:
- Remover eventos relacionados ao formulário
- Focar tracking em cliques nos CTAs do WhatsApp
- Tracking de tempo na página e scroll depth

## Conteúdo da Nova Seção CTA

### Elementos essenciais:
- Headline impactante sobre transformação
- Resumo dos benefícios principais
- Múltiplos botões de ação (WhatsApp primário, MFit secundário)
- Garantias e credibilidade (CREF, experiência)
- Senso de urgência sem pressão excessiva
- Links para redes sociais como prova social

### Hierarquia visual:
- WhatsApp como CTA primário (maior, cor de destaque)
- MFit como CTA secundário
- Instagram/redes como CTAs terciários
- Informações de credibilidade como suporte

## Mensagens Personalizadas do WhatsApp

### Por contexto de origem:
- Header: "Oi Charles! Vi seu site e quero conhecer seus treinos no MFit!"
- Hero: "Oi Charles! Quero transformar meu corpo em 90 dias como você promete!"
- Services - Emagrecimento: "Oi Charles! Quero saber mais sobre treinos para emagrecimento!"
- Services - Massa: "Oi Charles! Tenho interesse nos treinos para ganho de massa!"
- CTA Final: "Oi Charles! Estou pronto para começar minha transformação hoje!"

## Considerações Técnicas

### Manter:
- Estrutura de componentes Astro
- Sistema de design CSS
- Responsividade
- Acessibilidade
- SEO otimizado

### Ajustar:
- Meta tags para página única
- Schema.org focado em personal trainer
- Canonical URL simplificado
- Sitemap para página única

---

Este prompt mantém a qualidade e profissionalismo do projeto atual, mas simplifica drasticamente o funil de conversão, eliminando a fricção do formulário e focando em conversão imediata via WhatsApp, que é mais natural para o público brasileiro de personal training.
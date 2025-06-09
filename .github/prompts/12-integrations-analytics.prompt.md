# Integrações e Analytics - Charles Personal Landing Page

## 📋 Visão Geral

Este prompt cobre a implementação de integrações essenciais, tracking de conversões e analytics para otimização da landing page.

## 🎯 Objetivos

- Implementar Google Analytics 4
- Configurar eventos de conversão
- Integrar formulário com serviços externos
- Configurar tracking de CTAs
- Monitorar performance e conversões

## 📊 Google Analytics 4

### Configuração Básica
- Tracking code no Layout.astro
- Events configurados
- Goals de conversão
- Funil de vendas

### Eventos Personalizados
- `form_submit`: Envio do formulário
- `cta_mfit_click`: Click no CTA MFit
- `cta_whatsapp_click`: Click WhatsApp
- `instagram_click`: Click Instagram

## 📝 Integração de Formulário

### Formspree
- Endpoint configurado
- Resposta automática
- Webhook para integrações
- Validação server-side

### Alternativas
- Netlify Forms
- Getform
- EmailJS

## 📱 Links de Conversão

### URLs Parametrizadas
- **MFit**: Com UTM source=landingpage
- **WhatsApp**: Mensagem pré-definida + UTM
- **Instagram**: Tracking de cliques

### UTM Parameters
- `utm_source=charlespersonal`
- `utm_medium=landingpage`
- `utm_campaign=treino_personalizado`

## 🔍 Meta Pixel (Facebook/Instagram)

### Configuração
- Pixel code no head
- Eventos de conversão
- Audiences personalizadas
- Remarketing setup

### Eventos
- `PageView`: Visualização da página
- `Lead`: Envio do formulário
- `Contact`: Click WhatsApp

## 📈 Ferramentas de Monitoramento

### Vercel Analytics
- Performance monitoring
- Core Web Vitals
- Visitor insights

### Hotjar (Opcional)
- Heatmaps
- Session recordings
- Feedback polls

## 🎯 KPIs e Métricas

### Conversões
- Taxa de conversão do formulário (meta: 3-5%)
- CTR MFit (meta: 15-20%)
- Engajamento WhatsApp (meta: 10-15%)

### Performance
- Core Web Vitals
- Tempo de carregamento
- Taxa de rejeição
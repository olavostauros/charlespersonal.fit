# IMAGES-README - Diretório de Imagens

Este diretório contém todas as imagens utilizadas na landing page do Charles Personal Trainer.

## 📁 Estrutura de Arquivos

### Imagens Principais
- **charles-hero.jpg** - Foto principal do Charles (seção Hero)
- **charles-training.jpg** - Charles em ação treinando (seção About/Services)
- **mfit-app-preview.png** - Preview do aplicativo MFit (seção Services)

### Imagens Futuras (Expansão)
- **testimonials/** - Fotos de clientes/depoimentos
- **certificates/** - Certificações e credenciais
- **before-after/** - Transformações de clientes
- **social-media/** - Ícones de redes sociais
- **icons/** - Ícones personalizados

## 🎨 Padrões e Especificações

### Otimização para Web
- **Formato**: JPG para fotos, PNG para interfaces, WebP quando possível
- **Compressão**: Máximo 200KB para imagens hero, 150KB para secundárias
- **Responsive**: Múltiplas resoluções (mobile, tablet, desktop)
- **Alt Text**: Todas as imagens devem ter descrições acessíveis

### Qualidade Visual
- **Resolução**: Mínimo 72 DPI para web
- **Proporções**: 16:9 para hero, 4:3 para perfil, 3:2 para ação
- **Consistência**: Paleta de cores alinhada com o design system
- **Profissionalismo**: Fotos de alta qualidade, bem iluminadas

### Performance
- **Lazy Loading**: Implementar carregamento sob demanda
- **Formatos Modernos**: WebP com fallback para JPG/PNG
- **CDN**: Considerar uso de CDN para otimização de entrega
- **Compression**: Tools como TinyPNG para otimização

## 🔧 Ferramentas Recomendadas

### Edição/Otimização
- **TinyPNG** - Compressão de imagens
- **Squoosh** - Conversor/otimizador Google
- **Photoshop/GIMP** - Edição avançada
- **Canva** - Design rápido para redes sociais

### Medidas e Testes
- **Google PageSpeed Insights** - Performance
- **GTmetrix** - Análise de carregamento
- **WebPageTest** - Testes detalhados

## 📱 Responsividade

### Breakpoints
- **Mobile**: 320px-768px
- **Tablet**: 768px-1024px
- **Desktop**: 1024px+

### Implementação
```html
<!-- Exemplo de uso responsivo -->
<picture>
  <source media="(max-width: 768px)" srcset="charles-hero-mobile.jpg">
  <source media="(max-width: 1024px)" srcset="charles-hero-tablet.jpg">
  <img src="charles-hero.jpg" alt="Charles Personal Trainer">
</picture>
```

## 🎯 Objetivos de Conversão

### Impacto Visual
- **Primeira impressão**: Hero image deve capturar atenção em 3 segundos
- **Credibilidade**: Fotos profissionais aumentam confiança
- **Conexão emocional**: Imagens devem gerar identificação
- **Call-to-Action**: Suporte visual para CTAs principais

### Métricas
- **Tempo de carregamento**: < 3 segundos
- **Taxa de bounce**: Redução com imagens otimizadas
- **Engajamento**: Aumento do tempo na página
- **Conversão**: Suporte às metas de lead generation

---

*Diretório preparado para receber as imagens reais do projeto Charles Personal Landing Page*

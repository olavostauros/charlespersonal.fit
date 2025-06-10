# Prompt: Inserção dos Dados Completos do Charles Personal

**Objetivo**: Atualizar todos os dados pessoais e profissionais do Charles Personal Trainer na codebase, substituindo placeholders e garantindo consistência em toda a aplicação.

## 📊 Dados Fornecidos para Inserção

### 📱 Contato
- **Telefone/WhatsApp**: +55 27 99622 4175
- **URL WhatsApp**: `https://wa.me/5527996224175`
- **Instagram**: https://www.instagram.com/charlestonpersonaltrainer
- **CREF**: 008165-G/ES

### 🔗 Links Importantes
- **Página MFit**: https://client.mfitpersonal.com.br/out/signup-link/ODY5NTY=

## 🎯 Locais para Atualização

### 1. Componente Header (`src/components/Header.astro`)
**Atualizações necessárias:**
- ✅ Verificar se número do WhatsApp está correto: `+55 27 99622 4175`
- ✅ Atualizar todas as URLs de WhatsApp para: `https://wa.me/5527996224175`
- ✅ Verificar link do Instagram

### 2. Componente Footer (`src/components/Footer.astro`)
**Atualizações necessárias:**
- ✅ Atualizar número de telefone: `(27) 99622-4175`
- ✅ URL WhatsApp: `https://wa.me/5527996224175`
- ✅ Confirmar link Instagram: `https://www.instagram.com/charlestonpersonaltrainer`

### 3. Componente CTASection (`src/components/CTASection.astro`)
**Atualizações necessárias:**
- ✅ Atualizar CREF de `CREF 123456-G/ES` para `CREF 008165-G/ES`
- ✅ Verificar todos os links do WhatsApp: `https://wa.me/5527996224175`
- ✅ Link Instagram correto
- ✅ Link MFit: `https://client.mfitpersonal.com.br/out/signup-link/ODY5NTY=`

### 4. Componente Services (`src/components/Services.astro`)
**Atualizações necessárias:**
- ✅ Todos os links WhatsApp com mensagens personalizadas usando: `5527996224175`
- ✅ Link MFit da seção: `https://client.mfitpersonal.com.br/out/signup-link/ODY5NTY=`

### 5. Layout Principal (`src/layouts/Layout.astro`)
**Atualizações necessárias:**
- ✅ Schema.org: WhatsApp `https://wa.me/5527996224175`
- ✅ Instagram no sameAs: `https://www.instagram.com/charlestonpersonaltrainer`

### 6. Página Principal (`src/pages/index.astro`)
**Atualizações necessárias:**
- ✅ Verificar todos os links WhatsApp na seção de contato
- ✅ Link MFit correto

### 7. Página de Agradecimento (`src/pages/obrigado.astro`)
**Atualizações necessárias:**
- ✅ Todos os links WhatsApp: `https://wa.me/5527996224175`
- ✅ Instagram: `https://www.instagram.com/charlestonpersonaltrainer`
- ✅ Links MFit: `https://client.mfitpersonal.com.br/out/signup-link/ODY5NTY=`

## 🔍 Padrões de Busca e Substituição

### Números de Telefone a Atualizar:
- `99622 4715` → `99622 4175`
- `996224715` → `996224175`
- `(27) 99622-4715` → `(27) 99622-4175`

### URLs WhatsApp a Atualizar:
- `wa.me/5527996224715` → `wa.me/5527996224175`

### CREF a Atualizar:
- `CREF 123456-G/ES` → `CREF 008165-G/ES`
- Qualquer outro placeholder de CREF

### Links MFit a Atualizar:
- `https://mfit.com.br/charles` → `https://client.mfitpersonal.com.br/out/signup-link/ODY5NTY=`
- `https://mfit.com.br/download` → `https://client.mfitpersonal.com.br/out/signup-link/ODY5NTY=`

## 📝 Mensagens WhatsApp Personalizadas

### Manter as mensagens existentes, mas atualizar o número:
- Header: `https://wa.me/5527996224175?text=Oi%20Charles!%20Vi%20seu%20site%20e%20quero%20conhecer%20seus%20treinos%20no%20MFit!`
- Hero: `https://wa.me/5527996224175?text=Oi%20Charles!%20Quero%20transformar%20meu%20corpo%20em%2090%20dias%20como%20você%20promete!`
- Services - Emagrecimento: `https://wa.me/5527996224175?text=Oi%20Charles!%20Quero%20saber%20mais%20sobre%20os%20treinos%20de%20emagrecimento%20no%20MFit!`
- Services - Massa: `https://wa.me/5527996224175?text=Oi%20Charles!%20Quero%20saber%20mais%20sobre%20os%20treinos%20de%20ganho%20de%20massa%20muscular%20no%20MFit!`
- Services - Condicionamento: `https://wa.me/5527996224175?text=Oi%20Charles!%20Quero%20saber%20mais%20sobre%20os%20treinos%20de%20condicionamento%20físico%20no%20MFit!`
- Services - Reabilitação: `https://wa.me/5527996224175?text=Oi%20Charles!%20Quero%20saber%20mais%20sobre%20os%20treinos%20de%20reabilitação%20e%20terceira%20idade%20no%20MFit!`
- CTA Final: `https://wa.me/5527996224175?text=Oi%20Charles!%20Estou%20pronto%20para%20começar%20minha%20transformação%20hoje!%20Pode%20me%20ajudar%20com%20um%20treino%20personalizado%3F`

## ✅ Verificações Finais

### Após as atualizações, verificar:
1. **Consistência**: Todos os números de telefone estão corretos
2. **Funcionalidade**: Links WhatsApp abrem com mensagens corretas
3. **Credibilidade**: CREF correto em todas as menções
4. **Integração**: Link MFit funcionando corretamente
5. **Social**: Instagram correto e funcional

### Arquivos que podem conter dados antigos:
- `src/components/*.astro`
- `src/pages/*.astro`
- `src/layouts/*.astro`
- `README.md`
- `public/public.md`
- `.github/prompts/*.md`

## 🚨 Atenção Especial

### Links Críticos para Verificar:
1. **WhatsApp**: +55 27 99622 4**1**75 (não 4715)
2. **CREF**: 008165-G/ES (formato correto com zeros à esquerda)
3. **MFit**: Link específico fornecido (não genérico)
4. **Instagram**: URL completa e funcional

### Não Alterar:
- Mensagens personalizadas (apenas o número)
- Estrutura dos componentes
- Estilos CSS
- Funcionalidades existentes

---

## 🎯 Resultado Esperado

Após a execução deste prompt, toda a aplicação deve conter:
- Número de telefone correto: +55 27 99622 4175
- CREF oficial: 008165-G/ES  
- Link MFit específico funcionando
- Instagram correto
- Consistência total entre todos os componentes

Este prompt garante que os dados pessoais e profissionais do Charles estejam corretos e atualizados em toda a codebase, mantendo a credibilidade e funcionalidade da landing page.
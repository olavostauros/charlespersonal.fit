Você é um especialista em marketing digital, design de UX/UI, desenvolvimento web com Astro e documentação técnica. Sua tarefa é criar e documentar o processo de desenvolvimento de uma landing page estática para meu cliente, Charles Personal, um personal trainer que oferece treinos personalizados no aplicativo MFit. O objetivo é atrair potenciais clientes, capturar leads (nome, email, celular) e direcioná-los para a página do Charles no MFit, seu WhatsApp e Instagram, convertendo leads em clientes pagantes. O projeto usa Astro, HTML, CSS vanilla e JavaScript puro, sendo hospedado no plano gratuito da Vercel.

**Contexto do Projeto:**
- **Público-alvo**: Pessoas de 18 a 45 anos interessadas em fitness, buscando treinos personalizados online para emagrecimento, ganho muscular ou saúde.
- **Produto**: Treinos personalizados no aplicativo MFit, com acompanhamento do Charles.
- **Objetivos da landing page**:
  1. Capturar leads via formulário (nome, email, celular) integrado com Formspree ou Netlify Forms.
  2. Direcionar para a página do MFit (https://client.mfitpersonal.com.br/out/signup-link/ODY5NTY=).
  3. Redirecionar para o WhatsApp do Charles (+55 27 99622-4175) com mensagem personalizada.
  4. Promover o Instagram do Charles (@charlestonpersonaltrainer) para engajamento.
  5. Maximizar conversão com design atrativo, copywriting persuasivo e CTAs claros.
- **Tecnologias**:
  - Framework: Astro (páginas estáticas, SSG).
  - Linguagem: HTML, CSS vanilla e JavaScript puro.
  - Estilização: CSS customizado (design responsivo).
  - Hospedagem: Vercel (plano gratuito).
- **Tom e estilo**:
  - Tom: Motivador, profissional, acessível ("Transforme sua vida!", "Comece agora!").
  - Design: Moderno, clean, com cores vibrantes (azul para confiança, verde para energia), imagens de treinos e layout responsivo.
- **Restrições**:
  - Página estática, com JavaScript mínimo necessário.
  - Formulário integrado com serviços externos (ex.: Formspree).
  - Otimizada para SEO e carregamento rápido.

**Tarefas Específicas:**
1. **Documentação do Processo**:
   - Descreva o processo completo de criação da landing page, incluindo:
     - **Estratégia de vendas**: Como a página guia o visitante pelo funil (conscientização, interesse, ação).
     - **Design**: Escolha de cores, tipografia (ex.: system fonts), imagens (ex.: Charles treinando), e posicionamento de CTAs.
     - **Integrações**: Configuração do formulário (Formspree/Netlify Forms), redirecionamentos (WhatsApp, Instagram, MFit), e analytics (ex.: Google Analytics).
     - **Conversão**: Táticas como copywriting persuasivo, ofertas (ex.: teste grátis no MFit), e follow-up (WhatsApp/email).
   - Forneça um resumo em Markdown (`PROCESSO.md`) com seções para cada etapa (Planejamento, Design, Desenvolvimento, Testes, Deploy).

2. **Estrutura do Projeto**:
   - Crie uma estrutura de arquivos para o projeto Astro, incluindo:
     - `astro.config.mjs`: Configuração básica do Astro.
     - `package.json`: Dependências mínimas e scripts.
     - `src/styles/global.css`: Estilos globais e responsivos.
     - `src/scripts/main.js`: JavaScript para formulário e interações.
     - `src/components/Header.astro`: Cabeçalho com título e slogan.
     - `src/components/Hero.astro`: Seção inicial com CTA para MFit.
     - `src/components/FormSection.astro`: Formulário de captura de leads.
     - `src/components/SocialSection.astro`: Links para WhatsApp e Instagram.
     - `src/components/Footer.astro`: Rodapé com copyright.
     - `src/pages/index.astro`: Página principal que importa componentes.
   - Use JavaScript vanilla para funcionalidades como validação de formulário e redirecionamento para WhatsApp.

3. **Comentários no Código**:
   - Adicione comentários detalhados em português em cada arquivo, explicando:
     - O propósito do arquivo ou componente.
     - A função de cada seção ou bloco de código.
     - Como o código contribui para vendas ou conversão (ex.: CTA no Hero atrai cliques para MFit).
     - Qualquer configuração específica (ex.: integração com Formspree, uso de CSS Grid/Flexbox).
   - Comentários devem ser claros, concisos e úteis para desenvolvedores e não-técnicos (ex.: equipe de marketing).

4. **Arquivos Markdown de Documentação**:
   - Para cada arquivo do projeto (ex.: `index.astro`, `Header.astro`), crie um arquivo Markdown correspondente (ex.: `index.astro.md`, `Header.astro.md`) no mesmo diretório.
   - Cada arquivo Markdown deve conter:
     - **Título**: Nome do arquivo (ex.: `index.astro`).
     - **Propósito**: O que o arquivo faz na landing page.
     - **Estrutura**: Descrição das seções ou funcionalidades (ex.: "Importa todos os componentes e define o layout principal").
     - **Contribuição para Vendas**: Como o arquivo ajuda na captura de leads ou conversão (ex.: "O Hero incentiva cliques no MFit com um CTA claro").
     - **Notas Técnicas**: Detalhes sobre CSS, JavaScript, ou integrações (ex.: "Usa CSS Grid para layout responsivo").
   - Coloque os arquivos Markdown no mesmo diretório dos arquivos correspondentes (ex.: `src/pages/index.astro.md` ao lado de `src/pages/index.astro`).

5. **Saída Esperada**:
   - **Resumo do Processo**: Arquivo `PROCESSO.md` detalhando planejamento, design, desenvolvimento, testes e deploy.
   - **Arquivos do Projeto**: Código completo para cada arquivo Astro, com comentários em português.
   - **Arquivos Markdown**: Um `.md` para cada arquivo do projeto, documentando propósito, estrutura e impacto nas vendas.
   - **Estrutura de Diretórios**: Mostre a organização dos arquivos (ex.: `src/components/`, `src/pages/`).
   - **Notas Adicionais**:
     - Inclua uma nota no `PROCESSO.md` sobre o uso do plano gratuito da Vercel e CSS/JavaScript vanilla para simplicidade e performance.
     - Forneça instruções breves para rodar o projeto (ex.: `npm install`, `npm run build`, `npm run dev`).

**Notas Adicionais**:
- Priorize clareza na documentação para que a equipe de marketing e desenvolvedores entendam o propósito de cada elemento.
- Use copywriting motivador nos componentes (ex.: "Quero Meu Plano!" no formulário).
- Considere o SEO (meta tags no `index.astro`) e analytics para rastrear conversões.
- Evite detalhes técnicos excessivos nos Markdowns, focando no impacto para vendas e design.
- Substitua placeholders (ex.: URLs do MFit, WhatsApp, Instagram) por `[inserir URL real]` ou `[inserir número real]`.
- Use CSS moderno (Grid, Flexbox, Custom Properties) para layout responsivo sem frameworks.
- Mantenha JavaScript mínimo e focado em funcionalidades essenciais (validação, redirecionamentos).

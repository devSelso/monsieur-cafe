# ☕ Monsieur Café — Landing Page

Landing page moderna, responsiva e sofisticada para a cafeteria **Monsieur** — inspirada nos bistrôs parisienses.

## 🚀 Tech Stack

| Tecnologia | Uso |
|---|---|
| [Next.js 14](https://nextjs.org/) | Framework React com App Router e SSR |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática |
| [Tailwind CSS](https://tailwindcss.com/) | Estilização utilitária |
| [Framer Motion](https://www.framer.com/motion/) | Animações de scroll e hover |
| [Lucide React](https://lucide.dev/) | Ícones |


## ✨ Funcionalidades

- **Navbar fixo** com fundo translúcido (`backdrop-blur`) ao rolar a página
- **Hero em tela cheia** (`h-screen`) com parallax, overlay e animações de entrada
- **Seção Sobre** com foto, badge animado e destaques da cafeteria
- **Cardápio com abas** alternando entre Cafés & Bebidas e Acompanhamentos
- **Galeria** em CSS Grid com efeito de zoom e overlay no hover
- **Depoimentos** com cards de avaliação 5 estrelas
- **Footer completo** com horários, contato, redes sociais e newsletter
- **Totalmente responsivo** para mobile, tablet e desktop
- **SEO otimizado** com metadata, Open Graph e tags semânticas HTML5


## 📁 Estrutura do Projeto

```
monsieur-nextjs/
├── app/
│   ├── favicon.ico          # Favicon da aplicação
│   ├── globals.css          # Estilos globais e importação de fontes
│   ├── layout.tsx           # Layout raiz com metadata e SEO
│   └── page.tsx             # Página principal (composição dos componentes)
├── components/
│   ├── Navbar.tsx           # Menu de navegação fixo com menu mobile
│   ├── Hero.tsx             # Seção hero em tela cheia
│   ├── About.tsx            # História e diferenciais da cafeteria
│   ├── Menu.tsx             # Cardápio com abas interativas
│   ├── Gallery.tsx          # Grade de fotos do ambiente
│   ├── Testimonials.tsx     # Avaliações de clientes
│   └── Footer.tsx           # Rodapé com contato e newsletter
├── next.config.js           # Configuração do Next.js (imagens Unsplash)
├── tailwind.config.ts       # Paleta de cores customizada
├── postcss.config.js
├── tsconfig.json
└── package.json
```

## 🎨 Paleta de Cores

| Nome | Hex | Uso |
|---|---|---|
| Cream | `#FDFBF7` | Fundo principal |
| Cream Dark | `#F5F0E8` | Fundo de seções alternadas |
| Navy | `#1A2421` | Texto principal e seções escuras |
| Gold | `#D4AF37` | Destaques, botões e detalhes |
| Gold Light | `#E8C84A` | Hover dos botões |

**Fontes:**
- **Playfair Display** — títulos e headings
- **Cormorant Garamond** — corpo de texto
- **DM Mono** — labels, tags e elementos monoespaçados


## ⚙️ Como Rodar Localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- npm v9 ou superior

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/devselso/monsieur-cafe.git

# 2. Entre na pasta
cd monsieur-cafe

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse **http://localhost:3000** no navegador.


## 🔍 SEO

A página utiliza a **Metadata API do Next.js** com:

- `title` e `description` otimizados
- `keywords` relevantes para o nicho
- **Open Graph** para compartilhamento em redes sociais
- **Twitter Card** com imagem de preview
- Tags semânticas HTML5: `<main>`, `<section>`, `<article>`, `<address>`, `<blockquote>`, `<time>`
- Todas as imagens com atributo `alt` descritivo
- Componente `<Image />` do Next.js para otimização automática (lazy loading, WebP, tamanhos responsivos)


## 🖼️ Favicon

Para adicionar um favicon, coloque o arquivo na pasta `app/`:

```
app/
├── favicon.ico        # Detectado automaticamente pelo Next.js
├── icon.png           # Alternativa em PNG
└── apple-icon.png     # Ícone para dispositivos Apple (180×180px)
```

Gere seu favicon em [favicon.io](https://favicon.io) ou [realfavicongenerator.net](https://realfavicongenerator.net).


## 📦 Deploy

### O Site já está no ar!

1. Acesse [Monsieur](https://monsieur-cafe.vercel.app/)

## 📄 Licença

Este projeto foi desenvolvido para fins de portfólio e demonstração. Sinta-se livre para usar como base para seus projetos.







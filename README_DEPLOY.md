# AutoZap IA - Landing Page

Landing page profissional para apresentar o AutoZap IA, uma aplicação desktop para automação de atendimento no WhatsApp usando inteligência artificial.

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React moderno
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização responsiva
- **Lucide React** - Ícones de alta qualidade

## 📋 Estrutura do Projeto

```
autozap-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Layout principal
│   │   ├── page.tsx         # Landing page completa
│   │   └── globals.css      # Estilos globais
│   └── components/          # Componentes reutilizáveis
├── public/
│   └── images/              # Screenshots do sistema
├── package.json             # Dependências do projeto
├── tsconfig.json            # Configuração TypeScript
├── tailwind.config.ts       # Configuração Tailwind
└── next.config.ts           # Configuração Next.js
```

## 🎨 Seções da Landing Page

1. **Hero Section** - Título impactante com CTA principal
2. **Vídeo de Demonstração** - Espaço para embed de vídeo
3. **Funcionalidades** - 6 cards destacando principais features
4. **Como Funciona** - 3 passos explicativos com testimonial
5. **Screenshots** - Galeria de imagens do sistema
6. **Tecnologias** - Stack de tecnologias utilizadas
7. **CTA Final** - Chamada para ação
8. **Footer** - Links de contato (LinkedIn, GitHub, Email)

## 🔧 Instalação Local

1. **Clone o repositório:**
```bash
git clone <seu-repositorio>
cd autozap-landing
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Execute o servidor de desenvolvimento:**
```bash
npm run dev
```

4. **Acesse a página:**
Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📦 Build para Produção

```bash
npm run build
npm start
```

## 🚀 Deploy na Vercel

### Opção 1: Via GitHub (Recomendado)

1. **Push do código para GitHub:**
```bash
git add .
git commit -m "Initial commit: AutoZap IA landing page"
git push origin main
```

2. **Conecte ao Vercel:**
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "New Project"
   - Selecione seu repositório GitHub
   - Clique em "Import"

3. **Configuração automática:**
   - Vercel detectará Next.js automaticamente
   - Não há variáveis de ambiente necessárias
   - Clique em "Deploy"

### Opção 2: CLI do Vercel

1. **Instale o CLI:**
```bash
npm i -g vercel
```

2. **Deploy:**
```bash
vercel
```

3. **Siga as instruções interativas**

### Opção 3: Drag & Drop

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Arraste a pasta do projeto

## 📝 Customizações Recomendadas

### 1. Adicionar Vídeo de Demonstração

No arquivo `src/app/page.tsx`, substitua a seção Hero:

```tsx
<div className="w-full aspect-video bg-slate-100 flex items-center justify-center">
  <iframe
    width="100%"
    height="100%"
    src="https://www.youtube.com/embed/SEU_VIDEO_ID"
    title="AutoZap IA Demo"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>
```

### 2. Adicionar Screenshots

Renomeie as imagens conforme sugerido:
- `dash.jpg` - Dashboard
- `produto.jpg` - Produtos
- `diagnostico.jpg` - Diagnóstico
- `disparo1.jpg` e `disparo2.jpg` - Disparos
- `treinamento.jpg` - Treinamento
- `adm.jpg` - Admin
- `config.jpg` - Configurações
- `agendamento.jpg` - Agendamentos

Adicione uma seção de Screenshots:

```tsx
<section id="screenshots" className="py-24 bg-slate-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold">Interface Moderna e Intuitiva</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Adicione imagens aqui */}
    </div>
  </div>
</section>
```

### 3. Atualizar Links de Contato

No footer, atualize os links:

```tsx
<a href="https://linkedin.com/in/seu-perfil" target="_blank">
  <Linkedin className="h-6 w-6" />
</a>
<a href="https://github.com/seu-usuario" target="_blank">
  <Github className="h-6 w-6" />
</a>
<a href="mailto:seu-email@example.com">
  <Mail className="h-6 w-6" />
</a>
```

### 4. Atualizar Metadados

No arquivo `src/app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: "AutoZap IA - Automação Inteligente para WhatsApp",
  description: "Transforme mensagens do WhatsApp em oportunidades de venda com o AutoZap IA.",
  keywords: "WhatsApp, IA, Automação, Atendimento, Vendas",
  authors: [{ name: "Seu Nome" }],
};
```

## 🎯 SEO e Performance

- ✅ Next.js Image Optimization
- ✅ Tailwind CSS (CSS-in-JS otimizado)
- ✅ Responsive Design (Mobile-first)
- ✅ Semantic HTML
- ✅ Meta tags otimizadas
- ✅ Fast Load Times

## 📱 Responsividade

A landing page é totalmente responsiva:
- ✅ Mobile (< 640px)
- ✅ Tablet (640px - 1024px)
- ✅ Desktop (> 1024px)

## 🔐 Segurança

- ✅ Sem dependências de segurança crítica
- ✅ Código TypeScript type-safe
- ✅ Sem dados sensíveis no código
- ✅ HTTPS automático na Vercel

## 📞 Suporte

Para dúvidas ou sugestões:
- GitHub Issues: [seu-repositorio/issues](https://github.com/seu-usuario/seu-repositorio/issues)
- Email: seu-email@example.com
- LinkedIn: [seu-perfil](https://linkedin.com/in/seu-perfil)

## 📄 Licença

Este projeto está sob a licença MIT.

---

**Desenvolvido com ❤️ para o AutoZap IA**

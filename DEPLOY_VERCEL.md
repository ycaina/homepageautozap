# 🚀 Deploy na Vercel - Guia Rápido

## Pré-requisitos
- Conta GitHub
- Conta Vercel (gratuita em https://vercel.com)

## Passo 1: Preparar o Repositório Git

```bash
cd autozap-landing
git init
git add .
git commit -m "Initial commit: AutoZap IA landing page"
```

## Passo 2: Criar Repositório no GitHub

1. Acesse https://github.com/new
2. Nome: `autozap-landing`
3. Descrição: "Landing page profissional para AutoZap IA"
4. Escolha: Private (recomendado)
5. Clique em "Create repository"

## Passo 3: Push para GitHub

```bash
git remote add origin https://github.com/SEU_USUARIO/autozap-landing.git
git branch -M main
git push -u origin main
```

## Passo 4: Deploy na Vercel

### Opção A: Dashboard da Vercel (Mais Fácil)

1. Acesse https://vercel.com/dashboard
2. Clique em "New Project"
3. Selecione seu repositório `autozap-landing`
4. Clique em "Import"
5. Vercel detectará Next.js automaticamente
6. Clique em "Deploy"

### Opção B: CLI da Vercel

```bash
npm i -g vercel
vercel
# Siga as instruções interativas
```

## Passo 5: Configurar Domínio Customizado (Opcional)

1. No dashboard da Vercel, vá para "Settings"
2. Clique em "Domains"
3. Adicione seu domínio customizado
4. Siga as instruções de DNS

## ✅ Pronto!

Sua landing page estará disponível em:
- `https://autozap-landing.vercel.app` (automático)
- Ou seu domínio customizado

## 📝 Próximos Passos

1. **Adicionar Vídeo de Demonstração**
   - Substitua o placeholder no Hero Section
   - Use YouTube, Vimeo ou hospedagem própria

2. **Integrar Screenshots**
   - As imagens já estão em `public/images/`
   - Crie uma seção de galeria

3. **Atualizar Links de Contato**
   - LinkedIn
   - GitHub
   - Email

4. **Monitorar Analytics**
   - Integre Google Analytics
   - Use Vercel Analytics

## 🔄 Atualizações Futuras

Qualquer push para `main` no GitHub dispara deploy automático na Vercel!

```bash
git add .
git commit -m "Descrição das mudanças"
git push origin main
# Deploy automático em ~1 minuto
```

## 📊 Verificar Status

- Dashboard: https://vercel.com/dashboard
- Logs de Build: Clique no projeto > "Deployments"
- Erros: Clique em "Logs" para detalhes

## 🆘 Troubleshooting

**Erro: "Build failed"**
- Verifique `npm run build` localmente
- Veja logs no dashboard da Vercel

**Página em branco**
- Limpe cache do navegador
- Aguarde ~5 minutos para propagação

**Imagens não aparecem**
- Verifique se estão em `public/images/`
- Use caminhos relativos: `/images/nome.jpg`

---

**Suporte:** Consulte README_DEPLOY.md para mais detalhes

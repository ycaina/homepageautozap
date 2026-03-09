'use client';

import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  BarChart3,
  Bot,
  Gauge,
  MessageSquare,
  Moon,
  Play,
  ScanSearch,
  Send,
  ShieldCheck,
  Sun,
  TriangleAlert,
  Video,
  Zap,
} from 'lucide-react';

type ThemeMode = 'dark' | 'light';

type ScreenshotItem = {
  id: string;
  title: string;
  description: string;
  src: string;
};

const THEME_KEY = 'autozap_theme';

const SECONDARY_SCREENSHOTS: ScreenshotItem[] = [
  {
    id: 'produtos',
    title: 'Produtos',
    description: 'Catalogo e estoque com foco em sugestao comercial durante o atendimento.',
    src: '/images/produtos.jpg',
  },
  {
    id: 'diagnosticos',
    title: 'Diagnosticos',
    description: 'Visao operacional para monitorar saude do ambiente e comportamento da IA.',
    src: '/images/diagnosticos.jpg',
  },
  {
    id: 'agendamento',
    title: 'Agendamento',
    description: 'Gestao de rotinas e programacoes para operacao continua e previsivel.',
    src: '/images/agendamento.jpg',
  },
  {
    id: 'treinamento',
    title: 'Treinamento',
    description: 'Base de conhecimento para ajustar respostas ao contexto real do negocio.',
    src: '/images/treinamento.jpg',
  },
  {
    id: 'admin',
    title: 'Admin',
    description: 'Controle de usuarios e configuracoes administrativas do sistema.',
    src: '/images/admin.jpg',
  },
];

const FEATURES = [
  {
    icon: <Bot className="h-5 w-5" />,
    title: 'Atendimento com IA aplicada',
    description: 'Respostas contextualizadas com roteamento comercial e suporte a multiplos provedores.',
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: 'Operacao orientada por dados',
    description: 'Diagnosticos, status e historicos para acompanhar performance em tempo real.',
  },
  {
    icon: <ScanSearch className="h-5 w-5" />,
    title: 'Treinamento e catalogo integrados',
    description: 'Produtos, estoque e base de treinamento em um fluxo unico de atendimento.',
  },
  {
    icon: <Send className="h-5 w-5" />,
    title: 'Automacao de disparos',
    description: 'Rotinas e campanhas para grupos, status e sequencias operacionais.',
  },
  {
    icon: <Gauge className="h-5 w-5" />,
    title: 'Fluxo humano + automatico',
    description: 'Alternancia de operacao assistida sem perder controle do historico.',
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: 'Aplicacao desktop de uso real',
    description: 'Interface de painel tecnico para rotina de atendimento e vendas.',
  },
];

function ThemeToggle({ theme, onToggle }: { theme: ThemeMode; onToggle: () => void }) {
  const isDark = theme === 'dark';
  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex h-9 items-center gap-2 rounded-xl border border-[var(--az-border)] bg-[var(--az-surface)] px-3 text-xs font-semibold text-[var(--az-text)] shadow-[var(--az-shadow-soft)] transition hover:bg-[var(--az-surface-2)]"
      aria-label="Alternar tema"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      {isDark ? 'Claro' : 'Escuro'}
    </button>
  );
}

export default function Home() {
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [activeSecondaryId, setActiveSecondaryId] = useState<string>(SECONDARY_SCREENSHOTS[0].id);

  useEffect(() => {
    let resolved: ThemeMode = 'dark';
    try {
      const saved = window.localStorage.getItem(THEME_KEY);
      if (saved === 'dark' || saved === 'light') {
        resolved = saved;
      }
    } catch {
      resolved = 'dark';
    }

    setTheme(resolved);
    document.documentElement.setAttribute('data-theme', resolved);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      window.localStorage.setItem(THEME_KEY, theme);
    } catch {
      // no-op
    }
  }, [theme]);

  const activeSecondary = useMemo(
    () => SECONDARY_SCREENSHOTS.find((item) => item.id === activeSecondaryId) || SECONDARY_SCREENSHOTS[0],
    [activeSecondaryId]
  );

  return (
    <div className="min-h-screen bg-[var(--az-bg)] text-[var(--az-text)] selection:bg-[var(--az-accent-blue)]/30">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(1200px_520px_at_14%_-2%,rgba(61,124,240,0.22),transparent_60%),radial-gradient(980px_480px_at_90%_8%,rgba(28,179,135,0.15),transparent_58%),linear-gradient(180deg,var(--az-bg)_0%,var(--az-bg-elevated)_45%,var(--az-bg)_100%)]" />
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-72 bg-[linear-gradient(180deg,rgba(61,124,240,0.18),transparent)]" />

      <header className="sticky top-0 z-40 border-b border-[var(--az-border)] bg-[color-mix(in_oklab,var(--az-bg),transparent_12%)]/92 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#hero" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[linear-gradient(145deg,var(--az-accent-blue),#2b63d3)] text-white shadow-[var(--az-shadow-soft)]">
              <Zap className="h-4 w-4" />
            </span>
            <span className="text-sm font-bold tracking-[0.01em] sm:text-base">AutoZap IA</span>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-[var(--az-text-muted)] md:flex">
            <a href="#features" className="transition hover:text-[var(--az-text)]">Funcionalidades</a>
            <a href="#screenshots" className="transition hover:text-[var(--az-text)]">Interface</a>
            <a href="#video-demo" className="transition hover:text-[var(--az-text)]">Video</a>
          </nav>

          <ThemeToggle theme={theme} onToggle={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))} />
        </div>
      </header>

      <main>
        <section id="hero" className="mx-auto w-full max-w-6xl px-4 pb-24 pt-16 sm:px-6 sm:pt-24">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--az-border)] bg-[var(--az-surface)] px-3 py-1 text-xs font-semibold text-[var(--az-text-muted)] shadow-[var(--az-shadow-soft)]">
                <span className="h-2 w-2 rounded-full bg-[var(--az-accent-green)]" />
                Plataforma de atendimento e vendas com IA
              </p>

              <h1 className="text-4xl font-black leading-[1.04] tracking-[-0.03em] sm:text-6xl">
                Venda mais no WhatsApp com
                <span className="block text-[var(--az-accent-blue)]">IA, catalogo e automacao no mesmo painel</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--az-text-muted)]">
                Centralize atendimento, recomendacao de produtos, diagnosticos e campanhas em uma operacao unica. Mais velocidade, mais consistencia e menos retrabalho manual.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#screenshots"
                  className="inline-flex items-center gap-2 rounded-xl bg-[var(--az-accent-blue)] px-4 py-2.5 text-sm font-semibold text-white shadow-[var(--az-shadow-soft)] transition hover:brightness-110"
                >
                  <Play className="h-4 w-4" />
                  Ver interface real
                </a>
                <a
                  href="#video-demo"
                  className="inline-flex items-center gap-2 rounded-xl border border-[var(--az-border)] bg-[var(--az-surface)] px-4 py-2.5 text-sm font-semibold text-[var(--az-text)] shadow-[var(--az-shadow-soft)] transition hover:bg-[var(--az-surface-2)]"
                >
                  <Video className="h-4 w-4" />
                  Assistir demonstracao
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-3 rounded-[28px] bg-[radial-gradient(circle_at_top,rgba(61,124,240,0.28),transparent_62%)] blur-md" />
              <div className="relative overflow-hidden rounded-[22px] border border-[var(--az-border-strong)] bg-[var(--az-surface)] shadow-[var(--az-shadow-lift)]">
                <div className="flex items-center justify-between border-b border-[var(--az-border)] bg-[var(--az-surface-2)] px-4 py-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#fb923c]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#4ade80]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#60a5fa]" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--az-text-muted)]">Preview real do dashboard</span>
                </div>
                <img src="/images/dashboard.jpg" alt="Dashboard real do AutoZap IA" className="block h-auto w-full" />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 pb-6 sm:px-6">
          <div className="grid gap-4 rounded-2xl border border-[var(--az-border-strong)] bg-[var(--az-surface)] p-5 shadow-[var(--az-shadow-soft)] md:grid-cols-2 md:p-6">
            <article className="rounded-xl border border-[color-mix(in_oklab,var(--az-accent-blue),var(--az-border)_58%)] bg-[color-mix(in_oklab,var(--az-accent-blue),transparent_90%)] p-4">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--az-accent-blue)]">
                <TriangleAlert className="h-4 w-4" />
                Problema
              </p>
              <h3 className="mt-2 text-lg font-bold">Atendimento manual no WhatsApp nao escala</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--az-text-muted)]">
                Equipes perdem contexto, demoram para responder e deixam oportunidades de venda escapar no fluxo do dia.
              </p>
            </article>
            <article className="rounded-xl border border-[color-mix(in_oklab,var(--az-accent-green),var(--az-border)_58%)] bg-[color-mix(in_oklab,var(--az-accent-green),transparent_90%)] p-4">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--az-accent-green)]">
                <ArrowRight className="h-4 w-4" />
                Solucao AutoZap
              </p>
              <h3 className="mt-2 text-lg font-bold">IA + catalogo + automacao em operacao unica</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--az-text-muted)]">
                O AutoZap organiza atendimento, recomenda produtos com base no estoque e ativa campanhas com monitoramento centralizado.
              </p>
            </article>
          </div>
        </section>

        <section id="features" className="border-y border-[var(--az-border)] bg-[var(--az-bg-elevated)] py-20">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="mb-12 max-w-2xl">
              <h2 className="text-3xl font-extrabold tracking-[-0.01em] sm:text-4xl">Funcionalidades principais</h2>
              <p className="mt-4 text-base text-[var(--az-text-muted)]">
                Recursos essenciais do AutoZap em linguagem visual clara e profissional.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-2xl border border-[var(--az-border-strong)] bg-[var(--az-surface)] p-5 shadow-[var(--az-shadow-soft)] transition duration-200 hover:-translate-y-1 hover:border-[var(--az-accent-blue)] hover:shadow-[var(--az-shadow-lift)]"
                >
                  <div className="mb-3 inline-flex rounded-lg bg-[var(--az-accent-blue)]/15 p-2 text-[var(--az-accent-blue)]">
                    {feature.icon}
                  </div>
                  <h3 className="text-base font-bold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--az-text-muted)]">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="video-demo" className="border-y border-[var(--az-border)] bg-[var(--az-bg-elevated)] py-20">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="mx-auto mb-8 max-w-4xl text-center">
              <h2 className="text-3xl font-extrabold tracking-[-0.01em] sm:text-4xl">Veja o AutoZap IA em ação</h2>
              <p className="mt-4 text-base text-[var(--az-text-muted)]">
                Assista a uma demonstracao rapida do AutoZap IA mostrando como o sistema conecta ao WhatsApp, analisa mensagens e automatiza o atendimento com inteligencia artificial.
              </p>
            </div>

            <div className="mx-auto w-full max-w-[1100px] overflow-hidden rounded-2xl border border-[var(--az-border-strong)] bg-[var(--az-surface)] p-3 shadow-[var(--az-shadow-lift)] sm:p-4">
              <iframe
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/PwBNaMb6_VM"
                title="AutoZap IA Demonstracao"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="block w-full rounded-xl"
              />
            </div>
          </div>
        </section>
        <section id="screenshots" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
          <div className="mb-10">
            <h2 className="text-3xl font-extrabold tracking-[-0.01em] sm:text-4xl">Screenshots reais do produto</h2>
            <p className="mt-4 max-w-3xl text-base text-[var(--az-text-muted)]">
              Dashboard em destaque e navegacao limpa pelas demais telas operacionais.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--az-border-strong)] bg-[var(--az-surface)] p-4 shadow-[var(--az-shadow-lift)] sm:p-5">
            <div className="grid gap-6 lg:grid-cols-[1.24fr_0.76fr]">
              <article className="overflow-hidden rounded-2xl border border-[var(--az-border-strong)] bg-[var(--az-bg-elevated)] shadow-[var(--az-shadow-soft)]">
                <div className="border-b border-[var(--az-border)] px-4 py-3">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--az-text-muted)]">Destaque principal</p>
                  <h3 className="mt-1 text-lg font-bold">Dashboard operacional</h3>
                </div>
                <img src="/images/dashboard.jpg" alt="Dashboard AutoZap IA" className="block h-auto w-full" />
              </article>

              <article className="rounded-2xl border border-[var(--az-border)] bg-[var(--az-surface-2)] p-4 shadow-[var(--az-shadow-soft)]">
                <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--az-text-muted)]">Telas complementares</h3>
                <div className="mt-3 overflow-hidden rounded-xl border border-[var(--az-border-strong)] shadow-[var(--az-shadow-soft)]">
                  <img src={activeSecondary.src} alt={activeSecondary.title} className="block h-auto w-full" />
                </div>
                <p className="mt-3 text-sm font-semibold">{activeSecondary.title}</p>
                <p className="mt-1 text-sm text-[var(--az-text-muted)]">{activeSecondary.description}</p>

                <div className="mt-4 grid grid-cols-2 gap-2.5">
                  {SECONDARY_SCREENSHOTS.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveSecondaryId(item.id)}
                      className={`rounded-lg border px-2.5 py-2 text-left text-xs font-semibold transition ${
                        activeSecondaryId === item.id
                          ? 'border-[var(--az-accent-blue)] bg-[var(--az-accent-blue)]/18 text-[var(--az-text)] shadow-[0_0_0_1px_rgba(61,124,240,0.4)]'
                          : 'border-[var(--az-border)] bg-[var(--az-surface)] text-[var(--az-text-muted)] hover:border-[var(--az-border-strong)] hover:text-[var(--az-text)]'
                      }`}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              </article>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-[var(--az-border)] bg-[var(--az-surface)] p-4 shadow-[var(--az-shadow-soft)] sm:p-6">
            <div className="mb-5">
              <h3 className="text-lg font-bold">Automacao de disparos</h3>
              <p className="mt-1 text-sm text-[var(--az-text-muted)]">
                Bloco dedicado para campanhas e rotinas, separado da navegacao principal.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <figure className="overflow-hidden rounded-xl border border-[var(--az-border)] bg-[var(--az-bg-elevated)] shadow-[var(--az-shadow-soft)]">
                <img src="/images/disparo-1.jpg" alt="Tela de disparo 1" className="block h-auto w-full" />
                <figcaption className="border-t border-[var(--az-border)] px-3 py-2 text-xs text-[var(--az-text-muted)]">Disparo 1</figcaption>
              </figure>
              <figure className="overflow-hidden rounded-xl border border-[var(--az-border)] bg-[var(--az-bg-elevated)] shadow-[var(--az-shadow-soft)]">
                <img src="/images/disparo-2.jpg" alt="Tela de disparo 2" className="block h-auto w-full" />
                <figcaption className="border-t border-[var(--az-border)] px-3 py-2 text-xs text-[var(--az-text-muted)]">Disparo 2</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section id="flow" className="bg-[var(--az-bg-elevated)] py-20">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <h2 className="text-3xl font-extrabold tracking-[-0.01em] sm:text-4xl">Como funciona na pratica</h2>
            <div className="mt-9 grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-[var(--az-border)] bg-[var(--az-surface)] p-5 shadow-[var(--az-shadow-soft)]">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--az-accent-blue)]">01</p>
                <h3 className="mt-2 font-bold">Conecta e opera</h3>
                <p className="mt-2 text-sm text-[var(--az-text-muted)]">Conexao com WhatsApp e inicio do painel em poucos passos.</p>
              </div>
              <div className="rounded-2xl border border-[var(--az-border)] bg-[var(--az-surface)] p-5 shadow-[var(--az-shadow-soft)]">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--az-accent-blue)]">02</p>
                <h3 className="mt-2 font-bold">Treina e configura</h3>
                <p className="mt-2 text-sm text-[var(--az-text-muted)]">Prompt, treinamento e regras comerciais alinhadas ao negocio.</p>
              </div>
              <div className="rounded-2xl border border-[var(--az-border)] bg-[var(--az-surface)] p-5 shadow-[var(--az-shadow-soft)]">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--az-accent-blue)]">03</p>
                <h3 className="mt-2 font-bold">Atende e escala</h3>
                <p className="mt-2 text-sm text-[var(--az-text-muted)]">Fluxo automatico com monitoramento e opcao de intervencao humana.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--az-border)] bg-[var(--az-bg)] py-9">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 text-xs text-[var(--az-text-muted)] sm:px-6">
          <p className="font-semibold text-[var(--az-text)]">AutoZap IA</p>
          <p>Aplicacao desktop para atendimento e vendas com IA no WhatsApp.</p>
        </div>
      </footer>
    </div>
  );
}


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
  QrCode,
  ScanSearch,
  Send,
  ShieldCheck,
  Smartphone,
  Sun,
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
    id: 'config-v2',
    title: 'Configuracoes',
    description: 'Controle da IA, modo hibrido e parametros de operacao.',
    src: '/images/configuracoes-v2.jpg',
  },
  {
    id: 'treinamento-v2',
    title: 'Treinamento',
    description: 'Fluxos e base de resposta para operacao por nicho.',
    src: '/images/treinamento-v2.jpg',
  },
  {
    id: 'diagnosticos-v2',
    title: 'Diagnosticos',
    description: 'Metricas de fila da LLM, fallback e roteamento de resposta.',
    src: '/images/diagnosticos-v2.jpg',
  },
  {
    id: 'produtos',
    title: 'Produtos + Estoque',
    description: 'Cadastro comercial com pronta entrega para resposta automatica.',
    src: '/images/produtos.jpg',
  },
  {
    id: 'agendamento',
    title: 'Scheduler / Agendamento',
    description: 'Rotinas, disparos e integracao com API de agendamentos.',
    src: '/images/agendamento.jpg',
  },
  {
    id: 'admin',
    title: 'Admin',
    description: 'Controle de usuarios e sessao.',
    src: '/images/admin.jpg',
  },
];

const FEATURES = [
  {
    icon: <Bot className="h-5 w-5" />,
    title: 'Atendimento com IA e modo hibrido',
    description: 'Opera com Gemini, GPT, IA local ou combinacao com fluxo treinado.',
  },
  {
    icon: <ScanSearch className="h-5 w-5" />,
    title: 'Catalogo com estoque real no chat',
    description: 'Quando o cliente pede catalogo/pronta entrega, o retorno vem do estoque real.',
  },
  {
    icon: <Smartphone className="h-5 w-5" />,
    title: 'Acesso mobile remoto',
    description: 'Login no celular com QR Code e interface responsiva da mesma instancia.',
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: 'Seguranca de sessao mobile',
    description: 'Token temporario, heartbeat, revogacao e encerramento quando desktop fecha.',
  },
  {
    icon: <MessageSquare className="h-5 w-5" />,
    title: 'Audio refinado',
    description: 'Transcricao local melhorada e tratamento de texto para evitar caracteres quebrados.',
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: 'Diagnostico operacional',
    description: 'Monitora fila global da LLM, tempo de inferencia, fallback e cobertura sem LLM.',
  },
  {
    icon: <Gauge className="h-5 w-5" />,
    title: 'Teste e simulacao de atendimento',
    description: 'Simulador de carga para validar lock por chat, debounce e comportamento em alta demanda.',
  },
  {
    icon: <Send className="h-5 w-5" />,
    title: 'Campanhas e automacao',
    description: 'Disparo e scheduler com fluxo comercial integrado.',
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
            <a href="#v2" className="transition hover:text-[var(--az-text)]">V2</a>
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
                Versao atualizada com mobile remoto e observabilidade
              </p>

              <h1 className="text-4xl font-black leading-[1.04] tracking-[-0.03em] sm:text-6xl">
                AutoZap IA V2
                <span className="block text-[var(--az-accent-blue)]">atendimento real, fluxo hibrido e operacao segura</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--az-text-muted)]">
                Plataforma desktop para atendimento no WhatsApp com IA, estoque, automacao e agora com acesso mobile remoto via QR Code da mesma instancia.
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
                  href="#v2"
                  className="inline-flex items-center gap-2 rounded-xl border border-[var(--az-border)] bg-[var(--az-surface)] px-4 py-2.5 text-sm font-semibold text-[var(--az-text)] shadow-[var(--az-shadow-soft)] transition hover:bg-[var(--az-surface-2)]"
                >
                  <QrCode className="h-4 w-4" />
                  Novidades V2
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
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--az-text-muted)]">Dashboard atualizado</span>
                </div>
                <img src="/images/dashboard-novo.jpg" alt="Dashboard atualizado do AutoZap IA" className="block h-auto w-full" />
              </div>
            </div>
          </div>
        </section>

        <section id="v2" className="mx-auto w-full max-w-6xl px-4 pb-6 sm:px-6">
          <div className="grid gap-4 rounded-2xl border border-[var(--az-border-strong)] bg-[var(--az-surface)] p-5 shadow-[var(--az-shadow-soft)] md:grid-cols-2 md:p-6">
            <article className="rounded-xl border border-[color-mix(in_oklab,var(--az-accent-blue),var(--az-border)_58%)] bg-[color-mix(in_oklab,var(--az-accent-blue),transparent_90%)] p-4">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--az-accent-blue)]">
                <Smartphone className="h-4 w-4" />
                Mobile remoto
              </p>
              <h3 className="mt-2 text-lg font-bold">QR Code + sessao mobile segura na mesma instancia desktop</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--az-text-muted)]">
                Agora o usuario acessa pelo celular com token temporario, heartbeat e revogacao por sessao. Se o desktop fechar, as sessoes mobile sao encerradas.
              </p>
            </article>
            <article className="rounded-xl border border-[color-mix(in_oklab,var(--az-accent-green),var(--az-border)_58%)] bg-[color-mix(in_oklab,var(--az-accent-green),transparent_90%)] p-4">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--az-accent-green)]">
                <ArrowRight className="h-4 w-4" />
                Operacao robusta
              </p>
              <h3 className="mt-2 text-lg font-bold">Fila global de IA, lock por contato e simulacao de carga</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--az-text-muted)]">
                O fluxo ganhou protecao contra concorrencia e testes com simulador interno para validar throughput, fallback e estabilidade antes de producao.
              </p>
            </article>
          </div>
        </section>

        <section id="features" className="border-y border-[var(--az-border)] bg-[var(--az-bg-elevated)] py-20">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="mb-12 max-w-2xl">
              <h2 className="text-3xl font-extrabold tracking-[-0.01em] sm:text-4xl">Funcionalidades principais</h2>
              <p className="mt-4 text-base text-[var(--az-text-muted)]">
                Recursos da versao atual com foco em operacao real no WhatsApp.
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
              <h2 className="text-3xl font-extrabold tracking-[-0.01em] sm:text-4xl">Demonstracao em video</h2>
              <p className="mt-4 text-base text-[var(--az-text-muted)]">
                Fluxo real: conexao WhatsApp, resposta com IA, catalogo com estoque e automacao.
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
            <h2 className="text-3xl font-extrabold tracking-[-0.01em] sm:text-4xl">Screenshots da versao atual</h2>
            <p className="mt-4 max-w-3xl text-base text-[var(--az-text-muted)]">
              Dashboard atualizado e visao das telas operacionais da V2.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--az-border-strong)] bg-[var(--az-surface)] p-4 shadow-[var(--az-shadow-lift)] sm:p-5">
            <div className="grid gap-6 lg:grid-cols-[1.24fr_0.76fr]">
              <article className="overflow-hidden rounded-2xl border border-[var(--az-border-strong)] bg-[var(--az-bg-elevated)] shadow-[var(--az-shadow-soft)]">
                <div className="border-b border-[var(--az-border)] px-4 py-3">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--az-text-muted)]">Destaque principal</p>
                  <h3 className="mt-1 text-lg font-bold">Dashboard (novo)</h3>
                </div>
                <img src="/images/dashboard-novo.jpg" alt="Dashboard atualizado AutoZap IA" className="block h-auto w-full" />
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
              <h3 className="text-lg font-bold">Disparo e automacao</h3>
              <p className="mt-1 text-sm text-[var(--az-text-muted)]">
                Campanhas e rotinas com controle operacional.
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
            <h2 className="text-3xl font-extrabold tracking-[-0.01em] sm:text-4xl">Fluxo resumido da operacao</h2>
            <div className="mt-9 grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-[var(--az-border)] bg-[var(--az-surface)] p-5 shadow-[var(--az-shadow-soft)]">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--az-accent-blue)]">01</p>
                <h3 className="mt-2 font-bold">Conectar e configurar</h3>
                <p className="mt-2 text-sm text-[var(--az-text-muted)]">Conexao WhatsApp, selecao do provedor de IA e ajuste de comportamento.</p>
              </div>
              <div className="rounded-2xl border border-[var(--az-border)] bg-[var(--az-surface)] p-5 shadow-[var(--az-shadow-soft)]">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--az-accent-blue)]">02</p>
                <h3 className="mt-2 font-bold">Atender com contexto real</h3>
                <p className="mt-2 text-sm text-[var(--az-text-muted)]">Catalogo, estoque e treinamento entram antes da LLM para resposta consistente.</p>
              </div>
              <div className="rounded-2xl border border-[var(--az-border)] bg-[var(--az-surface)] p-5 shadow-[var(--az-shadow-soft)]">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--az-accent-blue)]">03</p>
                <h3 className="mt-2 font-bold">Monitorar e escalar</h3>
                <p className="mt-2 text-sm text-[var(--az-text-muted)]">Diagnostico, simulador de carga e sessao mobile segura para operacao continua.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--az-border)] bg-[var(--az-bg)] py-9">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 sm:grid-cols-2 sm:px-6">
          <div className="flex flex-col gap-2 text-xs text-[var(--az-text-muted)]">
            <p className="font-semibold text-[var(--az-text)]">AutoZap IA</p>
            <p>Aplicacao desktop para atendimento e vendas com IA no WhatsApp.</p>
          </div>

          <div className="flex flex-col gap-2 text-xs text-[var(--az-text-muted)] sm:items-end">
            <p className="font-semibold text-[var(--az-text)]">Meus contatos</p>
            <a className="hover:text-[var(--az-text)]" href="tel:+5511960714822">Tel: (11) 96071-4822</a>
            <a className="hover:text-[var(--az-text)]" href="mailto:yuri.moraes1989@gmail.com">Email: yuri.moraes1989@gmail.com</a>
            <a className="hover:text-[var(--az-text)]" href="https://github.com/ycaina" target="_blank" rel="noreferrer">Git: github.com/ycaina</a>
            <a className="hover:text-[var(--az-text)]" href="https://www.linkedin.com/in/yuri-cain%C3%A3-60b5b27a/" target="_blank" rel="noreferrer">LinkedIn: yuri-caina</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";

import { use, useEffect, useRef, useState } from "react";
import { projectsData } from "@/data/projects";

// ─── Animated counter helper ───────────────────────────────────────────────
function parseStatValue(raw: string): {
  prefix: string;
  number: number;
  decimals: number;
  suffix: string;
} {
  // e.g. "99.9%" "12ms" "200+" "0" "4ms" "0%"
  const match = raw.match(/^([^\d]*?)([\d.]+)([^\d.]*)$/);
  if (!match) return { prefix: "", number: 0, decimals: 0, suffix: raw };
  const [, prefix, numStr, suffix] = match;
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return { prefix, number: parseFloat(numStr), decimals, suffix };
}

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [displayed, setDisplayed] = useState("0");
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const { prefix, number, decimals, suffix } = parseStatValue(value);
    const duration = 1600; // ms

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();

          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * number;
            setDisplayed(
              prefix + current.toFixed(decimals) + suffix
            );
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="flex flex-col gap-2 border-l border-primary/30 pl-6">
      <span className="text-4xl sm:text-5xl md:text-7xl font-black text-primary tracking-tighter tabular-nums transition-all">
        {displayed}
      </span>
      <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">
        {label}
      </span>
    </div>
  );
}
// ───────────────────────────────────────────────────────────────────────────

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const project = projectsData[slug] ?? projectsData["retail-core"];

  return (
    <div className="overflow-x-hidden w-full relative">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-50 pointer-events-none">
        <div className="grid-overlay absolute inset-0 opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,_rgba(204,255,0,0.06)_0%,_transparent_50%)]" />
      </div>

      {/* Node Mesh */}
      <div
        className="fixed inset-0 -z-40 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(204,255,0,0.12) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ─── NAV ─── */}
      <nav className="fixed top-0 z-[100] w-full border-b border-white/5 bg-background-dark/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-5 lg:px-12">
          <a href="/" className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="KREAR Logo" className="h-7 w-auto" src="/isotipo-negativo.png" />
            <h2 className="text-xl font-bold tracking-[0.4em] text-tech-white uppercase leading-none">
              KREAR
            </h2>
          </a>
          <div className="hidden md:flex items-center gap-12">
            <a
              className="text-xs font-bold uppercase tracking-widest text-tech-white/60 hover:text-primary transition-colors"
              href="/#services"
            >
              Servicios
            </a>
            <a
              className="text-xs font-bold uppercase tracking-widest text-tech-white/60 hover:text-primary transition-colors"
              href="/#portfolio"
            >
              Portfolio
            </a>
            <button className="rounded-full bg-primary px-6 py-2.5 text-xs font-black uppercase tracking-widest text-obsidian hover:scale-105 transition-all">
              Iniciar Proyecto
            </button>
          </div>
          <div
            className="md:hidden text-primary cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background-dark border-b border-white/5 p-6 flex flex-col gap-6 shadow-2xl">
            <a
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-widest text-tech-white/60 hover:text-primary transition-colors"
              href="/#services"
            >
              Servicios
            </a>
            <a
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-widest text-tech-white/60 hover:text-primary transition-colors"
              href="/#portfolio"
            >
              Portfolio
            </a>
            <button className="rounded-full bg-primary px-6 py-4 text-sm font-black uppercase tracking-widest text-obsidian hover:scale-105 transition-all w-full mt-4">
              Iniciar Proyecto
            </button>
          </div>
        )}
      </nav>

      <main className="relative w-full overflow-hidden">
        {/* ─── HERO ─── */}
        <section className="relative px-6 md:px-12 lg:px-20 pt-36 pb-32 overflow-hidden">
          {/* Hero background image */}
          <div className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={project.title}
              src={project.heroImage}
              className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background-dark/60 via-transparent to-background-dark" />
            <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-transparent to-transparent" />
          </div>

          {/* Vertical glow lines — right side */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 hidden lg:flex gap-4 h-full items-center">
            <div
              className="w-px h-full"
              style={{
                background:
                  "linear-gradient(180deg, transparent, rgba(204,255,0,0.2), transparent)",
              }}
            />
            <div className="flex flex-col gap-20 py-20">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="size-2 rounded-full bg-primary"
                  style={{ boxShadow: "0 0 10px #CCFF00" }}
                />
              ))}
            </div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto">
            {/* Breadcrumb / back */}
            <a
              href="/#portfolio"
              className="inline-flex items-center gap-2 text-primary/60 hover:text-primary text-xs font-black uppercase tracking-widest mb-10 transition-colors group"
            >
              <span className="material-symbols-outlined text-base group-hover:-translate-x-1 transition-transform">
                arrow_back
              </span>
              Volver al Portfolio
            </a>

            <div className="flex flex-col gap-6">
              {/* Tag */}
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-12 bg-primary" />
                <span className="text-primary font-bold tracking-[0.3em] text-[10px] uppercase">
                  {project.category} // {project.year}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-white text-6xl sm:text-8xl md:text-[9rem] lg:text-[11rem] font-black leading-[0.85] tracking-tighter break-words hyphens-auto">
                {project.title}
              </h1>

              {/* Description */}
              <p className="text-slate-400 text-lg md:text-2xl max-w-2xl leading-relaxed mt-4 border-l-2 border-primary/20 pl-8">
                {project.subtitle}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 mt-8">
                <a
                  href={project.liveUrl}
                  className="group relative flex items-center justify-center h-14 px-10 bg-primary text-obsidian text-sm font-black uppercase tracking-widest overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(204,255,0,0.4)] hover:scale-105"
                >
                  <span className="relative z-10">Ver Proyecto</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                </a>
                <button className="flex items-center justify-center h-14 px-10 border border-primary/30 text-white text-sm font-black uppercase tracking-widest glass-panel hover:bg-primary/10 transition-colors">
                  Documentación Técnica
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Glow divider */}
        <div
          className="w-full h-px opacity-50"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(204,255,0,0.3), transparent)",
          }}
        />

        {/* ─── CORE ARCHITECTURE ─── */}
        <section className="relative px-6 md:px-12 lg:px-20 py-28 md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(204,255,0,0.02)_0%,_transparent_70%)] pointer-events-none" />
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col gap-4 mb-16 md:mb-20">
              <h2 className="text-primary text-xs font-black uppercase tracking-[0.4em]">
                Sistemas Integrados
              </h2>
              <h3 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                Arquitectura Core
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {project.nodes.map((node) => (
                <div
                  key={node.id}
                  className="group glass-panel p-8 md:p-10 relative hover:border-primary/50 transition-all duration-500"
                  style={{
                    position: "relative",
                  }}
                >
                  {/* Futuristic corner accents */}
                  <div className="absolute top-0 left-0 w-[10px] h-[2px] bg-primary" />
                  <div className="absolute bottom-0 right-0 w-[10px] h-[2px] bg-primary" />

                  <div className="mb-8 flex justify-between items-start">
                    <span className="material-symbols-outlined text-primary text-5xl group-hover:scale-110 transition-transform">
                      {node.icon}
                    </span>
                    <span className="text-[10px] font-mono text-primary/40">
                      {node.id}
                    </span>
                  </div>
                  <h4 className="text-white text-xl md:text-2xl font-black mb-4 tracking-tight">
                    {node.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {node.description}
                  </p>
                  <div className="h-[1px] w-full bg-primary/10 group-hover:bg-primary/30 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── STATS ─── */}
        <section
          className="relative px-6 md:px-12 lg:px-20 py-20 md:py-24 border-y border-white/5"
          style={{ backgroundColor: "#0A0A0A" }}
        >
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')",
            }}
          />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {project.stats.map((stat, i) => (
                <AnimatedStat key={i} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── SYSTEM BLUEPRINTS / GALLERY ─── */}
        <section className="px-6 md:px-12 lg:px-20 py-28 md:py-32">
          <div className="max-w-6xl mx-auto flex flex-col gap-12 md:gap-16">
            <div className="flex flex-col md:flex-row items-baseline justify-between gap-4 border-b border-primary/10 pb-8 md:pb-10">
              <div className="flex flex-col gap-2">
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
                  Planos del Sistema
                </h3>
                <p className="text-primary/60 font-mono text-xs">
                  COLECCIÓN_RECURSOS_VISUALES_v1.0
                </p>
              </div>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">
                Exhibición Fases 01 — 04
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
              {project.gallery.map((item, i) => (
                <div
                  key={i}
                  className="group relative aspect-[16/10] overflow-hidden glass-panel"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={item.caption}
                    src={item.src}
                    className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-70 transition-all duration-700 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-0 left-0 p-6 md:p-8 flex flex-col gap-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em]">
                      {item.label}
                    </span>
                    <span className="text-white text-lg md:text-xl font-bold tracking-tight">
                      {item.caption}
                    </span>
                  </div>
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="material-symbols-outlined text-primary">
                      fullscreen
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="relative px-6 md:px-12 lg:px-20 py-32 md:py-48 overflow-hidden">
          <div className="absolute inset-0 bg-primary pointer-events-none">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.5) 1px, transparent 0)",
                backgroundSize: "30px 30px",
              }}
            />
          </div>
          <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-10 md:gap-12 relative z-10">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-obsidian/30" />
              <span className="text-obsidian/60 font-black text-xs uppercase tracking-[0.4em]">
                Iniciar Conexión
              </span>
              <div className="h-[1px] w-12 bg-obsidian/30" />
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-obsidian tracking-tighter leading-[0.9]">
              ¿LISTO PARA CONSTRUIR
              <br />
              LA PRÓXIMA GENERACIÓN?
            </h2>
            <button className="flex items-center justify-center h-16 md:h-20 px-10 md:px-16 bg-obsidian text-primary text-base md:text-xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl">
              Hablemos
            </button>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="bg-background-dark py-16 md:py-20 border-t border-white/5">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-center border-b border-white/5 pb-12 md:pb-16">
            <a href="/" className="flex items-center gap-4 text-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="KREAR Logo" className="h-6 w-auto" src="/isotipo-negativo.png" />
              <span className="font-black text-2xl tracking-tighter">KREAR</span>
            </a>
            <div className="flex justify-start md:justify-center gap-8 md:gap-12">
              <a
                className="text-slate-500 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest"
                href="#"
              >
                LinkedIn
              </a>
              <a
                className="text-slate-500 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest"
                href="#"
              >
                GitHub
              </a>
              <a
                className="text-slate-500 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest"
                href="#"
              >
                Dribbble
              </a>
            </div>
            <div className="md:text-right flex flex-col gap-2">
              <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest">
                Estudio Digital
              </span>
              <span className="text-white text-sm font-bold">
                Buenos Aires, AR
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-10 md:mt-12 gap-6">
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-tech-white/20">
              © 2024 KREAR. ESTADO DEL SISTEMA: ÓPTIMO.
            </p>
            <div className="flex items-center gap-8">
              <span className="text-primary text-[10px] font-bold">V-2.4.0</span>
              <div
                className="size-2 rounded-full bg-primary animate-pulse"
                style={{ boxShadow: "0 0 10px #CCFF00" }}
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

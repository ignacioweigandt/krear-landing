"use client";

import { useState } from "react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="overflow-x-hidden w-full relative">
      <div className="fixed inset-0 -z-50 pointer-events-none">
        <div className="grid-overlay absolute inset-0"></div>
        <div className="blur-accent absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full opacity-50 md:opacity-100"></div>
        <div className="blur-accent absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full opacity-50 md:opacity-100"></div>
      </div>
      <nav className="fixed top-0 z-[100] w-full border-b border-white/5 bg-background-dark/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-5 lg:px-12">
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="KREAR Logo" className="h-7 w-auto" src="/isotipo-negativo.png"/>
            <h2 className="text-xl font-bold tracking-[0.4em] text-tech-white uppercase leading-none">KREAR</h2>
          </div>
          <div className="hidden md:flex items-center gap-12">
            <a className="text-xs font-bold uppercase tracking-widest text-tech-white/60 hover:text-primary transition-colors" href="#services">Servicios</a>
            <a className="text-xs font-bold uppercase tracking-widest text-tech-white/60 hover:text-primary transition-colors" href="#portfolio">Portfolio</a>
            <a
              href="https://wa.me/5493546407726"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-6 py-2.5 text-xs font-black uppercase tracking-widest text-obsidian hover:scale-105 transition-all"
            >
              Start Project
            </a>
          </div>
          <div className="md:hidden text-primary cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span className="material-symbols-outlined text-3xl">{isMobileMenuOpen ? "close" : "menu"}</span>
          </div>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background-dark border-b border-white/5 p-6 flex flex-col gap-6 shadow-2xl">
            <a onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-widest text-tech-white/60 hover:text-primary transition-colors" href="#services">Servicios</a>
            <a onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-widest text-tech-white/60 hover:text-primary transition-colors" href="#portfolio">Portfolio</a>
            <a
              href="https://wa.me/5493546407726"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-6 py-4 text-sm font-black uppercase tracking-widest text-obsidian hover:scale-105 transition-all w-full mt-4 text-center block"
            >
              Start Project
            </a>
          </div>
        )}
      </nav>
      <main className="relative w-full overflow-hidden">
        <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-12 w-full pt-20">
          <div className="absolute right-0 top-[10%] w-full md:w-1/2 h-full md:h-[80%] opacity-10 md:opacity-20 pointer-events-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="Architecture visualization" className="w-full h-full object-cover md:rounded-l-3xl border-l border-y border-white/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBh5Nx-ZIVgsEa1QpypBX_c7Ck8FP6B4xoOL9tyNwuwgtpCtKG5djlAAsD_GDepovKO5zvpj9oHs5d65TINm5AjX8ouXcUhryNuHh6PRKr0IPA9DurWQxGFV0OmRUNuLoOVPenSM8ZGBhJ1TSKs3zaC7Oj1oNhyp4KJEXHdMvg39PhhC6Fmj5L741HxEEGDFnBBdfp3W__a2Trn7SVpxGyYEXwwKx_pYn_Ev0lzbne0hOwjWO2vXuLAZSwFhLvSDbCQJx6BvLwD5poo"/>
          </div>
          <div className="max-w-6xl relative z-10 mt-12 md:mt-0 w-full">
            <div className="inline-flex items-center gap-2 mb-6 text-primary w-full">
              <span className="h-[1px] w-8 md:w-12 bg-primary flex-shrink-0"></span>
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] leading-relaxed break-words whitespace-normal w-full">Studio de Arquitectura Digital</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.9] text-tech-white tracking-tighter mb-8 break-words hyphens-auto w-full">
              ESTRUCTURA<br/>
              LÓGICA.<br/>
              <span className="text-primary italic block mt-2 md:mt-0 md:inline">ESTÉTICA.</span>
            </h1>
            <p className="max-w-xl w-full text-base text-tech-white/50 md:text-2xl leading-relaxed mb-10 font-light pr-4">
              No hacemos programación. Diseñamos la infraestructura lógica de tu negocio y construimos ecosistemas digitales escalables.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6">
              <a
                href="https://wa.me/5493546407726"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex justify-center items-center gap-4 bg-primary px-8 py-4 sm:py-5 text-sm sm:text-base font-black text-obsidian rounded-full transition-all hover:pr-12 w-full sm:w-auto"
              >
                Inicia la Arquitectura
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_right_alt</span>
              </a>
              <a
                href="#portfolio"
                className="glass-panel px-8 py-4 sm:py-5 text-sm sm:text-base font-bold text-tech-white rounded-full hover:bg-white/10 transition-colors w-full sm:w-auto text-center"
              >
                Ver Proyectos
              </a>
            </div>
          </div>
        </section>
        <section className="section-overlap px-6 lg:px-12 py-24 md:py-32" id="services">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-start lg:items-end mb-16 md:mb-24">
              <div className="w-full lg:w-1/2">
                <h2 className="text-primary text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-4">Metodología</h2>
                <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight">Arquitectura técnica <br className="hidden md:block" />de alto rendimiento.</h3>
              </div>
              <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
                <p className="text-tech-white/40 text-base md:text-lg border-l-2 border-primary/20 pl-6 md:pl-8">
                  Abordamos cada proyecto como un desafío de ingeniería estructural, priorizando la resiliencia y la fluidez de datos por encima de lo convencional.
                </p>
              </div>
            </div>
            <div className="grid gap-px bg-white/10 overflow-hidden border border-white/10 rounded-2xl md:rounded-3xl">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="group relative bg-background-dark p-8 md:p-12 transition-all hover:bg-primary/5">
                  <div className="absolute top-0 right-0 p-6 md:p-8 opacity-5 md:opacity-10 transition-opacity group-hover:opacity-100">
                    <span className="text-6xl md:text-8xl font-black text-primary">01</span>
                  </div>
                  <div className="mb-8 md:mb-12 inline-flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-xl md:rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-2xl md:text-4xl">hub</span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-tech-white mb-3 md:mb-4 uppercase tracking-wider">Análisis de Sistemas</h4>
                  <p className="text-tech-white/50 text-sm md:text-base leading-relaxed font-light relative z-10">
                    Estructuración lógica de requerimientos complejos. Mapeamos cada flujo de datos antes de escribir una sola línea.
                  </p>
                </div>
                <div className="group relative bg-background-dark p-8 md:p-12 transition-all hover:bg-primary/5 border-t border-white/10 md:border-t-0 md:border-l">
                  <div className="absolute top-0 right-0 p-6 md:p-8 opacity-5 md:opacity-10 transition-opacity group-hover:opacity-100">
                    <span className="text-6xl md:text-8xl font-black text-primary">02</span>
                  </div>
                  <div className="mb-8 md:mb-12 inline-flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-xl md:rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-2xl md:text-4xl">layers</span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-tech-white mb-3 md:mb-4 uppercase tracking-wider">Diseño de Producto</h4>
                  <p className="text-tech-white/50 text-sm md:text-base leading-relaxed font-light relative z-10">
                    Experiencias digitales orientadas a la conversión. Interfaces que respiran sofisticación y jerarquía visual.
                  </p>
                </div>
                <div className="group relative bg-background-dark p-8 md:p-12 transition-all hover:bg-primary/5 border-t border-white/10 md:border-t-0 md:border-l">
                  <div className="absolute top-0 right-0 p-6 md:p-8 opacity-5 md:opacity-10 transition-opacity group-hover:opacity-100">
                    <span className="text-6xl md:text-8xl font-black text-primary">03</span>
                  </div>
                  <div className="mb-8 md:mb-12 inline-flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-xl md:rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-2xl md:text-4xl">cloud_done</span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-tech-white mb-3 md:mb-4 uppercase tracking-wider">Arquitectura Cloud</h4>
                  <p className="text-tech-white/50 text-sm md:text-base leading-relaxed font-light relative z-10">
                    Infraestructura escalable y resiliente. Diseñamos entornos en la nube optimizados para el crecimiento masivo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="mx-auto max-w-screen-2xl px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
              <div className="relative order-1 lg:order-1 mb-10 lg:mb-0">
                <div className="absolute -inset-4 md:-inset-10 bg-primary/5 blur-2xl md:blur-3xl rounded-full"></div>
                <div className="relative glass-panel rounded-2xl md:rounded-3xl overflow-hidden aspect-square">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="Server infrastructure" className="h-full w-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ7ghyfOaccixsrYgbqpINXWcPLG3OxmBYBSEh4_oKDiLTQzLEn_NKx2Trv_x8ffb3SJIWN6-D-TJYHhmv3jQiPv65GIJ3h14OH9fe-JQ4AvSYEAyol0drKlbZI0jPquqCf_yDNpnMUGhQmC6xzRqaQYvri2T4LXjiP7PnQ_xklSI2J6VJ4xkREcz2ZzLUacimp7H7PuUGgjMuivymxyVuQ5JPBkyyghgORxKbokaZjSPjG632QvS3xbJJ2UnOVKXMg6UO5BAh3Ljb"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
                </div>
              </div>
              <div className="order-2 lg:order-2 space-y-8 md:space-y-10">
                <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em]">Nuestra Misión</div>
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-tech-white leading-[1.1]">
                  De desarrolladores a <span className="text-primary italic block md:inline">arquitectos digitales.</span>
                </h2>
                <p className="text-lg md:text-xl text-tech-white/60 font-light leading-relaxed">
                  Evitamos sistemas lentos y heredados. En KREAR, diseñamos el manifiesto de la eficiencia tecnológica. No construimos sitios web; erigimos monumentos a la funcionalidad y la rapidez.
                </p>
                <ul className="space-y-4 md:space-y-6">
                  <li className="flex items-center gap-4 group">
                    <div className="h-px w-6 md:w-8 bg-primary/30 group-hover:w-12 transition-all"></div>
                    <span className="font-bold text-tech-white/80 text-sm md:text-base">Cero deuda técnica.</span>
                  </li>
                  <li className="flex items-center gap-4 group">
                    <div className="h-px w-6 md:w-8 bg-primary/30 group-hover:w-12 transition-all"></div>
                    <span className="font-bold text-tech-white/80 text-sm md:text-base">100% Escalable.</span>
                  </li>
                  <li className="flex items-center gap-4 group">
                    <div className="h-px w-6 md:w-8 bg-primary/30 group-hover:w-12 transition-all"></div>
                    <span className="font-bold text-tech-white/80 text-sm md:text-base">Infraestructura Evergreen.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-24 md:py-32 bg-white/[0.01]" id="portfolio">
          <div className="mx-auto max-w-screen-2xl px-6 lg:px-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline gap-6 md:gap-8 mb-16 md:mb-20 border-b border-white/10 pb-8 md:pb-12">
              <h3 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter">Selección de <span className="text-primary block sm:inline">Proyectos</span></h3>
              <a className="group flex items-center gap-3 text-[10px] md:text-xs font-black uppercase tracking-widest text-primary" href="/projects">
                Ver todos los proyectos
                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
              </a>
            </div>
            <div className="grid gap-12 md:gap-12 md:grid-cols-2">
              {/* ── Primera card: Próximamente ── */}
              <div className="group relative flex flex-col gap-6 md:gap-8">
                {/* App icon badge — overlapping top-right corner of the card */}
                <div className="absolute -top-4 -right-2 md:-top-5 md:-right-3 z-20 w-14 h-14 md:w-16 md:h-16 rounded-2xl glass-panel border border-primary/30 flex items-center justify-center shadow-[0_0_20px_rgba(204,255,0,0.15)] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/Icono.App.png" alt="App Icon" className="w-full h-full object-cover" />
                </div>

                <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl md:rounded-3xl glass-panel relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Proyecto SaaS"
                    className="h-full w-full object-cover opacity-40 grayscale scale-105"
                    src="/img1.png"
                  />

                  {/* Blur + dark overlay */}
                  <div className="absolute inset-0 backdrop-blur-md bg-obsidian/60" />

                  {/* Próximamente label — centered */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="h-[1px] w-8 bg-primary/50" />
                      <span className="text-primary text-[9px] font-black uppercase tracking-[0.4em]">App Web &amp; Mobile</span>
                      <div className="h-[1px] w-8 bg-primary/50" />
                    </div>
                    <span className="text-tech-white text-3xl md:text-5xl font-black uppercase tracking-[0.15em] drop-shadow-lg">
                      Próximamente
                    </span>
                    <div
                      className="mt-2 px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-black uppercase tracking-[0.3em]"
                      style={{ background: "rgba(204,255,0,0.05)" }}
                    >
                      En Desarrollo
                    </div>
                  </div>

                  {/* Gradient bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent pointer-events-none" />
                </div>

                <div className="flex justify-between items-start px-2 md:px-4 gap-4">
                  <p className="text-tech-white/40 max-w-xs text-xs md:text-sm italic">KINIC | App Web & Mobile — Administracion para GYMS y Centros de Entrenamiento.</p>
                  <span className="material-symbols-outlined text-primary/30 text-3xl md:text-4xl flex-shrink-0">lock</span>
                </div>
              </div>

              <a href="/projects/retail-core" className="group relative flex flex-col gap-6 md:gap-8 mt-4 md:mt-24">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl md:rounded-3xl glass-panel relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="RETAIL-CORE Project" className="h-full w-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 opacity-60 grayscale hover:grayscale-0" src="/projects/pos-system/hero.png"/>
                  <div className="absolute inset-0 bg-gradient-to-tr from-obsidian/80 to-transparent"></div>
                  <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 pr-6">
                    <span className="text-[9px] md:text-[10px] font-black tracking-[0.4em] text-primary uppercase mb-2 block">Retail Tech</span>
                    <h4 className="text-2xl md:text-3xl font-black text-tech-white tracking-widest uppercase break-words">RETAIL-CORE</h4>
                  </div>
                </div>
                <div className="flex justify-between items-start px-2 md:px-4 gap-4">
                  <p className="text-tech-white/40 max-w-xs text-xs md:text-sm italic">Sistema POS multisucursal con e-commerce integrado y base de datos unificada en tiempo real.</p>
                  <span className="material-symbols-outlined text-primary text-3xl md:text-4xl group-hover:rotate-45 transition-transform flex-shrink-0">north_east</span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="relative py-32 md:py-48 px-6 lg:px-12 overflow-hidden">
          <div className="absolute inset-0 bg-primary pointer-events-none">
            <div className="absolute inset-0 grid-overlay opacity-30"></div>
          </div>
          <div className="relative z-10 mx-auto max-w-4xl text-center text-obsidian">
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter mb-6 md:mb-8 leading-[0.9]">¿LISTO PARA ELEVAR TU INFRAESTRUCTURA?</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base md:text-xl font-medium opacity-80 mb-10 md:mb-12">
              Hablemos sobre el próximo capítulo de tu evolución digital. Tu arquitectura merece ser una obra maestra.
            </p>
            <a
              href="https://wa.me/5493546407726"
              target="_blank"
              rel="noopener noreferrer"
              className="flex md:inline-flex items-center justify-center gap-4 md:gap-6 rounded-full bg-obsidian px-8 md:px-12 py-5 md:py-6 text-base md:text-lg font-black text-primary transition-all hover:scale-110 active:scale-95 shadow-2xl w-full md:w-auto"
            >
              Iniciar Consulta Gratuita
              <span className="material-symbols-outlined">rocket_launch</span>
            </a>
          </div>
        </section>
      </main>
      <footer className="bg-background-dark py-16 md:py-24 border-t border-white/5">
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-12">
          <div className="grid gap-12 md:gap-20 md:grid-cols-4">
            <div className="col-span-1 md:col-span-2 space-y-8 md:space-y-10">
              <div className="flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="KREAR Logo" className="h-6 w-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgWH9u6PmiQARXpSs4AL4UA_oCtyuKNiu0-AyfCwFcIKR8MOKPh6edVgK4-Xq2JMNXtYDY9wT3d3LIxzuCOTh3bzMXY6lckxDbFB8o0FU5CVxV1TQo2z_CBTeL-xO_t8fjc-42cMICCvsE3VnzHeZMiEyoW3CL1WpTWXu6svV1xg8wwa6kw4J44neMMNmal5dV7y15D-rTT69dgzb_MTRF0R8MyXd_DSfMkJed010G41yR4LT7Gv6lnB7qMDOVq9KJwCg7uH89AzCf"/>
                <h2 className="text-xl font-bold tracking-[0.5em] text-tech-white uppercase">KREAR</h2>
              </div>
              <p className="max-w-md text-base md:text-lg leading-relaxed text-tech-white/40 font-light">
                Tech Studio dedicado a la arquitectura lógica y diseño de ecosistemas digitales de alto nivel. Elevamos el estándar del desarrollo global.
              </p>
              <div className="flex flex-wrap gap-6 md:gap-8 text-tech-white/40 text-[10px] md:text-xs font-black uppercase tracking-widest">
                <a className="hover:text-primary transition-colors" href="#">LinkedIn</a>
                <a className="hover:text-primary transition-colors" href="#">GitHub</a>
                <a className="hover:text-primary transition-colors" href="#">Dribbble</a>
              </div>
            </div>
            <div className="space-y-6 md:space-y-10">
              <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-primary">Navegación</h4>
              <ul className="space-y-4 md:space-y-5 text-xs md:text-sm font-bold text-tech-white/40 tracking-widest uppercase">
                <li><a className="hover:text-tech-white transition-colors" href="#services">Servicios</a></li>
                <li><a className="hover:text-tech-white transition-colors" href="#portfolio">Portfolio</a></li>
                <li><a className="hover:text-tech-white transition-colors" href="#">Manifiesto</a></li>
                <li><a className="hover:text-tech-white transition-colors" href="#">Contacto</a></li>
              </ul>
            </div>
            <div className="space-y-6 md:space-y-10">
              <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-primary">Legal</h4>
              <ul className="space-y-4 md:space-y-5 text-xs md:text-sm font-bold text-tech-white/40 tracking-widest uppercase">
                <li><a className="hover:text-tech-white transition-colors" href="#">Privacy Policy</a></li>
                <li><a className="hover:text-tech-white transition-colors" href="#">Terms of Service</a></li>
                <li><a className="hover:text-tech-white transition-colors" href="#">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-16 md:mt-24 pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-tech-white/20">© 2024 KREAR . Digital Architecture Studio.</p>
            <div className="flex flex-col md:flex-row md:items-center gap-4 w-full md:w-auto">
              <span className="hidden md:block h-px w-12 bg-white/10"></span>
              <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-tech-white/20">Crafted with Logic &amp; Aesthetics.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

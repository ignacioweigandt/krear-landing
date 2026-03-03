"use client";

import { useState } from "react";

// Project data structure
const projectsData = [
  {
    slug: "kinic",
    title: "KINIC",
    category: "App Web & Mobile",
    year: "2025",
    status: "En Desarrollo",
    description: "App Web & Mobile — Administración para GYMS y Centros de Entrenamiento.",
    image: "/img1.png",
    icon: "/Icono.App.png",
    isComingSoon: true,
  },
  {
    slug: "retail-core",
    title: "RETAIL-CORE",
    category: "Retail Tech",
    year: "2025",
    status: "Live",
    description: "Sistema POS multisucursal con e-commerce integrado y base de datos unificada en tiempo real.",
    image: "/projects/pos-system/hero.png",
    icon: null,
    isComingSoon: false,
  },
  {
    slug: "iw-portfolio",
    title: "IW-PORTFOLIO",
    category: "Portfolio Personal",
    year: "2025",
    status: "Live",
    description: "Portfolio personal con diseño editorial, sistema de navegación fluido y arquitectura de contenido estratégica.",
    image: "/projects/landing-IW/hero.png",
    icon: null,
    isComingSoon: false,
  },
  {
    slug: "neo-finance",
    title: "NEO-FINANCE",
    category: "Infraestructura Fintech",
    year: "2024",
    status: "Live",
    description: "Arquitectura de ecosistemas financieros descentralizados mediante integración de nodos de alta fidelidad.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDraVnkeXB_48_3lbGbqAYjDciaGJqq9khhkHanu2DbZWCaHHWB67xb4SNrF1OFJSVh5URoY5wDwUXsSVTivwkbhB_nbE9CdRJxVV1VaA_ZMkZmrKpG7dz2kiGfczOU-P-pvq4kmHU2U3s9MkGNZ_v1TgP5qpz5dO8OECXmilkhunjRSiu5vXsZ_Higj7eb5MeQ4yIR2Jgn6iQye6VVlRwNy9CD95bo7dl9gUU-fVdPThFIRmzHYVi3Mz7LzTyAtw54sM_uL6umY1MU",
    icon: null,
    isComingSoon: false,
  },
];

export default function ProjectsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="overflow-x-hidden w-full relative">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-50 pointer-events-none">
        <div className="grid-overlay absolute inset-0"></div>
        <div className="blur-accent absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full opacity-50 md:opacity-100"></div>
        <div className="blur-accent absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full opacity-50 md:opacity-100"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 z-[100] w-full border-b border-white/5 bg-background-dark/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-5 lg:px-12">
          <a href="/" className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="KREAR Logo" className="h-7 w-auto" src="/Isotipo-sinfondo.png"/>
            <h2 className="text-xl font-bold tracking-[0.4em] text-tech-white uppercase leading-none">KREAR</h2>
          </a>
          <div className="hidden md:flex items-center gap-12">
            <a className="text-xs font-bold uppercase tracking-widest text-tech-white/60 hover:text-primary transition-colors" href="/#services">Servicios</a>
            <a className="text-xs font-bold uppercase tracking-widest text-tech-white/60 hover:text-primary transition-colors" href="/#portfolio">Portfolio</a>
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
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background-dark border-b border-white/5 p-6 flex flex-col gap-6 shadow-2xl">
            <a onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-widest text-tech-white/60 hover:text-primary transition-colors" href="/#services">Servicios</a>
            <a onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-widest text-tech-white/60 hover:text-primary transition-colors" href="/#portfolio">Portfolio</a>
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
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex flex-col justify-center px-6 lg:px-12 w-full pt-32 pb-20">
          <div className="max-w-screen-2xl mx-auto w-full">
            <div className="inline-flex items-center gap-2 mb-6 text-primary">
              <span className="h-[1px] w-8 md:w-12 bg-primary flex-shrink-0"></span>
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">Portfolio Completo</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[8rem] font-black leading-[0.9] text-tech-white tracking-tighter mb-8">
              PROYECTOS<br/>
              <span className="text-primary italic">DESTACADOS.</span>
            </h1>
            <p className="max-w-2xl text-base md:text-xl text-tech-white/50 leading-relaxed font-light">
              Cada proyecto es una manifestación de arquitectura técnica de precisión. Sistemas que no solo funcionan, sino que escalan y evolucionan.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 md:py-20 px-6 lg:px-12">
          <div className="mx-auto max-w-screen-2xl">
            <div className="grid gap-12 md:gap-12 md:grid-cols-2 lg:grid-cols-3">
              {projectsData.map((project) => (
                <div key={project.slug} className="group relative flex flex-col gap-6 md:gap-8">
                  {/* App icon badge for projects that have one */}
                  {project.icon && (
                    <div className="absolute -top-4 -right-2 md:-top-5 md:-right-3 z-20 w-14 h-14 md:w-16 md:h-16 rounded-2xl glass-panel border border-primary/30 flex items-center justify-center shadow-[0_0_20px_rgba(204,255,0,0.15)] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={project.icon} alt="App Icon" className="w-full h-full object-cover" />
                    </div>
                  )}

                  <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl md:rounded-3xl glass-panel relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt={project.title}
                      className={`h-full w-full object-cover transition-transform duration-[1.5s] ${
                        project.isComingSoon 
                          ? "opacity-40 grayscale scale-105" 
                          : "opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-110"
                      }`}
                      src={project.image}
                    />

                    {/* Coming Soon Overlay */}
                    {project.isComingSoon && (
                      <>
                        <div className="absolute inset-0 backdrop-blur-md bg-obsidian/60" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="h-[1px] w-8 bg-primary/50" />
                            <span className="text-primary text-[9px] font-black uppercase tracking-[0.4em]">{project.category}</span>
                            <div className="h-[1px] w-8 bg-primary/50" />
                          </div>
                          <span className="text-tech-white text-3xl md:text-5xl font-black uppercase tracking-[0.15em] drop-shadow-lg">
                            Próximamente
                          </span>
                          <div
                            className="mt-2 px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-black uppercase tracking-[0.3em]"
                            style={{ background: "rgba(204,255,0,0.05)" }}
                          >
                            {project.status}
                          </div>
                        </div>
                      </>
                    )}

                    {/* Live Project Overlay */}
                    {!project.isComingSoon && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-tr from-obsidian/80 to-transparent"></div>
                        <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 pr-6">
                          <span className="text-[9px] md:text-[10px] font-black tracking-[0.4em] text-primary uppercase mb-2 block">{project.category}</span>
                          <h4 className="text-2xl md:text-3xl font-black text-tech-white tracking-widest uppercase break-words">{project.title}</h4>
                        </div>
                      </>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent pointer-events-none" />
                  </div>

                  <div className="flex justify-between items-start px-2 md:px-4 gap-4">
                    <p className="text-tech-white/40 max-w-xs text-xs md:text-sm italic">{project.description}</p>
                    {project.isComingSoon ? (
                      <span className="material-symbols-outlined text-primary/30 text-3xl md:text-4xl flex-shrink-0">lock</span>
                    ) : (
                      <a href={`/projects/${project.slug}`}>
                        <span className="material-symbols-outlined text-primary text-3xl md:text-4xl group-hover:rotate-45 transition-transform flex-shrink-0">north_east</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State Message */}
            <div className="mt-24 md:mt-32 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary/30 bg-primary/5">
                <span className="material-symbols-outlined text-primary text-xl">add_circle</span>
                <span className="text-primary text-xs font-black uppercase tracking-widest">Más proyectos en desarrollo</span>
              </div>
              <p className="mt-6 text-tech-white/40 text-sm">
                Constantemente expandiendo nuestro portfolio con arquitecturas innovadoras.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
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

      {/* Footer */}
      <footer className="bg-background-dark py-16 md:py-24 border-t border-white/5">
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-12">
          <div className="grid gap-12 md:gap-20 md:grid-cols-4">
            <div className="col-span-1 md:col-span-2 space-y-8 md:space-y-10">
              <div className="flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="KREAR Logo" className="h-6 w-auto" src="/Isotipo-sinfondo.png"/>
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
                <li><a className="hover:text-tech-white transition-colors" href="/#services">Servicios</a></li>
                <li><a className="hover:text-tech-white transition-colors" href="/#portfolio">Portfolio</a></li>
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
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-tech-white/20">© 2025 KREAR . Digital Architecture Studio.</p>
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

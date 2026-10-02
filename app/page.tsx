import Image from 'next/image';
import {
  Activity,
  ArrowRight,
  BrainCircuit,
  Building2,
  CircleGauge,
  Cpu,
  Factory,
  Gauge,
  Mail,
  MapPin,
  Phone,
  Route,
  Ruler,
  Settings2,
  ShieldCheck,
  Thermometer,
  Weight,
  Wrench,
} from 'lucide-react';
import { clients } from '@/lib/clients';

const businessLines = [
  {
    code: 'TSS',
    title: 'Sistemas Inteligentes de Transporte - ITS',
    image: '/assets/traffic-flow.jpg',
    icon: Route,
  },
  {
    code: 'ACI',
    title: 'Automatización industrial',
    image: '/assets/industrial-control.jpg',
    icon: Factory,
  },
  {
    code: 'PGM',
    title: 'Petróleo, Gas y Marino.',
    image: '/assets/oil-gas.jpg',
    icon: Gauge,
  },
];

const applications = [
  ['Medición de vibración', Activity],
  ['Medición de temperatura', Thermometer],
  ['Medición de presión', Gauge],
  ['Medición de fuerza', Ruler],
  ['Medición de peso', Weight],
  ['Control de temperatura', Settings2],
  ['Control industrial', Cpu],
  ['Diagnóstico estructural', Building2],
  ['Medición de torque', CircleGauge],
  ['Sistemas de información', BrainCircuit],
] as const;

const products = [
  'Acelerómetros y transmisores de vibración',
  'Celdas de carga (peso)',
  'Medidores de flujo',
  'Medidores de torque',
  'Sensores de nivel',
  'Sensores de presión',
  'Sensores de temperatura',
  'Válvulas termostáticas',
  'Sistemas de protección para atmósferas explosivas (ATEX)',
  'Ciberseguridad industrial (OT)',
];

const services = [
  {
    number: '01',
    title: 'Calibración, ajuste y mantenimiento',
    text: 'Verificación trazable y cuidado del desempeño de sensores, equipos y unidades electrónicas durante su vida útil.',
    icon: Wrench,
  },
  {
    number: '02',
    title: 'Consultoría aplicada',
    text: 'Definición de soluciones a medida, análisis de aplicación y acompañamiento técnico para tomar decisiones con menos incertidumbre.',
    icon: BrainCircuit,
  },
  {
    number: '03',
    title: 'Integración de proyectos',
    text: 'Convergencia de medición, adquisición, procesamiento y visualización en soluciones completas listas para operar.',
    icon: Settings2,
  },
  {
    number: '04',
    title: 'Soporte posventa',
    text: 'Acompañamiento especializado con aliados y fabricantes para continuidad, garantías y evolución de cada solución.',
    icon: ShieldCheck,
  },
];

const projects = [
  ['Monitoreo geotécnico', 'Zonas y puntos críticos en la Autopista Medellín–Bogotá.'],
  ['Movilidad urbana', 'Pulsadores sin contacto para la Secretaría de Movilidad de Medellín.'],
  ['Manufactura avanzada', 'Optimización de procesos de mecanizado y ensamblaje con sistemas CNC.'],
  ['Mantenimiento predictivo', 'Monitoreo del estado de bombas y motores en procesos industriales.'],
];

const homepagePartners = [
  ['AMOT', '/assets/partners/amot.jpg'],
  ['MINCO', '/assets/partners/logo_minco.webp'],
  ['Vishay Precision Group', '/assets/partners/vishay-precision-group.svg'],
  ['Sensortronics', '/assets/partners/sensortronics.jpg'],
  ['Thames Side Sensors', '/assets/partners/thames-side.webp'],
  ['Chalwyn', '/assets/partners/chalwyn.webp'],
  ['Roda Deaco', '/assets/partners/roda-deaco.webp'],
  ['Geokon Instruments', '/assets/partners/geokon-instruments.png'],
  ['Kistler AG', '/assets/partners/kistler-logo.png'],
  ['Metrix Vibration', '/assets/partners/metrix-logo.jpg'],
  ['HPI High Pressure Instrumentation', '/assets/partners/hpi-high-pressure-instrumentation.png'],
  ['Campbell Scientific', '/assets/partners/campbell-scientific.svg'],
] as const;

function ArrowLink({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  return (
    <a
      href={href}
      className={`group inline-flex h-13 items-center gap-3 px-6 text-xs font-black uppercase tracking-[0.12em] transition ${
        light ? 'border border-white/30 text-white hover:border-white hover:bg-white/8' : 'bg-[#f5a623] text-[#06182c] hover:bg-[#ffc04d]'
      }`}
    >
      {children}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#06182c] text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#06182c]/92 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-4 px-5 lg:px-10">
          <a href="#inicio" aria-label="AREC, ir al inicio" className="shrink-0 rounded-sm bg-white px-2.5 py-2">
            <Image src="/assets/arec-logo.svg" alt="AREC Instrumentación e Ingeniería" width={206} height={48} priority className="h-auto w-[145px] sm:w-[206px]" />
          </a>
          <nav aria-label="Navegación principal" className="hidden items-center gap-5 text-[11px] font-bold uppercase tracking-[0.11em] xl:flex">
            <a className="text-white/70 transition hover:text-white" href="#soluciones">Soluciones</a>
            <a className="text-white/70 transition hover:text-white" href="#productos">Productos</a>
            <a className="text-white/70 transition hover:text-white" href="#aplicaciones">Aplicaciones</a>
            <a className="text-white/70 transition hover:text-white" href="#servicios">Servicios</a>
            <a className="text-white/70 transition hover:text-white" href="#clientes-home">Clientes</a>
            <a className="text-white/70 transition hover:text-white" href="#representados-home">Representados</a>
            <a className="text-white/70 transition hover:text-white" href="#empresa">Empresa</a>
          </nav>
          <a href="#contacto" className="group inline-flex h-11 items-center gap-2 bg-[#f5a623] px-4 text-[11px] font-black uppercase tracking-[0.12em] text-[#06182c] transition hover:bg-[#ffc04d] sm:px-5">
            <span className="hidden sm:inline">Hablar con ingeniería</span><span className="sm:hidden">Contacto</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </header>

      <section id="inicio" className="relative min-h-[820px] border-b border-white/10 pt-20">
        <Image src="/assets/traffic-hero.jpg" alt="Infraestructura de movilidad inteligente" fill priority className="object-cover opacity-35" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#06182c_0%,rgba(6,24,44,.94)_42%,rgba(6,24,44,.28)_100%)]" />
        <div className="engineering-grid absolute inset-0 opacity-35" />
        <div className="relative mx-auto grid min-h-[740px] max-w-[1440px] items-center gap-14 px-5 py-24 lg:grid-cols-[1.1fr_.9fr] lg:px-10">
          <div className="max-w-3xl">
            <h1 className="max-w-4xl text-[clamp(3rem,7vw,6.8rem)] font-black leading-[.88] tracking-[-.065em]">
              Soluciones que<br />
              <span className="text-[#37c8e7]">mueven industrias.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/72">
              Integramos productos, conocimiento y servicio para convertir variables críticas en información confiable.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ArrowLink href="#soluciones">Explorar soluciones</ArrowLink>
              <ArrowLink href="#aplicaciones" light>Ver aplicaciones</ArrowLink>
            </div>
          </div>
          <div className="hidden self-end pb-20 lg:block">
            <div className="ml-auto w-[350px] border border-white/20 bg-[#071d34]/82 p-6 backdrop-blur-md">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#37c8e7]">Cobertura técnica</p>
              <p className="mt-3 text-2xl font-bold leading-tight">Colombia · Centroamérica · Región Andina</p>
              <div className="mt-6 grid grid-cols-3 gap-px bg-white/15">
                {['Medir', 'Integrar', 'Responder'].map((item, index) => (
                  <div key={item} className="bg-[#071d34] p-3">
                    <span className="block text-[10px] text-white/45">0{index + 1}</span>
                    <span className="mt-2 block text-xs font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="relative mx-auto -mt-16 grid max-w-[1440px] grid-cols-1 border-x border-t border-white/10 bg-[#071d34] sm:grid-cols-3 lg:px-0">
          {['Variables críticas → datos confiables', 'Tecnología global → aplicación local', 'Proyecto entregado → soporte continuo'].map((item, index) => (
            <div key={item} className="flex min-h-24 items-center gap-4 border-b border-white/10 px-6 sm:border-b-0 sm:border-r last:border-r-0">
              <span className="text-xs font-black text-[#f5a623]">0{index + 1}</span>
              <span className="text-sm font-bold">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="soluciones" className="scroll-mt-20 bg-[#f3f0e9] pb-28 pt-36 text-[#071d34]">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="section-kicker">Tres capacidades · Una visión</p>
              <h2 className="mt-5 text-4xl font-black leading-[.95] tracking-[-.045em] sm:text-6xl">Ingeniería que conecta el mundo físico con decisiones.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#334b60] lg:ml-auto">
              AREC organiza su experiencia alrededor de tres verticales de mercado.
            </p>
          </div>
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {businessLines.map((line, index) => {
              const Icon = line.icon;
              return (
                <article key={line.code} className="group relative min-h-[430px] overflow-hidden bg-[#071d34] text-white">
                  <Image src={line.image} alt="" fill className="object-cover opacity-32 transition duration-700 group-hover:scale-105 group-hover:opacity-42" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06182c] via-[#06182c]/75 to-transparent" />
                  <div className="relative flex h-full min-h-[430px] flex-col justify-between p-7">
                    <div className="flex items-start justify-between">
                      <span className="text-xs font-black tracking-[0.18em] text-[#f5a623]">0{index + 1} / {line.code}</span>
                      <Icon className="size-7 text-[#37c8e7]" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black leading-none tracking-[-.035em]">{line.title}</h3>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="aplicaciones" className="relative scroll-mt-20 border-y border-white/10 bg-[#06182c] py-28">
        <div className="engineering-grid absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <p className="section-kicker !text-[#37c8e7]">Una solución para cada aplicación</p>
              <h2 className="mt-5 text-4xl font-black leading-[.95] tracking-[-.045em] sm:text-6xl">Del fenómeno físico a la acción.</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">Encuentre la solución por la variable o el proceso que necesita entender, controlar o proteger.</p>
            </div>
            <div className="grid border-l border-t border-white/15 sm:grid-cols-2">
              {applications.map(([name, Icon], index) => (
                <a key={name} href="#contacto" className="group flex min-h-32 items-center gap-5 border-b border-r border-white/15 p-5 transition hover:bg-[#0b334e]">
                  <span className="flex size-11 shrink-0 items-center justify-center border border-white/15 text-[#37c8e7] transition group-hover:border-[#37c8e7]"><Icon className="size-5" /></span>
                  <span className="flex-1 font-bold leading-tight">{name}</span>
                  <span className="text-[10px] text-white/35">{String(index + 1).padStart(2, '0')}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="productos" className="scroll-mt-20 bg-white py-28 text-[#071d34]">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <h2 className="max-w-4xl text-4xl font-black leading-[.95] tracking-[-.045em] sm:text-6xl">Tecnología elegida por su aplicación.</h2>
          <ol className="mt-12 grid border-l border-t border-[#c9d2d8] md:grid-cols-2">
            {products.map((product, index) => (
              <li key={product} className="border-b border-r border-[#c9d2d8]">
                <a href="#contacto" className="group grid min-h-28 grid-cols-[3rem_1fr_auto] items-center gap-4 px-4 py-5 transition hover:bg-[#f3f0e9] sm:grid-cols-[5rem_1fr_auto] sm:px-6">
                  <span className="text-xs font-black text-[#0b7898]">{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-base font-bold sm:text-xl">{product}</span>
                  <ArrowRight className="size-4 text-[#f5a623] transition-transform group-hover:translate-x-1" />
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="servicios" className="scroll-mt-20 bg-[#dfeaec] py-28 text-[#071d34]">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <p className="section-kicker">Ciclo de vida completo</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-2 lg:items-end">
            <h2 className="text-4xl font-black leading-[.95] tracking-[-.045em] sm:text-6xl">El instrumento es el inicio. La confianza es el servicio.</h2>
            <p className="max-w-xl text-lg leading-8 text-[#40576a] lg:ml-auto">Acompañamiento desde la definición técnica hasta la continuidad operativa, apoyado por una red de fabricantes y aliados especializados.</p>
          </div>
          <div className="mt-14 grid gap-px bg-[#aec1c8] md:grid-cols-2">
            {services.map(({ number, title, text, icon: Icon }) => (
              <article key={number} className="bg-[#eef4f3] p-7 sm:p-9">
                <div className="flex items-start justify-between">
                  <span className="text-xs font-black tracking-[0.16em] text-[#0b7898]">{number}</span>
                  <Icon className="size-7 text-[#f09812]" />
                </div>
                <h3 className="mt-14 text-2xl font-black tracking-[-.03em]">{title}</h3>
                <p className="mt-4 max-w-xl leading-7 text-[#526576]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f0e9] py-28 text-[#071d34]">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <p className="section-kicker">Experiencia documentada</p>
              <h2 className="mt-5 text-4xl font-black leading-[.95] tracking-[-.045em] sm:text-6xl">Proyectos donde la medición cambia el resultado.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {projects.map(([title, text], index) => (
                <article key={title} className="border border-[#c7d0d4] bg-white p-7">
                  <span className="text-xs font-black text-[#f09812]">0{index + 1}</span>
                  <h3 className="mt-12 text-xl font-black">{title}</h3>
                  <p className="mt-3 leading-7 text-[#526576]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="empresa" className="relative scroll-mt-20 bg-[#0b334e] py-28">
        <div className="engineering-grid absolute inset-0 opacity-20" />
        <div className="relative mx-auto grid max-w-[1440px] gap-16 px-5 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="section-kicker !text-[#37c8e7]">Quiénes somos</p>
            <h2 className="mt-5 text-4xl font-black leading-[.95] tracking-[-.045em] sm:text-6xl">Conocimiento que aterriza en ingeniería útil.</h2>
          </div>
          <div className="space-y-10">
            <div className="border-l-2 border-[#f5a623] pl-6">
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#f5a623]">Misión</p>
              <p className="mt-4 text-xl leading-9 text-white/78">Abastecemos productos y servicios para proyectos de ingeniería sostenibles, generando valor con conocimiento, buenas prácticas, responsabilidad, pasión y compromiso.</p>
            </div>
            <div className="border-l-2 border-[#37c8e7] pl-6">
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#37c8e7]">Visión</p>
              <p className="mt-4 text-xl leading-9 text-white/78">Consolidar un grupo empresarial que rompe paradigmas técnicos y de suministro, reconocido por cumplimiento, calidad, soporte posventa y cuidado del ambiente.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="scroll-mt-20 bg-[#f5a623] py-24 text-[#06182c]">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 lg:grid-cols-[1.2fr_.8fr] lg:px-10">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.2em]">Hablemos de su aplicación</p>
            <h2 className="mt-5 max-w-4xl text-5xl font-black leading-[.9] tracking-[-.055em] sm:text-7xl">De una variable crítica a una solución clara.</h2>
            <a href="mailto:ventas@arec.com.co?subject=Consulta%20técnica%20desde%20el%20nuevo%20sitio%20AREC" className="group mt-10 inline-flex h-14 items-center gap-3 bg-[#06182c] px-7 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#0b334e]">
              Solicitar asesoría técnica <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="grid content-end gap-5 text-sm font-semibold">
            <a href="tel:+573107835485" className="flex items-center gap-4 border-b border-[#06182c]/25 pb-5"><Phone className="size-5" /> +57 310 783 5485</a>
            <a href="mailto:ventas@arec.com.co" className="flex items-center gap-4 border-b border-[#06182c]/25 pb-5"><Mail className="size-5" /> ventas@arec.com.co</a>
            <p className="flex items-start gap-4 border-b border-[#06182c]/25 pb-5"><MapPin className="mt-0.5 size-5 shrink-0" /> Carrera 19A No. 116–19, Oficina 102<br />Bogotá, Colombia</p>
          </div>
        </div>
      </section>

      <section id="representados-home" className="scroll-mt-20 bg-[#06182c] py-24 text-white">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-white/15 pb-7">
            <div>
              <p className="section-kicker !text-[#37c8e7]">Red tecnológica</p>
              <h2 className="mt-4 text-4xl font-black leading-[.95] tracking-[-.045em] sm:text-6xl">Nuestros representados y aliados.</h2>
            </div>
            <ArrowLink href="/representados" light>Conocer la red</ArrowLink>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-px bg-white/15 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {homepagePartners.map(([name, logo]) => (
              <a key={name} href="/representados" className="group bg-white p-4 transition hover:bg-[#eef4f3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#37c8e7]">
                <div className="relative h-24 overflow-hidden transition-[height] duration-300 ease-out group-hover:h-32 group-focus:h-32">
                  <Image src={logo} alt={`Logo de ${name}`} fill sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 15vw" className="object-contain p-3 mix-blend-multiply transition-[padding] duration-300 group-hover:p-1 group-focus:p-1" />
                </div>
                <p className="mt-3 min-h-10 text-center text-xs font-black uppercase leading-5 tracking-[.08em] text-[#0b334e]">{name}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="clientes-home" className="scroll-mt-20 bg-[#f3f0e9] py-24 text-[#071d34]">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-[#c9d2d8] pb-7">
            <div>
              <p className="section-kicker">Experiencia multisectorial</p>
              <h2 className="mt-4 text-4xl font-black leading-[.95] tracking-[-.045em] sm:text-6xl">Nuestros clientes.</h2>
            </div>
            <ArrowLink href="/clientes">Ver directorio completo</ArrowLink>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-px bg-[#c9d2d8] sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
            {clients.map((client) => (
              <a key={client.name} href="/clientes" className="group bg-white p-4 transition hover:bg-[#eef4f3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#0b7898]">
                <div className="relative flex h-20 items-center justify-center overflow-hidden transition-[height] duration-300 ease-out group-hover:h-28 group-focus:h-28">
                  {client.logo ? (
                    <Image src={client.logo} alt={`Logo de ${client.name}`} fill sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 16vw" className="object-contain p-2 mix-blend-multiply transition-[padding] duration-300 group-hover:p-0 group-focus:p-0" />
                  ) : (
                    <span className="text-center text-sm font-black tracking-[-.02em] text-[#0b334e]">{client.name.toUpperCase()}</span>
                  )}
                </div>
                <p className="mt-3 min-h-10 text-center text-xs font-bold leading-5 text-[#526576]">{client.name}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#04111f] py-12">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 lg:grid-cols-[1fr_auto] lg:items-end lg:px-10">
          <div>
            <div className="inline-block bg-white px-3 py-2">
              <Image src="/assets/arec-logo.svg" alt="AREC" width={206} height={48} className="h-auto w-[190px]" />
            </div>
            <p className="mt-5 max-w-xl text-sm leading-6 text-white/50">Sistemas inteligentes de transporte · Automatización y control industrial · Instrumentación para petróleo, gas y marino.</p>
          </div>
          <div className="text-left text-xs leading-6 text-white/45 lg:text-right">
            <p><a href="/clientes" className="hover:text-white">Clientes</a> · <a href="/representados" className="hover:text-white">Representados y aliados</a></p>
            <p>Bogotá, Colombia · Miami, USA</p>
            <p>© 2026 AREC S.A.S. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

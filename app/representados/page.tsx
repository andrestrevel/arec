import type { Metadata } from 'next';
import Image from 'next/image';
import { InnerSiteFooter } from '@/components/inner-site-footer';
import { InnerSiteHeader } from '@/components/inner-site-header';

export const metadata: Metadata = {
  title: 'Representados y aliados | AREC',
  description: 'Fabricantes representados y aliados tecnológicos que respaldan las soluciones de AREC.',
};

const represented = [
  {
    name: 'AMOT',
    logo: '/assets/partners/amot.jpg',
    focus: 'Control de temperatura y protección de equipos',
    description: 'Válvulas termostáticas, control de procesos y soluciones para la protección de motores y maquinaria crítica.',
  },
  {
    name: 'MINCO',
    logo: '/assets/partners/logo_minco.webp',
    focus: 'Sensado térmico y calefacción flexible',
    description: 'Sensores de temperatura, calentadores flexibles e instrumentación para aplicaciones industriales exigentes.',
  },
  {
    name: 'VISHAY PRECISION GROUP',
    logo: '/assets/partners/vishay-precision-group.svg',
    focus: 'Tecnologías de medición de precisión',
    description: 'Sensores, galgas extensométricas, celdas de carga y soluciones de medición para aplicaciones industriales de alta exactitud.',
  },
  {
    name: 'SENSORTRONICS',
    logo: '/assets/partners/sensortronics.jpg',
    focus: 'Celdas de carga y pesaje industrial',
    description: 'Tecnología de medición de peso y fuerza para integración en básculas, tanques, plataformas y maquinaria.',
  },
  {
    name: 'THAMES SIDE SENSORS',
    logo: '/assets/partners/thames-side.webp',
    focus: 'Celdas de carga y sistemas de pesaje',
    description: 'Celdas de carga, módulos de pesaje e instrumentación para silos, tanques, tolvas y procesos industriales.',
  },
  {
    name: 'CHALWYN',
    logo: '/assets/partners/chalwyn.webp',
    focus: 'Protección de motores diésel',
    description: 'Válvulas de cierre de admisión, arrestadores de chispas y soluciones certificadas para atmósferas explosivas.',
  },
  {
    name: 'RODA DEACO',
    logo: '/assets/partners/roda-deaco.webp',
    focus: 'Seguridad para motores en áreas de riesgo',
    description: 'Sistemas de parada y protección para motores diésel que operan en ambientes industriales potencialmente peligrosos.',
  },
  {
    name: 'GEOKON INSTRUMENTS',
    logo: '/assets/partners/geokon-instruments.png',
    focus: 'Instrumentación geotécnica y estructural',
    description: 'Sensores de cuerda vibrante, adquisición de datos y plataformas de monitoreo para infraestructura, minería y obras civiles.',
  },
];

const allies = [
  {
    name: 'KISTLER AG',
    logo: '/assets/partners/kistler-logo.png',
    focus: 'Medición dinámica de alta precisión',
    description: 'Tecnología piezoeléctrica para fuerza, torque, presión, aceleración y análisis avanzado de procesos.',
  },
  {
    name: 'METRIX VIBRATION',
    logo: '/assets/partners/metrix-logo.jpg',
    focus: 'Monitoreo y protección por vibración',
    description: 'Sensores, transmisores e interruptores para monitoreo de condición y protección de maquinaria rotativa.',
  },
  {
    name: 'HPI HIGH PRESSURE INSTRUMENTATION',
    logo: '/assets/partners/hpi-high-pressure-instrumentation.png',
    focus: 'Instrumentación y medición de alta presión',
    description: 'Transductores y equipos especializados para medición, ensayo y adquisición de datos en aplicaciones de alta exigencia.',
  },
  {
    name: 'CAMPBELL SCIENTIFIC',
    logo: '/assets/partners/campbell-scientific.svg',
    focus: 'Adquisición de datos y monitoreo remoto',
    description: 'Registradores de datos, sistemas de medición y control para aplicaciones ambientales, energéticas y de infraestructura.',
  },
];

function BrandCard({ brand, number }: { brand: (typeof represented)[number]; number: number }) {
  return (
    <article
      tabIndex={0}
      className="group grid min-h-[310px] grid-rows-[auto_1fr] border border-[#c9d2d8] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#0b7898] hover:shadow-[0_16px_40px_rgba(6,24,44,.10)] focus-visible:-translate-y-1 focus-visible:border-[#0b7898] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b7898] focus-visible:shadow-[0_16px_40px_rgba(6,24,44,.10)]"
    >
      <div className="relative m-6 mb-0 flex h-[125px] items-center justify-center overflow-hidden bg-[#f5f7f7] p-6 transition-[height] duration-300 ease-out group-hover:h-[210px] group-focus:h-[210px]">
        <Image src={brand.logo} alt={`Logo de ${brand.name}`} fill sizes="(max-width: 768px) 90vw, 40vw" className="object-contain p-7 mix-blend-multiply transition-[padding] duration-300 ease-out group-hover:p-3 group-focus:p-3" />
      </div>
      <div className="p-6">
        <div className="flex items-start gap-4">
          <span className="text-xs font-black text-[#f09812]">{String(number).padStart(2, '0')}</span>
          <div>
            <h3 className="text-2xl font-black tracking-[-.025em]">{brand.name}</h3>
            <p className="mt-2 text-sm font-bold text-[#0b7898]">{brand.focus}</p>
            <p className="mt-4 text-base leading-7 text-[#526576]">{brand.description}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function RepresentedPage() {
  return (
    <main className="min-h-screen bg-[#f3f0e9] text-[#071d34]">
      <InnerSiteHeader />
      <section className="relative overflow-hidden bg-[#06182c] py-24 text-white">
        <div className="engineering-grid absolute inset-0 opacity-25" />
        <div className="relative mx-auto max-w-[1440px] px-5 lg:px-10">
          <p className="section-kicker !text-[#37c8e7]">Red tecnológica</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[.92] tracking-[-.055em] sm:text-7xl">Fabricantes que amplían nuestra capacidad.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/65">AREC combina presencia local, conocimiento de aplicación y tecnología especializada para construir soluciones completas.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="border-b border-[#c9d2d8] pb-6">
            <p className="section-kicker">Representados</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-.04em] sm:text-6xl">Marcas con respaldo comercial y técnico</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {represented.map((brand, index) => <BrandCard key={brand.name} brand={brand} number={index + 1} />)}
          </div>
        </div>
      </section>

      <section className="bg-[#dfeaec] py-20">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="border-b border-[#aec1c8] pb-6">
            <p className="section-kicker">Aliados</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-.04em] sm:text-6xl">Cooperación para aplicaciones especializadas</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {allies.map((brand, index) => <BrandCard key={brand.name} brand={brand} number={index + 1} />)}
          </div>
        </div>
      </section>
      <InnerSiteFooter />
    </main>
  );
}

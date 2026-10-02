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
    name: 'REVERE TRANSDUCERS',
    logo: null,
    focus: 'Pesaje y medición de fuerza',
    description: 'Celdas de carga y transductores para sistemas de pesaje industrial, procesos y aplicaciones de alta precisión.',
  },
  {
    name: 'SENSORTRONICS',
    logo: '/assets/partners/sensortronics.jpg',
    focus: 'Celdas de carga y pesaje industrial',
    description: 'Tecnología de medición de peso y fuerza para integración en básculas, tanques, plataformas y maquinaria.',
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
];

function BrandCard({ brand, number }: { brand: (typeof represented)[number]; number: number }) {
  return (
    <article
      tabIndex={0}
      className="group grid min-h-[310px] grid-rows-[auto_1fr] border border-[#c9d2d8] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#0b7898] hover:shadow-[0_16px_40px_rgba(6,24,44,.10)] focus-visible:-translate-y-1 focus-visible:border-[#0b7898] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b7898] focus-visible:shadow-[0_16px_40px_rgba(6,24,44,.10)]"
    >
      <div className="relative m-6 mb-0 flex h-[125px] items-center justify-center overflow-hidden bg-[#f5f7f7] p-6 transition-[height] duration-300 ease-out group-hover:h-[210px] group-focus:h-[210px]">
        {brand.logo ? (
          <Image src={brand.logo} alt={`Logo de ${brand.name}`} fill sizes="(max-width: 768px) 90vw, 40vw" className="object-contain p-7 mix-blend-multiply transition-[padding] duration-300 ease-out group-hover:p-3 group-focus:p-3" />
        ) : (
          <div className="text-center">
            <span className="block text-2xl font-black tracking-[-.04em] text-[#0b334e]">REVERE</span>
            <span className="mt-1 block text-xs font-bold tracking-[.18em] text-[#0b7898]">TRANSDUCERS</span>
          </div>
        )}
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

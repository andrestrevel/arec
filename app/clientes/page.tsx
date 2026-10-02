import type { Metadata } from 'next';
import Image from 'next/image';
import { InnerSiteFooter } from '@/components/inner-site-footer';
import { InnerSiteHeader } from '@/components/inner-site-header';
import { clients, sectors } from '@/lib/clients';

export const metadata: Metadata = {
  title: 'Clientes | AREC',
  description: 'Organizaciones que han confiado en las soluciones de instrumentación e ingeniería aplicada de AREC.',
};

export default function ClientsPage() {
  return (
    <main className="min-h-screen bg-[#f3f0e9] text-[#071d34]">
      <InnerSiteHeader />
      <section className="relative overflow-hidden bg-[#06182c] py-24 text-white">
        <div className="engineering-grid absolute inset-0 opacity-25" />
        <div className="relative mx-auto max-w-[1440px] px-5 lg:px-10">
          <p className="section-kicker !text-[#37c8e7]">Experiencia multisectorial</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end">
            <h1 className="max-w-4xl text-5xl font-black leading-[.92] tracking-[-.055em] sm:text-7xl">Clientes que han confiado en AREC.</h1>
            <p className="max-w-xl text-lg leading-8 text-white/65 lg:ml-auto">Un recorrido por organizaciones de infraestructura, industria, energía, educación, minería, transporte y servicios públicos.</p>
          </div>
          <div className="mt-12 flex flex-wrap gap-2">
            {sectors.map((sector) => (
              <span key={sector} className="border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/70">{sector}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5 border-b border-[#c9d2d8] pb-6">
            <div>
              <p className="section-kicker">Directorio histórico</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-.035em] sm:text-5xl">Organizaciones en orden alfabético</h2>
            </div>
            <p className="text-base font-bold text-[#0b7898]">{clients.length} organizaciones</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {clients.map((client, index) => (
              <article key={client.name} className="group grid min-h-[238px] grid-rows-[106px_auto] border border-[#c9d2d8] bg-white transition hover:-translate-y-1 hover:border-[#0b7898] hover:shadow-[0_16px_40px_rgba(6,24,44,.10)]">
                <div className="relative m-5 mb-0 flex items-center justify-center overflow-hidden bg-[#f7f8f8] p-4">
                  <Image src={client.logo} alt={`Logo de ${client.name}`} fill sizes="(max-width: 640px) 90vw, (max-width: 1280px) 45vw, 30vw" className="object-contain p-4 mix-blend-multiply" />
                </div>
                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 text-xs font-black text-[#f09812]">{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <h3 className="text-lg font-black leading-tight">{client.name}</h3>
                      <p className="mt-2 text-sm font-bold text-[#0b7898]">{client.sector}</p>
                      <p className="mt-2 text-base leading-6 text-[#526576]">{client.description}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <InnerSiteFooter />
    </main>
  );
}


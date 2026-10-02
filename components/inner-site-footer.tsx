import Image from 'next/image';
import Link from 'next/link';

export function InnerSiteFooter() {
  return (
    <footer className="bg-[#04111f] py-12 text-white">
      <div className="mx-auto grid max-w-[1440px] gap-9 px-5 lg:grid-cols-[1fr_auto] lg:items-end lg:px-10">
        <div>
          <div className="inline-block bg-white px-3 py-2">
            <Image src="/assets/arec-logo.svg" alt="AREC" width={206} height={48} className="h-auto w-[190px]" />
          </div>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/55">Instrumentación, automatización, infraestructura tecnológica e ingeniería aplicada.</p>
        </div>
        <div className="text-sm leading-7 text-white/55 lg:text-right">
          <div className="mb-2 flex flex-wrap gap-x-5 lg:justify-end">
            <Link href="/clientes" className="hover:text-white">Clientes</Link>
            <Link href="/representados" className="hover:text-white">Representados y aliados</Link>
          </div>
          <p>ventas@arec.com.co · +57 310 783 5485</p>
          <p>© 2026 AREC S.A.S. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}


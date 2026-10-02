import Image from 'next/image';
import Link from 'next/link';

export function InnerSiteHeader() {
  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-white/10 bg-[#06182c]/95 text-white backdrop-blur-xl">
      <div className="mx-auto flex min-h-20 max-w-[1440px] items-center justify-between gap-5 px-5 py-4 lg:px-10">
        <Link href="/" aria-label="AREC, ir al inicio" className="shrink-0 rounded-sm bg-white px-2.5 py-2">
          <Image src="/assets/arec-logo.svg" alt="AREC Instrumentación e Ingeniería" width={206} height={48} priority className="h-auto w-[160px] sm:w-[206px]" />
        </Link>
        <nav aria-label="Navegación principal" className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-sm font-bold">
          <Link className="text-white/70 transition hover:text-white" href="/">Inicio</Link>
          <Link className="text-white/70 transition hover:text-white" href="/#productos">Productos</Link>
          <Link className="text-white/70 transition hover:text-white" href="/clientes">Clientes</Link>
          <Link className="text-white/70 transition hover:text-white" href="/representados">Representados y aliados</Link>
          <Link className="bg-[#f5a623] px-4 py-2 text-[#06182c] transition hover:bg-[#ffc04d]" href="/#contacto">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}

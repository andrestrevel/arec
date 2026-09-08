import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://arec-ingenieria-pro.andrestrevel.chatgpt.site'),
  title: 'AREC | Instrumentación e ingeniería aplicada',
  description: 'Soluciones de tráfico, automatización y control industrial, petróleo, gas y marino para Latinoamérica.',
  icons: { icon: '/favicon.png' },
  openGraph: {
    title: 'AREC | Medición precisa. Decisiones que mueven industrias.',
    description: 'Instrumentación e ingeniería aplicada para Latinoamérica.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'AREC — Instrumentación e ingeniería aplicada' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AREC | Medición precisa. Decisiones que mueven industrias.',
    description: 'Instrumentación e ingeniería aplicada para Latinoamérica.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}

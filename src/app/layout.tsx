import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { personalInfo } from '../data/portfolio-data';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
  variable: '--font-inter',
});

export const viewport: Viewport = {
  themeColor: '#2563EB',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://jainoddin.dev'),
  title: `${personalInfo.name} | ${personalInfo.role}`,
  description:
    'Full Stack Developer specializing in high-performance web applications, modern frontend architectures, and scalable cloud systems.',
  keywords: [
    'Jainoddin Shaik',
    'Full Stack Developer',
    'Next.js Developer',
    'React Developer',
    'TypeScript',
    'Tailwind CSS',
    'Node.js Developer',
    'Web Developer Hyderabad',
    'Frontend Engineer',
  ],
  authors: [{ name: personalInfo.name, url: 'https://jainoddin.dev' }],
  creator: personalInfo.name,
  alternates: {
    canonical: 'https://jainoddin.dev',
  },
  category: 'technology',
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jainoddin.dev',
    title: `${personalInfo.name} | ${personalInfo.role}`,
    description: personalInfo.shortBio,
    siteName: `${personalInfo.name} Portfolio`,
    images: [
      {
        url: '/images/hero-banner.webp',
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} - ${personalInfo.role}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} | ${personalInfo.role}`,
    description: personalInfo.shortBio,
    images: ['/images/hero-banner.webp'],
    creator: '@jainoddin',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/images/logos/js-icon.webp', type: 'image/webp' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personalInfo.name,
    jobTitle: personalInfo.role,
    description: personalInfo.shortBio,
    url: 'https://jainoddin.dev',
    sameAs: [
      personalInfo.contact.linkedin,
      personalInfo.contact.github,
      'https://x.com',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hyderabad',
      addressCountry: 'India',
    },
    knowsAbout: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'MongoDB',
      'Tailwind CSS',
      'Full Stack Web Development',
    ],
  };

  return (
    <html lang="en" dir="ltr" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-[#FAFCFF] text-slate-900 selection:bg-blue-600 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}

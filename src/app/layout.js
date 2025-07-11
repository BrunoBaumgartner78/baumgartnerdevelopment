import { Orbitron } from 'next/font/google';
import ThemeProvider from '../context/ThemeContext';  // Import anpassen falls dein Pfad anders ist
import InnerApp from './components/InnerApp';         // Import anpassen falls dein Pfad anders ist
import '../app/globals.css';



const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
  display: 'swap',
  preload: true,
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'Baumgartner Development – Webdesign aus der Schweiz',
  description: 'Modernes, responsives Webdesign und SEO aus der Schweiz. Websites, die Eindruck hinterlassen.',
  keywords: 'Webdesign Schweiz, Webentwicklung, SEO Schweiz, Websites, UX/UI',
  authors: [{ name: 'Bruno Baumgartner', url: 'https://baumgartner-development.ch' }],
  creator: 'Bruno Baumgartner',
  metadataBase: new URL('https://baumgartner-development.ch'),
  openGraph: {
    title: 'Baumgartner Development – Webdesign Schweiz',
    description: 'Modernes, responsives Webdesign und SEO aus der Schweiz. Websites, die Eindruck hinterlassen.',
    url: 'https://baumgartner-development.ch',
    siteName: 'Baumgartner Development',
    images: [
      {
        url: 'https://baumgartner-development.ch/baumgartner-development.jpg',
        width: 1200,
        height: 630,
        alt: 'Webdesign Schweiz – Baumgartner Development',
      },
    ],
    locale: 'de_CH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Baumgartner Development – Webdesign Schweiz',
    description: 'Modernes, responsives Webdesign und SEO aus der Schweiz.',
    images: ['https://baumgartner-development.ch/baumgartner-development.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  <link rel="canonical" href="https://baumgartner-development.ch" />
  <link rel="manifest" href="/manifest.webmanifest" />

  {/* Favicon und Icons – alle Tags müssen mit /> abgeschlossen werden */}
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

  <meta name="robots" content="index,follow" />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Baumgartner Development",
        url: "https://baumgartner-development.ch",
      }),
    }}
  />
</head>

      <body className={orbitron.className}>
        <ThemeProvider>
          <InnerApp>{children}</InnerApp>
        </ThemeProvider>
      </body>
    </html>
  );
}

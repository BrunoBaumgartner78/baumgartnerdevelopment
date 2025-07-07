// app/layout.jsx
import './globals.css';
import ThemeProvider from '../context/ThemeContext';
import InnerApp from './components/InnerApp';

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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;800&display=swap" rel="stylesheet" />

      <body>
       
        <ThemeProvider>
          <InnerApp>{children}</InnerApp>
        </ThemeProvider>
      </body>
    </html>
  );
}

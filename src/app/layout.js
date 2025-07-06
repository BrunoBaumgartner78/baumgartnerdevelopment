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
        url: '/baumgartner-development.jpg', // <- sicherstellen, dass dieses Bild im public/ Ordner ist
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
    creator: '@baumgartnerdevelopment',
    images: ['/baumgartner-development.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
       
        <ThemeProvider>
          <InnerApp>{children}</InnerApp>
        </ThemeProvider>
      </body>
    </html>
  );
}

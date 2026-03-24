import type { Metadata, Viewport } from 'next';
import './globals.css';
import Providers from './providers';
import { Open_Sans, Orbitron, Roboto } from 'next/font/google';
import Navigation from './componenets/navbar';
import Footer from './componenets/footer';
import { Toaster } from 'react-hot-toast';
import ScrollButton from './motionanimations/ScrollButton';
import QueryProvider from './queryprovider';
import FontWrapper from './componenets/FontWrapper';
const Orbi = Orbitron({ subsets: ['latin'] });
const Robo = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] });
export const metadata: Metadata = {
  metadataBase: new URL('https://www.osworld.dev'),
  title: 'Os Portfolio',
  description: 'Portfolio of Oscar Leal: projects, blog posts, and martech work.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.osworld.dev',
    siteName: 'Os Portfolio',
    title: 'Os Portfolio',
    description: 'Portfolio of Oscar Leal: projects, blog posts, and martech work.',
    images: [
      {
        url: 'https://newportv2.s3.us-east-2.amazonaws.com/MeLaptop.png',
        width: 1200,
        height: 630,
        alt: 'Oscar Leal portfolio preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Os Portfolio',
    description: 'Portfolio of Oscar Leal: projects, blog posts, and martech work.',
    images: ['https://newportv2.s3.us-east-2.amazonaws.com/MeLaptop.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${Orbi.className} bg-background text-foreground`}>
        <Toaster position="top-center" toastOptions={{ duration: 5000 }} />
        <QueryProvider>
          <Providers>
            <FontWrapper>
              <div className="fixed z-[1000] top-0 w-full">
                <Navigation />
              </div>
              <main style={{ paddingTop: '5rem' }}>
                {children}
                <ScrollButton />
              </main>
              <div>
                <Footer />
              </div>
            </FontWrapper>
          </Providers>
        </QueryProvider>
      </body>
    </html>
  );
}

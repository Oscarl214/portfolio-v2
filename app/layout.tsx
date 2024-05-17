import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';
import { Open_Sans, Orbitron } from 'next/font/google';
import Head from 'next/head';
import Navigation from './componenets/navbar';
import Footer from './componenets/footer';
import { Toaster } from 'react-hot-toast';
import ScrollButton from './componenets/ScrollButton';
const Orbi = Orbitron({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Os Portfolio',
  description: 'Newest personal portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <body className={Orbi.className}>
        <Toaster position="top-center" toastOptions={{ duration: 5000 }} />
        <Head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </Head>
        <Providers>
          <div className="custom-navbar">
            <Navigation />
          </div>
          <main
            style={{
              paddingTop: '7rem',
            }}
          >
            {children}
            <ScrollButton />
          </main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { useLocale, useMessages } from 'next-intl';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Parch',
  description: 'Parch Linux os',
}

export default function RootLayout({ children, params }: {
  children: React.ReactNode, params: { locale: string }
}) {
  const locale = useLocale();
  const messages = useMessages();

  // Validate that the incoming `locale` parameter is a valid locale
  if (params.locale !== locale) {
    notFound();
  }
  return (
    <html lang={locale}>
      <Head>
        {/* HTML Meta Tags  */}
        <title>Parch Linux</title>
        <meta name="description" content="Parch Linux is an open-source, Arch-based Linux distribution, that tried to be pretty, easy to use, light, fast and stable." />

        {/* Facebook Meta Tags  */}
        <meta property="og:url" content="https://parchlinux.ir/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Parch Linux" />
        <meta property="og:description" content="Parch Linux is an open-source, Arch-based Linux distribution, that tried to be pretty, easy to use, light, fast and stable." />
        <meta property="og:image" content="/logo.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="parchlinux.ir" />
        <meta property="twitter:url" content="https://parchlinux.ir/" />
        <meta name="twitter:title" content="Parch Linux" />
        <meta name="twitter:description" content="Parch Linux is an open-source, Arch-based Linux distribution, that tried to be pretty, easy to use, light, fast and stable." />
        <meta name="twitter:image" content="/logo.png" />
      </Head>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
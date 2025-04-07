// pages/_app.js
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import '@/styles/globals.css'; // Import your global styles

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        {/* Global Meta Tags */}
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Hey, I'm Nelson. I'm a front-end web developer and graphic designer."
        />
        <meta name="author" content="Nelson Nathan" />
        <meta name="keywords" content="web design, front-end development, graphic design, NLXN, Nelson Nathan" />

        {/* Title with phonetic transcription */}
        <title>Nelson Nathan - NLXN™ (/&#601;l &#120;&#115; &#601;n/)</title>

        {/* Google Fonts: Noto Sans */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap"
          rel="stylesheet"
        />
        
        {/* Favicon links */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/favicon/site.webmanifest" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

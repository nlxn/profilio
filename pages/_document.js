import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
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

          {/* Link to Google Fonts: Noto Sans */}
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body style={{ fontFamily: 'Noto Sans', margin: 0, padding: 0 }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

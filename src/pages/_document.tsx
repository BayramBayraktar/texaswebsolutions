import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script';
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon"
          href="/images/-TWS-.png"
          type="image/x-icon"
        />
        <meta name="trustpilot-one-time-domain-verification-id" content="97da5b14-94e8-43a9-bfbb-a691e9136b74"/>
        <meta name="google-site-verification" content="AXO1SCzCW_G1LbqQ8UO8nAwl5lJfj61p-EhaIXp-mxs" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="ejTVpWX8TsE6HvnQTooJeA"
          strategy="afterInteractive"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

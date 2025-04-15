import type { AppProps } from "next/app";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import WhatsappButton from "@/components/whatsappButton";
import Script from 'next/script';
import "@/styles/globals.css";
import 'animate.css';


interface GoogleTagEvent {
  page_path?: string;
  page_location?: string;
  page_title?: string;
  [key: string]: string | number | undefined;
}

type GtagAction = 'config' | 'event' | 'set' | 'js' | 'consent';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (
      action: GtagAction,
      targetId: string,
      eventParams?: GoogleTagEvent
    ) => void;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID as string;


  if (!process.env.NEXT_PUBLIC_GA_ID) {
    console.warn('Google Analytics Measurement ID is not defined');
  }

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    const handleRouteChange = (url: string) => {
      if (window.gtag) {
        window.gtag('config', GA_MEASUREMENT_ID, {
          page_path: url,
          page_location: window.location.href,
          page_title: document.title,
        });
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events, GA_MEASUREMENT_ID]);

  return (
    <>
      {/* Google Analytics Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `,
        }}
      />

      <Script
        src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="lazyOnload"
      />
      <WhatsappButton />
      <Component {...pageProps} />
    </>
  );
}
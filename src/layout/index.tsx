import { ReactNode } from "react";
import Head from "next/head";
import Script from "next/script"; 

//Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface IMainLayout {
    children: ReactNode;
    title?: string;
    description?: string;
    keywordContent?: string;
}

export default function MainLayout({
    children,
    title,
    description,
    keywordContent
}: IMainLayout) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />

                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="index, follow" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />

                <meta name="keywords" content={keywordContent} />
            </Head>

            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=AW-17416214452`}
            />
            <Script id="google-ads-tag" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'AW-17416214452');
                `}
            </Script>

            <Script id="google-ads-conversion" strategy="afterInteractive">
                {`
                    gtag('event', 'conversion', {'send_to': 'AW-17416214452/MpdVCN_axPwaELSv2fBA'});
                `}
            </Script>

            <Header />
            {children}
            <Footer />
        </div>
    )
}

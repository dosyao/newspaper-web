import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name='application-name' content='Newspaper' />
                <meta name='apple-mobile-web-app-capable' content='yes' />
                <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                <meta name='apple-mobile-web-app-title' content='Newspaper' />
                <meta name='description' content='Newspaper Web' />
                <meta name='format-detection' content='telephone=no' />
                <meta name='mobile-web-app-capable' content='yes' />
                <meta name='msapplication-config' content='/icons/browserconfig.xml' />
                <meta name='msapplication-TileColor' content='#000000' />
                <meta name='msapplication-tap-highlight' content='no' />
                <meta name='theme-color' content='#ffffff' />

                <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
                <link rel="mask-icon" color="#000000" href="/icons/safari-pinned-tab.svg" />
                <link rel="shortcut icon" href="/icons/favicon.ico" />
                <link rel='manifest' href='/manifest.json' />

                <meta name='twitter:card' content='summary' />
                <meta name='twitter:url' content='https://newspaper-web.vercel.app' />
                <meta name='twitter:title' content='Newspaper' />
                <meta name='twitter:description' content='Newspaper Web' />
                <meta name='twitter:image' content='https://newspaper-web.vercel.app/icons/android-chrome-192x192.png' />
                <meta name='twitter:creator' content='@VladyslavNahornyi' />
                <meta property='og:type' content='website' />
                <meta property='og:title' content='Newspaper' />
                <meta property='og:description' content='Newspaper Web' />
                <meta property='og:site_name' content='Newspaper' />
                <meta property='og:url' content='https://newspaper-web.vercel.app' />
                <meta property='og:image' content='https://newspaper-web.vercel.app/icons/apple-touch-icon.png' />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

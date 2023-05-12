import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import localFont from 'next/font/local';
import Link from 'next/link';
import Image from 'next/image';

const marketFont = localFont({
    variable: '--font-market',
    src: [
        {
            path: '../public/fonts/MarketAlt-Medium.woff2',
            weight: 'normal',
            style: 'normal'
        },
        {
            path: '../public/fonts/Market-Thin.woff2',
            weight: '300',
            style: 'normal'
        },
        {
            path: '../public/fonts/Market-Bold.woff2',
            weight: 'bold',
            style: 'normal'
        }
    ]
});

import './globals.css';

export const metadata = {
    title: 'The Bun Cult',
    themeColor: '#F4C430',
    openGraph: {
        title: 'The Bun Cult',
        url: 'https://buncult.com',
        images: [
            {
                url: 'https://buncult.com/og.png',
                width: 800,
                height: 600
            }
        ]
    },
    robots: {
        index: true
    },
    viewport: {
        width: 'device-width',
        initialScale: 1
    }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={marketFont.variable}>
        <body>
            <header>
                <div className="header-container">
                    <div className="header-background"></div>
                    <div className="header-text"><Image src="/img/buncult.svg" width={300} height={50}/></div>
                    <div className="header-bun"><Image src="/img/bun.png" width={300} height={300}/></div>
                </div>
                <div className='benny'><Image src="/img/_cafe.webp" width={256} height={293}/></div>
                <nav>
                    <Link className="navItem" href="https://twitter.com/bennyraccoon">twitter</Link>
                    <Link className="navItem" href="https://www.instagram.com/bennyraccoon/">instagram</Link>
                    <Link className="navItem" href="https://www.youtube.com/c/bennyraccoon">youtube</Link>
                    <Link className="navItem" href="https://www.tiktok.com/@bennyraccoon">tiktok</Link>
                </nav>
            </header>
            {children}
            <Analytics />
        </body>
    </html>
  )
}

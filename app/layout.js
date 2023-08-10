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
    description: 'the Buncult is a website focused on video game development centered around the adventures of Benny the Raccoon and also content for the popular tabletop game Dungeons and Dragons. Explore our world today!',
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
            {children}
            <Analytics />
        </body>
    </html>
  )
}

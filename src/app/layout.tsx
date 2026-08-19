import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Playfair_Display, Alex_Brush } from 'next/font/google';
import { getMessages, getLocale } from 'next-intl/server';
import { ThemeProvider, I18nProvider, SmoothScrollProvider } from '@/providers';

import '@/styles/globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-jetbrains',
    display: 'swap',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
});

const signature = Alex_Brush({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-signature',
    display: 'swap',
});

export const metadata: Metadata = {
    title: {
        default: 'Mostafa Elrashash | AI Engineer',
        template: '%s | Mostafa Elrashash',
    },
    description: 'AI & Machine Learning student and junior software developer specializing in computer vision, NLP, and automation. Explore my projects, skills, and professional journey.',
    keywords: ['AI engineer', 'machine learning', 'computer vision', 'portfolio', 'python developer'],
    authors: [{ name: 'Mostafa Elrashash' }],
    creator: 'Mostafa Elrashash',
    metadataBase: new URL('https://your-domain.com'),
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://your-domain.com',
        title: 'Mostafa Elrashash | AI Engineer',
        description: 'AI & Machine Learning student and junior software developer specializing in computer vision, NLP, and automation.',
        siteName: 'Mostafa Elrashash Portfolio',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mostafa Elrashash | AI Engineer',
        description: 'AI & Machine Learning student and junior software developer specializing in computer vision, NLP, and automation.',
        creator: '@Rashash11',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: [
            { url: '/logo-light.svg', media: '(prefers-color-scheme: light)' },
            { url: '/logo-dark.svg', media: '(prefers-color-scheme: dark)' },
        ],
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' },
    ],
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
};

import { ThemeAwareClickSpark } from '@/components/ui/ThemeAwareClickSpark';
import { ConditionalNavigation } from '@/components/layout/ConditionalNavigation';
import { ArcPreloaderWrapper } from '@/components/layout/ArcPreloaderWrapper';
import { ChatBot } from '@/components/layout/ChatBot';

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const locale = await getLocale();
    const messages = await getMessages();

    return (
        <html lang={locale} data-scroll-behavior="smooth" suppressHydrationWarning>
            <body className={`${inter.variable} ${jetbrainsMono.variable} ${playfair.variable} ${signature.variable} font-sans relative`}>
                <ThemeProvider>
                    <I18nProvider locale={locale} messages={messages}>
                        <SmoothScrollProvider>
                            <ThemeAwareClickSpark>
                                <ArcPreloaderWrapper>
                                    <ConditionalNavigation>
                                        {children}
                                    </ConditionalNavigation>
                                </ArcPreloaderWrapper>
                                <ChatBot headless />
                            </ThemeAwareClickSpark>
                        </SmoothScrollProvider>
                    </I18nProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}


import "./globals.css";
import type {Metadata, Viewport} from "next";
import localFont from 'next/font/local'
import Navbar from "@/app/components/Navbar/navbar";
import ScrollProvider from "@/app/components/ScrollProvider/scrollProvider";
import Footer from "@/app/components/Footer/footer";

export const metadata: Metadata = {
    title: 'Nexus - Professional Powerlifting Platform',
    description: 'Connect with expert powerlifting coaches, track your progress, and optimize your training. Features include real-time progress tracking, personalized workout plans, form check analysis, and direct communication with verified powerlifting coaches. Monitor your squat, bench press, and deadlift progression with advanced analytics.',
    keywords: 'powerlifting, strength training, powerlifting coach, strength progress tracking, workout planning, squat, bench press, deadlift',
    authors: [{ name: 'Nexus' }],
    openGraph: {
        title: 'Nexus - Professional Powerlifting Platform',
        description: 'Connect with expert powerlifting coaches, track your progress, and optimize your training with real-time analytics and personalized workout plans.',
        images: ['/mockups/dashboard.webp'],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Nexus - Professional Powerlifting Platform',
        description: 'Connect with expert powerlifting coaches, track your progress, and optimize your training with real-time analytics and personalized workout plans.',
        images: ['/mockups/dashboard.webp'],
    },
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-icon.png',
    },
    robots: 'index, follow',
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
}

const lausanne = localFont({
    src: [
        {
            path: './fonts/TWKLausanne-400.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: './fonts/TWKLausanne-500.woff2',
            weight: '500',
            style: 'normal',
        },
    ],
    variable: '--font-lausanne'
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className={lausanne.variable}>
      <ScrollProvider>
          <body>
          <Navbar/>
          {children}
          <Footer/>
          </body>
      </ScrollProvider>
      </html>
  );
}

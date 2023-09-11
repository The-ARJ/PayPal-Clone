import { Header } from '@/components/Header'
import './globals.css'
import { Rubik } from 'next/font/google'
import { SubHeader } from '@/components/SubHeader';
import { Footer } from '@/components/Footer';

const rubik = Rubik({
  subsets: ["latin"],
  fallback: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
});

export const metadata = {
  title: 'PayPal: Make a payment',
  icons: {
    icon: '/assets/paypal-logo.png',
  },
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Header />
        <SubHeader />
        {children}
        <Footer />
      </body>
    </html>
  )
}

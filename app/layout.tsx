import { Nunito } from 'next/font/google';

import './globals.css'
import Navbar from './components/navbar/Navbar';
import Modal from './components/modals/Modal';
import RegisterModal from './hooks/RegisterModal';

export const metadata = {
  title: 'Airbnb - Berkay Nayman',
  description: 'Airbnb - Berkay Nayman',
}

const font = Nunito({
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  )
}

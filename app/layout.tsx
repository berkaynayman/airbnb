import { Nunito } from 'next/font/google';

import './globals.css'

import Navbar from './components/navbar/Navbar';
import RegisterModal from './components/modals/RegisterModal';
import LoginModal from './components/modals/LoginModal';
import RentModal from './components/modals/RentModal';
import SearchModal from './components/modals/SearchModal';

import ToasterProvider from './providers/ToasterProvider';
import getCurrentUser from './actions/getCurrentUser';
import ClientOnly from './components/ClientOnly';

export const metadata = {
  title: 'Airbnb - Berkay Nayman',
  description: 'Airbnb - Berkay Nayman',
}

const font = Nunito({
  subsets: ["latin"]
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <SearchModal />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className='pb-20 pt-28'>
          {children}
        </div>
      </body>
    </html>
  )
}

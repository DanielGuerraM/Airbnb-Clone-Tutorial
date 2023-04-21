import { Nunito } from 'next/font/google'

import RegisterModal from './components/modals/RegisterModal'
import RentModal from './components/modals/RentModal'
import LoginModal from './components/modals/LoginModal'
import './globals.css'
import Navbar from './components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import Modal from './components/modals/Modal'
import ToasterProvider from './providers/ToasterProvider'
import getCurrentUSer from './actions/getCurrentUser'

export const metadata = {
  title: 'Airbnbn',
  description: 'Airbnb Clone',
}

const font = Nunito({
  subsets: ['latin']
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const currentUser = await getCurrentUSer();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RentModal />
          <RegisterModal />
          <LoginModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
          <div className='pb-20 pt-28'>
            {children}
          </div>
      </body>
    </html>
  )
}

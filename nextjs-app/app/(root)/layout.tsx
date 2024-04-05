import React from 'react'
import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Zommer",
  description: "Video calling app",
  icons: {
    icon: '/icons/logo.svg',
  }
};

const RootLayout = ({ children }: { children: React.ReactNode}) => {
  return (
    <main>
        <StreamVideoProvider>
          {children}
        </StreamVideoProvider>
    </main>
  )
}

export default RootLayout
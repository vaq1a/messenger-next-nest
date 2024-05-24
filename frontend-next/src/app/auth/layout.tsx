import type { Metadata } from 'next'
import {Navigation} from "@/components/Navigation/Navigation";

export const metadata: Metadata = {
  title: 'Auth Layout',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='grid grid-cols-main-auth-container h-screen'>
       <Navigation />
      {children}
    </div>
  )
}

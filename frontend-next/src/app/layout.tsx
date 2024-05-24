import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import GraphQLProvider from "@/providers/GraphQLProvider";
import {AntdRegistry} from "@ant-design/nextjs-registry";

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Messenger',
  description: 'Description for messenger',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <GraphQLProvider>
            {children}
          </GraphQLProvider>
        </AntdRegistry>
      </body>
    </html>
  )
}

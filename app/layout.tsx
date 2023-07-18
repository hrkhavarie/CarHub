import { Footer, Navbar, NewsLetter, ShowCase } from '@/components'
import './globals.css'


export const metadata = {
  title: 'Car Hub',
  description: 'Discover the best cars in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        {/* <ShowCase /> */}
        {/* <NewsLetter /> */}
          <Footer/>
        </body>
        
    </html>
  )
}

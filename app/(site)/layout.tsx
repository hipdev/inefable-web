import { Footer, Header } from '@/design-system/index'

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <Header />
      <div className='main-wrapper'></div>
      {children}
      <Footer />
    </main>
  )
}

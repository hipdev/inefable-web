import Link from 'next/link'

const links = [
  { name: 'Inicio', path: '/' },
  { name: '¿Qué es?', path: '/about' },
]

const HeaderNav = () => {
  return (
    <nav className='hidden gap-4 font-medium text-black/70 lg:flex xl:gap-8'>
      {links.map((link) => (
        <Link key={link.path} href={link.path} className='hover:text-black/90'>
          {link.name}
        </Link>
      ))}
    </nav>
  )
}

export default HeaderNav

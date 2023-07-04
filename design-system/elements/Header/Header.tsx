import Link from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'
import { HiDeviceMobile, HiLogin, HiPhone } from 'react-icons/hi'
import { Button } from '@/design-system/index'

import HeaderNav from './HeaderNav'

export const Header = () => {
  return (
    <header className='main-wrapper mb-10 flex items-center justify-between py-5'>
      <div className='flex items-center gap-8 xl:gap-16'>
        <Link href='/' className='text-2xl font-bold'>
          Inefable
        </Link>
        <HeaderNav />
      </div>
      <div className='hidden gap-2 lg:flex'>
        <Button intent='secondary'>Ingreso web próximamente</Button>

        <Button className='flex items-center gap-1'>
          <HiDeviceMobile /> Descargar app
        </Button>
      </div>
      <div className='flex gap-4 lg:hidden'>
        <button className='text-2xl' aria-label='Mobile menu'>
          <AiOutlineMenu />
        </button>
      </div>
    </header>
  )
}

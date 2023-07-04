import HomeHero from '@/components/Home/HomeHero'
import { Title } from '@/design-system/index'

export default function Page() {
  return (
    <section className='relative bg-gradient-to-t from-gray-100 to-white pb-16 pt-10 lg:pt-0'>
      <div className='main-wrapper relative z-10 flex h-full items-center backdrop-blur-sm md:backdrop-blur-0'>
        <div className='w-full'>
          <Title size='huge' className='mb-7 font-bold' as='h2'>
            Términos y Condiciones de Uso
          </Title>

          <p className='text-sm'>Última actualización: 4 de Julio de 2023</p>

          <p className='mt-3 text-lg text-black/70'>
            Al utilizar la aplicación móvil Inefable, en adelante "la
            aplicación", aceptas regirte por los siguientes términos y
            condiciones ("Términos"). Si no estás de acuerdo con estos Términos,
            por favor, no utilices la aplicación.
          </p>
        </div>
      </div>
    </section>
  )
}

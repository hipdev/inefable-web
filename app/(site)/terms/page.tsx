import HomeHero from '@/components/Home/HomeHero'
import { Title } from '@/design-system/index'
import Link from 'next/link'

export default function Page() {
  return (
    <section className='relative bg-gradient-to-t from-gray-100 to-white pb-16 pt-10 lg:pt-0'>
      <div className='main-wrapper relative z-10 flex h-full items-center backdrop-blur-sm md:backdrop-blur-0'>
        <div className='mx-auto w-full max-w-4xl'>
          <Title size='xxxlarge' className='mb-7 font-bold' as='h2'>
            Términos y Condiciones de Uso
          </Title>

          <p className='text-sm'>Última actualización: 4 de Julio de 2023</p>

          <p className='mt-3 text-lg text-black/70'>
            Al utilizar la aplicación móvil Inefable, en adelante "la
            aplicación", aceptas regirte por los siguientes términos y
            condiciones ("Términos"). Si no estás de acuerdo con estos Términos,
            por favor, no utilices la aplicación.
          </p>

          <h3 className='mt-7 text-xl font-medium'>1. Uso de la aplicación</h3>

          <h4 className='mt-3 text-lg font-medium text-black/80'>
            1.1 Restricciones de uso:
          </h4>

          <ul className='mt-2 list-disc pl-5 text-black/80'>
            <li>
              No puedes modificar, copiar, distribuir, transmitir, mostrar,
              ejecutar, reproducir, publicar, licenciar, crear trabajos
              derivados, transferir ni vender ninguna parte de la aplicación sin
              nuestro consentimiento previo por escrito.
            </li>
            <li>
              No puedes utilizar la aplicación de manera que infrinja los
              derechos de propiedad intelectual, la privacidad, los derechos de
              publicidad u otros derechos legales de terceros.
            </li>
            <li>
              No puedes utilizar la aplicación para enviar o transmitir
              cualquier contenido ilegal, difamatorio, ofensivo, obsceno o que
              infrinja los derechos de terceros.
            </li>
          </ul>

          <h4 className='mt-3 text-lg font-medium text-black/80'>
            1.2 Contenido de la aplicación:
          </h4>
          <p>
            La aplicación tiene por objetivo brindarte un diario que puede tener
            fotografías, un título y un contenido diario, la información es
            guardada de forma segura, los datos sólo te pertenecen a ti, no será
            compartida con nadie.
          </p>

          <h3 className='mt-7 text-xl font-medium'>
            2. Registro y autenticación
          </h3>

          <h4 className='mt-3 text-lg font-medium text-black/80'>
            2.1 Cuenta de usuario:
          </h4>

          <ul className='mt-2 list-disc pl-5 text-black/80'>
            <li>
              Al registrarte en la aplicación, debes un correo electrónico real
              y al que tengas acceso de forma segura.
            </li>
            <li>
              Eres responsable de mantener la confidencialidad de tu cuenta y
              eres el único responsable de todas las actividades que ocurran
              bajo tu cuenta.
            </li>
          </ul>

          <h4 className='mt-3 text-lg font-medium text-black/80'>
            2.2 Link mágico de inicio de sesión:
          </h4>

          <p>
            Al registrarte, recibirás un enlace mágico de inicio de sesión
            enviado a la dirección de correo electrónico que proporcionaste.
            Este enlace es personal e intransferible, y solo puede ser utilizado
            por el destinatario original.
          </p>

          <h3 className='mt-7 text-xl font-medium'>3. Contenido de usuario</h3>
          <h4 className='mt-3 text-lg font-medium text-black/80'>
            3.1 Propiedad:
          </h4>

          <p>
            Mantienes la propiedad de cualquier contenido que envíes o publiques
            a través de la aplicación, incluyendo tus diarios y las imágenes
            asociadas.
          </p>

          <h4 className='mt-3 text-lg font-medium text-black/80'>
            3.2 Licencia de uso:
          </h4>
          <p>
            Al enviar contenido a través de la aplicación, nos otorgas una
            licencia mundial, no exclusiva, libre de regalías y sublicenciable
            para usar, copiar, modificar, adaptar, distribuir y mostrar dicho
            contenido con el propósito de proporcionarte los servicios de la
            aplicación.
          </p>

          <h3 className='mt-7 text-xl font-medium'>4. Privacidad</h3>

          <h4 className='mt-3 text-lg font-medium text-black/80'>
            4.1 Política de privacidad:
          </h4>

          <p>
            Nuestra <Link href='/privacy'>política de privacidad</Link> describe
            cómo recopilamos, utilizamos y compartimos la información personal
            de los usuarios. Al utilizar la aplicación, aceptas nuestra política
            de privacidad.
          </p>

          <h3 className='mt-7 text-xl font-medium'>
            5. Limitación de responsabilidad
          </h3>

          <h4 className='mt-3 text-lg font-medium text-black/80'>
            5.1 Exención de responsabilidad:
          </h4>
          <ul className='mt-2 list-disc pl-5 text-black/80'>
            <li>
              La aplicación se proporciona "tal cual" y no ofrecemos ninguna
              garantía o representación en cuanto a su funcionamiento,
              disponibilidad, exactitud o confiabilidad.
            </li>
            <li>
              No seremos responsables de ningún daño indirecto, incidental,
              especial o consecuencial que surja del uso de la aplicación.
            </li>
          </ul>
          <h3 className='mt-7 text-xl font-medium'>
            6. Modificaciones y terminación
          </h3>

          <h4 className='mt-3 text-lg font-medium text-black/80'>
            6.1 Modificaciones:
          </h4>
          <p>
            Nos reservamos el derecho de modificar, suspender o descontinuar la
            aplicación, o cualquier parte de ella, en cualquier momento y sin
            previo aviso.
          </p>
          <h4 className='mt-3 text-lg font-medium text-black/80'>
            6.2 Terminación:
          </h4>
          <p>
            Podemos terminar tu acceso y uso de la aplicación si violas estos
            Términos o cualquier ley aplicable.
          </p>

          <h3 className='mt-7 text-xl font-medium'>7. Ley aplicable</h3>

          <h4 className='mt-3 text-lg font-medium text-black/80'>
            7.1 Jurisdicción:
          </h4>

          <p>
            Estos Términos se regirán e interpretarán de acuerdo con las leyes
            de Colombia y cualquier disputa que surja en relación con estos
            Términos estará sujeta a la jurisdicción exclusiva de los tribunales
            de Colombia.
          </p>
        </div>
      </div>
    </section>
  )
}

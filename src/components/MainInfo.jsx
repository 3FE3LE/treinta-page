import React from 'react'

const MainInfo = () => {
  return (
    <>
      <div className="flex flex-wrap justify-end h-screen px-8 ">
        <div className="w-full max-h-full bg-primary -mt-24 rounded-2xl text-white z-10">
          <div className="h-24 px-8 flex items-center justify-center">
            <h1 className="text-2xl">¿Mas información sobre treinta y de los múltiples beneficios de usar treinta?</h1>
          </div>
          <div className="h-64 flex px-8 pt-16 -pb-64">
            <div className="w-1/2 flex justify-center px-8">
              <div>
                <img className="max-w-md" src="https://www.treinta.co/wp-content/uploads/2020/09/DobleScreen.png" alt="" />
              </div>
            </div>
            <div className="w-1/2 px-8">
              <h2 className="text-white font-bold text-4xl pb-6">
                Treinta - ¡Aplicación financiera gratuita!
            </h2>
              <p className="text-white py-2">
                Gestiona las transacciones de tu negocio, conoce la utilidad de tu negocio en cualquier momento y registra y cobra deudas 3 veces más eficazmente.
              </p>
              <p className="text-white py-2">
                Ayuda a tu negocio a crecer más con Treinta, la aplicación financiera gratuita. ¡Treinta es gratis, seguro y fácil de usar!
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-px max-h-0 relative flex justify-end">
          <div className="absolute h-0 z-20">
            <img className="h-16 -mt-8 mr-8" src="https://www.treinta.co/wp-content/uploads/2020/09/google-play-badge.png" alt="" />
          </div>
        </div>
        <div className="w-1/2 px-8 -mt-16">
          <h3 className="text-gray w-full font-bold text-xl">
            Miles de micro y pequeñas empresas confían en Treinta
          </h3>
          <p className="text-gray w-full py-4">
            Treinta es una aplicación GRATUITA para administrar fácilmente las finanzas de tu negocio, en cualquier momento y en cualquier lugar.
          </p>
        </div>
      </div>
    </>
  )
}

export default MainInfo

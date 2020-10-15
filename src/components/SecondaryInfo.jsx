import React from 'react'

const SecondaryInfo = () => {

  const data = [
    {
      img: 'https://www.treinta.co/wp-content/uploads/2020/06/family-img-1.png',
      title: 'Obtén un control eficaz de su flujo de caja',
      text: 'Registra diligentemente las ventas, los gastos y las cuentas por cobrar y calcula la utilidad de tu negocio fácilmente.'
    },
    {
      img: 'https://www.treinta.co/wp-content/uploads/2020/06/video-metting-img-1.png',
      title: 'Automatiza tu negocio y obtén resultados precisos',
      text: 'Sin complicaciones de cálculos manuales. Todos los números se calculan automáticamente.'
    },
    {
      img: 'https://www.treinta.co/wp-content/uploads/2020/06/organization-img-1.png',
      title: 'Ahorra tiempo y dedícalo en lo que más te gusta',
      text: 'Ten más libertad para administrar tu tiempo en el negocio, pasar más tiempo en familia y disfrutar de tus pasiones.'
    }
  ]

  return (
    <>
      <div className="h-screen justify-center items-center pt-24 px-8">
        <h2 className="w-full text-center text-gray font-bold text-4xl py-6">
          Descubre las ventajas de usar Treinta
        </h2>
        <p className="text-center text-gray font-medium text-2xl pt-6 pb-12 max-w-screen-md mx-auto">
          Treinta ofrece más que la comodidad de administrar
          y monitorear los estados financieros de tu empresa a través de un smartphone.
        </p>
        <div className="flex justify-between w-full max-w-screen-lg mx-auto">
          {data.map(item => (
            <div
              key={item.img}
              className="w-64 h-64 border-primary rounded-2xl px-2"
            >
              <img className="mx-auto my-2" src={item.img} alt="" />
              <h3 className="text-gray font-medium text-lg text-center">
                {item.title}
              </h3>
              <p className="text-gray text-center">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SecondaryInfo

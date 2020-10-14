import React from 'react'

const Navbar = () => {
  return (
    <div className="px-8 sticky top-0 -mb-10 z-30 w-full">
      <nav className="w-full h-10 flex justify-between items-center bg-white rounded-b-2xl shadow pl-6">
        <h1 className="text-primary font-black text-2xl">treinta</h1>
        <div className="flex h-full">
          <h2 className="text-secondary font-medium text-xl px-2 text-secondary">Iniciar sesión</h2>
          <div className="bg-secondary rounded-b-2xl px-2">
            <h2 className="font-medium text-xl text-white">Registro</h2>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

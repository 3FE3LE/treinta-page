import React from 'react'
import { MapContainer } from './components/Maps'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <>
      <Navbar />
      <MapContainer/>
      <div className="flex items-center h-screen">
        <div className="h-32 w-full max-w-screen-sm bg-white bg-opacity-25 rounded-2xl flex justify-center items-center shadow-xl absolute left-0">
          <div className="bg-black w-11/12 border-2xl flex justify-end relative">
            <input className="h-10 w-full rounded-2xl text-sm font-thin text-gray px-6" type="text" name="search" id="search" placeholder="Escriba su lugar de interés..." />
            <input className="h-10  rounded-2xl text-xl font-regular text-white bg-secondary px-6 absolute" type="button" value="Buscar" />
          </div>
        </div>
      </div>
    </>
  )
}


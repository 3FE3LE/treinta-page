import React from 'react'
import SimpleMap from './Maps'


const HomeMap = () => {
  return (
    <div className="flex items-center h-screen relative">
      <SimpleMap />
      <div className="absolute w-full left-0 px-8">
        <div className="h-32 w-full max-w-screen-sm bg-white bg-opacity-25 rounded-2xl flex justify-center items-center shadow-xl">
          <div className="w-11/12 border-2xl flex justify-end relative">
            <input className="h-10 w-full rounded-2xl text-sm font-semibold text-gray-900 px-6" type="text" name="search" id="search" placeholder="Escriba su lugar de interés..." />
            <input className="h-10  rounded-2xl text-xl font-regular text-white bg-secondary px-6 absolute" type="button" value="Buscar" />
          </div>
        </div>
      </div>
      <div className="h-8 w-full absolute bottom-0 bg-gradient-to-t from-white via-white  to-transparent z-10">
      </div>
    </div>
  )
}

export default HomeMap

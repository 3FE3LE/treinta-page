
import React from 'react'
import Login from './Login'
import SignUp from './SignUp'

const Navbar = () => {

  

 

  return (
    <div className="px-8 sticky top-0 -mb-10 z-30 w-full">
      <nav className="w-full h-10 flex justify-between items-center bg-white rounded-b-2xl shadow pl-6">
        <h1 className="text-primary font-black text-2xl">treinta</h1>
        <div className="flex h-full">
          <Login/>
          <SignUp/>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

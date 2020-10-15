import React, { useState } from 'react'
import { Slide } from '@material-ui/core'
import { useFormik } from 'formik'
import API from '../api'



const Login = () => {

  const [login, setLogin] = useState(false)

  const showLogin = () => localStorage.getItem('name') ? null : setLogin(!login) 

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async values => {
      try {
        const { email, password } = values

        const form = {
          identifier: email,
          password
        }

        const { data } = await API.login(form)
        const { user, jwt } = data;

        setLogin(false)

        localStorage.setItem('jwt', jwt)
        localStorage.setItem('name', user.username)

        window.location.reload();
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
  })

  return (
    <div className="rounded-b-2xl px-2">
      <h2
        onClick={() => showLogin()}
        className="text-secondary font-medium text-xl px-2 text-secondary"
      >{localStorage.getItem('name') ? localStorage.getItem('name') : 'Iniciar sesión'}</h2>
      <Slide direction='down' timeout={1000} in={login}>
        <div className="absolute flex flex-wrap justify-center bg-secondary rounded-b-2xl  -ml-24 -mt-8">
          <h1 className="w-full text-white font-bold text-2xl mb-6 py-2 text-center">Inicia sesión</h1>
          <form
            className="flex w-64 flex-wrap justify-center"
            onSubmit={formik.handleSubmit}
          >
            <input
              className="bg-white h-10 w-full text-gray rounded-2xl my-2 px-4"
              placeholder="Correo electrónico"
              type="email"
              name="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <input
              className="bg-white h-10 w-full text-gray rounded-2xl my-2 px-4"
              placeholder="Contraseña"
              type="password"
              name="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <input className="bg-white h-10 text-secondary font-bold text-xl rounded-2xl my-6 px-6" type="submit" value="Iniciar sesión" />
          </form>
          <div onClick={() => showLogin()} className="bg-secondary w-10 h-10 -mb-16 absolute bottom-0 text-white rounded-full font-black text-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
      </Slide>
    </div>
  )
}

export default Login

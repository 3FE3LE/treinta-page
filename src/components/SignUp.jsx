import React, { useState } from 'react'
import { Slide } from '@material-ui/core'
import { useFormik } from 'formik'
import API from '../api'


const SignUp = () => {

  const [signUp, setSignUp] = useState(false)

  const showSignUp = () => {
    if (localStorage.getItem('name')) {
      localStorage.clear()
      window.location.reload();
    } else {
      setSignUp(!signUp)
    }
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    onSubmit: async values => {
      try {
        const { name, email, password } = values

        const form = {
          username: name,
          email: email,
          password
        }

        const { data } = await API.signUp(form)
        const { user, jwt } = data;

        setSignUp(false)

        localStorage.setItem('jwt', jwt)
        localStorage.setItem('name', user.username)

        window.location.reload();
      } catch (error) {
        console.log(error)
      }
    }
  })

  return (
    <div className="bg-secondary rounded-b-2xl px-2">
      <h2
        onClick={() => showSignUp()}
        className="font-medium text-xl text-white"
      >
        {localStorage.getItem('name') ?
          <svg className="w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg> :
          'Registrarse'}</h2>
      <Slide direction='down' timeout={1000} in={signUp}>
        <div className="absolute flex flex-wrap justify-center bg-secondary rounded-b-2xl  -ml-64 -mt-8">
          <h1 className="w-full text-white font-bold text-2xl mb-6 py-2 text-center">Registrarte en treinta</h1>
          <form
            className="flex w-64 flex-wrap justify-center"
            onSubmit={formik.handleSubmit}
          >
            <input
              className="bg-white h-10 w-full text-gray rounded-2xl my-2 px-4"
              placeholder="Nombre Completo"
              type="text"
              name="name"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
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
              name="non-password"
              id="non-password"
              value={formik.values.non_password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <input
              className="bg-white h-10 w-full text-gray rounded-2xl my-2 px-4"
              placeholder="Confirmar contraseña"
              type="password"
              name="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <input
              className="bg-white h-10 text-secondary font-bold text-xl rounded-2xl my-6 px-6"
              type="submit"
              value="Registrarse"
            />
          </form>
          <div onClick={() => showSignUp()} className="bg-secondary w-10 h-10 -mb-16 absolute bottom-0 text-white rounded-full font-black text-3xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
      </Slide>
    </div>
  )
}

export default SignUp

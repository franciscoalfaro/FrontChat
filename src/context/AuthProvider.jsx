import React, { useState, useEffect, createContext } from 'react'
import { Global } from '../helpers/Global'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({})

    const [loading, setLoading] = useState(true)

    //se ejecuta la primera ves del provider
    useEffect(() => {
        authUser()

    }, [])

    //metodo de autenticar el usuario
    const authUser = async () => {
        //obtener datos del usuario del localStorage
        const token = localStorage.getItem("token")
        const user = localStorage.getItem("user")

        //comprobar token
        if (!token || !user) {
            localStorage.clear();
            setLoading(false)
            return false
        }

        //tranformar datos a obj JS
        const userObj = JSON.parse(user)
        const userId = userObj.id

        //peticion ajax al back-end
        //que se devuelvan los datos del usuario
        const request = await fetch(Global.url + "user/perfil/" + userId, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": token
            }

        })


        const data = await request.json()

        //feature de contador de mensajes



        //set el estado auth
        setAuth(data.user)
        setLoading(false)

    }

    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                loading
            }}>{children}
        </AuthContext.Provider>
    )
}
export default AuthContext

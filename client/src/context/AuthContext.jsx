import { createContext, useCallback, useEffect, useState } from "react";
import { BASE_URL, postUser } from "../utils/services";
import Swal from 'sweetalert2'


export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isRegisterLoading, setIsRegisterLoading] = useState(false)
    const [registerInfo, setRegisterInfo] = useState({
        name: "",
        email: "",
        password: ""
    })


    const updateRegisterInfo = useCallback((info) => {
        setRegisterInfo(info)
    }, [])

    const registerUser = useCallback(async () => {
        console.log("daDAS")
        setIsRegisterLoading(true)
        const response = await postUser(`${BASE_URL}/users/register`, JSON.stringify(registerInfo))
        setIsRegisterLoading(false)

        if (response.error) {
            return Swal.fire({
                title: 'Error!',
                text: response.message,
                icon: 'error',
            })


        }
        Swal.fire({
            title: 'Successfully Registriation!',
            icon: 'success',
        })
        localStorage.setItem("User", JSON.stringify(response))
        setUser(response)
    }, [registerInfo])

    useEffect(() => {

        const user = localStorage.getItem("User")
        setUser(JSON.parse(user))
    }, [])



    return <AuthContext.Provider
        value={{
            user,
            registerInfo,
            updateRegisterInfo,
            registerUser,
            isRegisterLoading
        }}

    >
        {children}
    </AuthContext.Provider>
}
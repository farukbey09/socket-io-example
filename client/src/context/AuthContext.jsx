import { createContext, useCallback, useEffect, useState } from "react";
import { BASE_URL, postRequest } from "../utils/services";
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

    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: ""
    })


    const updateRegisterInfo = useCallback((info) => {
        setRegisterInfo(info)
    }, [])

    const updateLoginInfo = useCallback((info) => {
        setLoginInfo(info)
    }, [])

    const registerUser = useCallback(async () => {
        setIsRegisterLoading(true)
        const response = await postRequest(`${BASE_URL}/users/register`, JSON.stringify(registerInfo))
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
        window.location.href = '/'
    }, [registerInfo])


    const loginUser = useCallback(async () => {
        const response = await postRequest(`${BASE_URL}/users/login`, JSON.stringify(loginInfo))

        if (response.error) {
            return Swal.fire({
                title: 'Error!',
                text: response.message,
                icon: 'error',
            })
        }
        Swal.fire({
            title: 'Successfully Login!',
            icon: 'success',
        })
        localStorage.setItem("User", JSON.stringify(response))
        setUser(response)
    }, [loginInfo])

    useEffect(() => {

        const user = localStorage.getItem("User")
        setUser(JSON.parse(user))
    }, [])

    const logoutUser=useCallback(()=>{
        localStorage.removeItem("User")
        setUser(null)

    },[])

    return <AuthContext.Provider
        value={{
            user,
            registerInfo,
            updateRegisterInfo,
            registerUser,
            isRegisterLoading,
            logoutUser,
            loginUser,
            loginInfo,
            updateLoginInfo
        }}

    >
        {children}
    </AuthContext.Provider>
}
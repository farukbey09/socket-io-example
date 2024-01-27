import { createContext, useCallback, useEffect, useState } from "react";
import { BASE_URL, getRequest } from "../utils/services";
import Swal from 'sweetalert2'


export const ChatContext = createContext()

export const ChatContextProvider = ({ children,user }) => {
    const [userChats, setUserChats] = useState(null)
    useEffect(() => {
        const getUserChats=async()=>{
            if(user?._id){
                const resp = await getRequest(`${BASE_URL}/chats/${user?._id}`)
                if (resp.error){
                    return console.log(resp.message)
                }
            
                setUserChats(resp)
            }

        }

        getUserChats()
    }, [user])
    

    return <ChatContext.Provider
        value={{
            userChats
        }}

    >
        {children}
    </ChatContext.Provider>
}
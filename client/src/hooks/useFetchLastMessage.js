import { useContext, useEffect, useState } from "react"
import { BASE_URL, getRequest } from "../utils/services"


export const useFetchLastMessage = (chat, user) => {
const [lastMessage, setLastMessage] = useState(null)
    useEffect(() => {
        const getMessages = async () => {
            if (!chat?._id) return null
            const resp = await getRequest(`${BASE_URL}/messages/${chat?._id}`)

            if (resp.error) return console.log(resp.message);
            const messages=resp.filter((message)=>message.senderId!==user?._id)
            setLastMessage(messages[messages.length-1])
        }
        getMessages()
    }, [chat])
    return { lastMessage }

}
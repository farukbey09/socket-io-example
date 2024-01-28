import { useContext, useEffect, useState } from "react"
import { BASE_URL, getRequest } from "../utils/services"
import { ChatContext } from "../context/ChatContext"


export const useFetchRecipientUser = (chat, user) => {
    const {currentChat} =useContext(ChatContext)
    const [recipientUser, setRecipientUser] = useState(null)
    const recipientId = chat?.members.find((id) => id !== user?._id)

    useEffect(() => {
        const getUser = async () => {
            if (!recipientId) return null
            const resp = await getRequest(`${BASE_URL}/users/${recipientId}`)

            if (resp.error) return console.log(resp.message);

            setRecipientUser(resp)
        }
        getUser()
    }, [currentChat])
    return { recipientUser }

}
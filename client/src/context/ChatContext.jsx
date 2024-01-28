import { createContext, useCallback, useEffect, useState } from "react";
import { BASE_URL, getRequest, postRequest } from "../utils/services";
import Swal from 'sweetalert2'
import {io} from "socket.io-client"
import { SOCKET_BASE_URL } from "../helpers/socketBaseUrl";

export const ChatContext = createContext()

export const ChatContextProvider = ({ children,user }) => {
    const [userChats, setUserChats] = useState(null)
    const [chatMessages, setChatMessages] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState(null)
    const [newChatInfo, setNewChatInfo] = useState( {
        firstId:"",
        secondId:""
    })
    const [currentChat, setCurrentChat] = useState(null)
    const [socket, setSocket] = useState(null)
    
    const handleSetCurrentChat=(chat)=>{
        setCurrentChat(chat)
    }

    const createChat=async()=>{

        if(newChatInfo.firstId&&newChatInfo.secondId){
            var flag=0
            console.log(userChats);
            userChats.map((user)=>{
                if(user.members.includes(newChatInfo.secondId))
                flag++
            })
            if(flag==0){
            const resp=await postRequest(`${BASE_URL}/chats/`,JSON.stringify(newChatInfo))
            if (resp.error) {
                return Swal.fire({
                    title: 'Error!',
                    text: resp.message,
                    icon: 'error',
                })
            }
            Swal.fire({
                title: 'Successfully Registriation!',
                icon: 'success',
            })
            setUserChats((prev)=>[...prev,resp])
            }
            else{
                return Swal.fire({
                    title: 'Error!',
                    text: "you already have this conversations",
                    icon: 'error',
                })
            }
        }
    }

    const createMessage=async(body)=>{
            const resp=await postRequest(`${BASE_URL}/messages/`,JSON.stringify(body))
            if (resp.error) {
                return console.log(resp.message);
            }
            const receiverId=currentChat?.members.find((member)=>member!==user?._id)
            setChatMessages((prev)=>[...prev,resp])
            if (socket===null) return 
            socket.emit("sendMessage",{...resp,receiverId})
    }




    const updateNewChatInfo=useCallback((info) => {
        setNewChatInfo(info)
    }, [])



    useEffect(() => {
        const getUserChats=async()=>{
            if(user?._id){
                const resp = await getRequest(`${BASE_URL}/chats/${user?._id}`)
                if (resp.error){
                    return console.log(resp.message)
                }
            
                setUserChats(resp)
                setCurrentChat(resp[0])
            }

        }

        getUserChats()
        const newSocket=io(SOCKET_BASE_URL)
        setSocket(newSocket)
        return ()=>{
            newSocket.disconnect()
        }

    }, [user])

    //online users
    useEffect(() => {
      if (socket===null) return
        socket.emit("addNewUser",user?._id)
        socket.on("getOnlineUsers",res=>{
            setOnlineUsers(res)
        })

        return ()=>{
            socket.off("getOnlineUsers")
        }
    }, [socket])
    
    
    //create message
    useEffect(() => {
        if (socket===null) return
        socket.on("getMessage",(res)=>{
            if(currentChat?._id !==res.chatId) return
        setChatMessages((prev)=>[...prev,res])
        })
        return ()=>{
            socket.off("getMessage")
        }

      }, [currentChat,socket])

    useEffect(() => {
        const getChatMesagges=async()=>{

            if(currentChat?._id){
                const resp=await getRequest(`${BASE_URL}/messages/${currentChat?._id}`)
                if (resp.error) {
                    return console.log(resp.message);
                }
                setChatMessages(resp)
                }
        }
        getChatMesagges()
    }, [currentChat])

    
    

    return <ChatContext.Provider
        value={{
            userChats,
            newChatInfo,
            updateNewChatInfo,
            createChat,
            handleSetCurrentChat,
            currentChat,
            chatMessages,
            createMessage,
            onlineUsers,
        }}

    >
        {children}
    </ChatContext.Provider>
}
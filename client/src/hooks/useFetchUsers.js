import { useEffect, useState } from "react"
import { BASE_URL, getRequest } from "../utils/services"


export const useFetchUsers = ( user) => {
    const [users, setUsers] = useState(null)

    useEffect(() => {
        const getUsers = async () => {
        const resp = await getRequest(`${BASE_URL}/users`)

            if (resp.error) return console.log(resp.message);

            setUsers(resp.filter((u)=>u._id!==user?._id).map((item)=>{return {...item,label:item.name}}))
        }
        getUsers()
    }, [])
    return { users }

}
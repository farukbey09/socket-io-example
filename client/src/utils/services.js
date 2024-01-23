export const BASE_URL = "http://localhost:5000/api"

export const postUser = async (url, body) => {
    console.log(body);
    const response=await fetch(
        url,
        {
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body
        }
        
    )
    const data= await response.json()
    
    if(!response.ok){
        let message
        if (data?.message){
            message=data.message
        }else{
            message=data
        }
        return {error:true,message}
    }

    return data
}
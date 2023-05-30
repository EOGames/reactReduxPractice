import api from "./api";

 export const sendToChatGpt = async(chatObj)=>
{
    try 
    {
        const response = await api().post('/sendToChatGpt',
        chatObj
        );
        if (response.data)
        {
            return response;
        }
    } catch (error) 
    {
        console.log(error);
        return error;
    }
}
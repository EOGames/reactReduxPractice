import api from "./api";

const login = async (email,password) =>
{
    
    try 
    {
        let response = await api().post('/login',
        {
            email:email,
            password:password
        }); 
        if (response.data)
        {
            return response; 
        }
    } 
    catch (error) 
    {
       console.log(error);
       return error;
    }
}
export default login;
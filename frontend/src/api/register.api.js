import api from "./api";

const register = async(email, name, lname, password) =>
{
    let response;
    try {
         response = await api().post('/register',
        {
            email:email,
            name:name,
            lname:lname,
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
export default register;
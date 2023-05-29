import axios  from 'axios';
const backend_Url = process.env.BACKEND_URL || 'http://localhost:5000'
const api = ()=>
{
    return axios.create({
        baseURL:`${backend_Url}/api`
    });
}
export default api;
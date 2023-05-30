import { NavLink} from "react-router-dom";
import login from "../api/login.api";
import { useRef, useState } from "react";
import CustomButton from "../components/CustomButton";
const Login = () =>
 {
    const [loading,setLoading] = useState(false); 
    const email = useRef();
    const password = useRef();

    const handleResponse = (msg, color) =>
    {
        const responseHandler = document.getElementById('responseHandler');
        responseHandler.innerHTML = msg;
        responseHandler.style = `color:${color}; text-align: center;`;
    }

   const handleLogin = async()=>
   {
     let canSubmit = true;
        if (!email.current.value.trim()>0 || !password.current.value.trim()>0)
        {
            canSubmit = false;
            handleResponse('Email Or Password Can\'t be empty','red');
            return;
        }

        if (canSubmit) 
        {
            setLoading(true);
            let resp = await login(email.current.value, password.current.value);
            // console.log('resp received',resp);
            setLoading(false);
            if (resp?.data?.status === 200) 
            {
                handleResponse(resp?.data?.message, 'green');
                localStorage.setItem('session',resp.data.token);
                window.location.href = '/';
            }

            if (resp?.response?.data?.status === 403)
            {
                handleResponse(resp?.response?.data?.message, 'red');
            }
            console.log('Login Response', resp);
        }


   }
    return (
        <div className="d-flex justify-content-center align-content-center  flex-wrap width100Height90 ">
            <div className="backgroundCard w-70 h-70 p-4">
                <form action="" className="d-flex flex-column justify-content-center align-items-center w-100 h-100">
                    <input ref={email} className="form_input_handler align-content-center" type="text" placeholder="Enter Email" />
                    <input ref={password} className="form_input_handler align-content-center" type="text" placeholder=" Enter Password" />

                    <CustomButton callingFunction ={handleLogin}  classes={"btn btn-secondary "} button_value ='Login' loading={loading} />
                <div className="mt-4">Not Registred..? <NavLink className= 'onLinkHover removeTextDecoration' to={'/signUp'}>SignUp</NavLink></div>
                </form>
                <p className="responseHandler" id="responseHandler"></p>

            </div>
        </div>
    );
}
export default Login;
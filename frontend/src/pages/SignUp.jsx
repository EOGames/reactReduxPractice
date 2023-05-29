import { NavLink } from "react-router-dom";
import register from "../api/register.api";
import { useRef, useState } from "react";
import CustomButton from "../components/CustomButton";


const SignUp = () => {
    const email = useRef();
    const name = useRef();
    const lname = useRef();
    const password = useRef();
    const confirmPassword = useRef();

    const [loading,setLoading] = useState(false); 
    

    const handleResponse = (msg, color) => {
        const responseHandler = document.getElementById('responseHandler');
        responseHandler.innerHTML = msg;
        responseHandler.style = `color:${color}; text-align: center;`;
    }

    const handleRegistration = async (e) => {
        e.preventDefault();
        let canSubmit = true;
      
        if (!email.current.value.trim().length > 0 || !name.current.value.trim().length > 0 || !lname.current.value.trim().length > 0 || !password.current.value.trim().length >= 8) {
            canSubmit = false;
            handleResponse('Please Fill Details Properly', 'red');
            console.log('Stoped');
            return;
        }
        
        if (confirmPassword.current.value !== password.current.value)
        {
            canSubmit = false;
            handleResponse('Both Password Doesn\'t Match', 'red');
            
            return;
        }

        if (canSubmit) 
        {
            setLoading(true);
            let resp = await register(email.current.value, name.current.value, lname.current.value, password.current.value);
            // console.log('resp received',resp);
            setLoading(false);
            if (resp?.data?.status === 200) 
            {
                handleResponse(resp?.data?.message, 'green');
            }

            if (resp?.response?.data?.status === 409)
            {
                handleResponse(resp?.response?.data?.message, 'red');
            }
            console.log('Registration Response', resp);
        }


    }
    return (
        <div className="d-flex justify-content-center align-content-center  flex-wrap width100Height90 ">
            <div className="backgroundCard w-70 h-70 p-4 mt-2">
                <form method="POST" className="d-flex flex-column justify-content-center align-items-center w-100 h-100">
                    <input required ref={email} className="form_input_handler align-content-center" type="email" placeholder="Enter Email" />
                    <input required ref={name} className="form_input_handler align-content-center" type="text" placeholder="Enter Name" />
                    <input required ref={lname} className="form_input_handler align-content-center" type="text" placeholder="Enter Last Name" />
                    <input required ref={password} className="form_input_handler align-content-center" type="text" placeholder="Enter Password" />
                    <input required ref={confirmPassword} className="form_input_handler align-content-center" type="text" placeholder="Enter Confirm Password" />
                   
                    <CustomButton callingFunction ={handleRegistration}  classes={"btn btn-secondary "} button_value ='Register' loading={loading} />

                   
                    <div className="mt-4">Already Registred..? <NavLink className='onLinkHover removeTextDecoration' to={'/login'}>Login</NavLink></div>
                </form>
                <p className="responseHandler" id="responseHandler"></p>
            </div>
        </div>
    );
}
export default SignUp;
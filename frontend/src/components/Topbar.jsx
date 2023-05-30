import { NavLink } from "react-router-dom";
import { logout } from "../store/storeSlices/logoutSlice";
import { useDispatch } from 'react-redux';

const Topbar = () => 
{
    const dispatch = useDispatch();
   const auth = localStorage.getItem('session');

    const handleLogout = () =>
    {
        dispatch(logout());
    }
    return (
        <div className=".container bg-secondary p-3 text-white text-center topbar" >
            <ul className="d-flex text-white" >
                

                {
                    auth ? <>
                            <li className="removeTextDecoration"><NavLink className="badge text-wrap removeTextDecoration onLinkHover" to="/">Home</NavLink></li>
                            <li className="removeTextDecoration"><NavLink className="badge text-wrap removeTextDecoration onLinkHover" to="/about">About</NavLink></li>
                            <li className="removeTextDecoration"><NavLink className="badge text-wrap removeTextDecoration onLinkHover" to="/contact">Contact</NavLink></li>
                            <li className="removeTextDecoration"><NavLink className="badge text-wrap removeTextDecoration onLinkHover" onClick={handleLogout}>Logout</NavLink></li>
                           </>
                           :
                          <>
                             <li className="removeTextDecoration"><NavLink className="badge text-wrap removeTextDecoration onLinkHover" to="/login">Login</NavLink></li>
                             <li className="removeTextDecoration"><NavLink className="badge text-wrap removeTextDecoration onLinkHover" to="/signUp">SignUp</NavLink></li>
                          </>
                }

               

            </ul>
        </div>
    );
}
export default Topbar;
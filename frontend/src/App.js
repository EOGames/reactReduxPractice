import { Route, Routes } from "react-router-dom";
import Topbar from "./components/Topbar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PrivateRoutes from "./components/PrivateRoutes";
import LoginSignupPrivate from "./components/LoginSignupPrivate";
import ChatBox from "./pages/ChatBox";


function App() 
{
  const auth = localStorage.getItem('session');

  return (
    <div className="App">
      <Topbar />

      <Routes>
       
     
          <Route path="/" element={<PrivateRoutes> <ChatBox/> </PrivateRoutes>}> </Route>
          <Route path="/about" element={<PrivateRoutes> <h1>This Is About Page</h1> </PrivateRoutes>}> </Route>
          <Route path="/contact" element={<PrivateRoutes> <h1>This Is Contact Page</h1> </PrivateRoutes>}> </Route>
        
       
            <Route path="/login" element={<LoginSignupPrivate><Login /></LoginSignupPrivate>}>  </Route>
            <Route path="/signUp" element={<LoginSignupPrivate><SignUp /></LoginSignupPrivate>}>  </Route>
           
         
        
       

      </Routes>

    </div>
  );
}

export default App;

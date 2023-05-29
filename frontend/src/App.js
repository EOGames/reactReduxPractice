import { Route, Routes } from "react-router-dom";
import Topbar from "./components/Topbar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";


function App() {
  return (
    <div className="App">
      <Topbar />

      <Routes>
        <Route path="/" element={<h1>This Is ChatBox PlaceHolder</h1>}> </Route>
        <Route path="/about" element={<h1>This Is About PlaceHolder</h1>}> </Route>
        <Route path="/contact" element={<h1>This Is Contact PlaceHolder</h1>}> </Route>
        <Route path="/login" element={<Login />}>  </Route>
        <Route path="/signUp" element={<SignUp />}>  </Route>

      </Routes>

    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "../pages/welcome/welcome";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import Account from "../pages/account/account";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
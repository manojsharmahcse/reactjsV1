// src/App.js
import { Routes, Route, useNavigate } from "react-router-dom";

// Layout
import Layout from "./components/Layout";
import Admin from "./components/Admin";

// Public Pages
import Home from "./pages/Home";

// ADMIN LAYOUT + PAGES
import AdminLayout from "./components/AdminLayout";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <Routes>

            <Route element={<GuestProtected />}>// token based isAuthenticated (user going under page again) means if: user have tokken then go /dashboard
              <Route element={<AuthLayoutWrapper />}> if not tokken then show this  components means common header then {children || Outlet}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Route>
            </Route>

            <Route element={<Layout />}> // call header footer etc and  {children || Outlet}   
              <Route path="/" element={<Home />} />  
                {/* Private Routes */}
                <Route element={<ShopingProtected />}>// token based component authentication login {user/admin/vendor}                
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/wallet" element={<Wallet />} />
                </Route>        
            </Route>
          
            <Route
              path="/admin"
              element={
                <Admin>// token based component authentication login
                    <AdminLayout />// left side panel + right side panel {children || Outlet}
                </Admin>
              }
            >
              <Route path="admin" element={<AdminDashboard />} />
            </Route>
      </Routes>   
    </>
  );
}

export default App;

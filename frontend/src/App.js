import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import DisplayHome from "./Page/DisplayHome";
 import Login from "./Page/Login";
 import SignUp from "./Page/SignUp";
import Footer from "./components/Footer";
 
 

function Layout({ children }) {
  const location = useLocation();
  const hideNavFooter = ["/login", "/signup"].includes(location.pathname);

  return (
    <div className="h-full">
      {!hideNavFooter && <Navbar />}
      {children}
      {!hideNavFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<DisplayHome />} />
           
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;


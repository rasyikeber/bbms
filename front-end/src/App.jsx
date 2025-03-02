//bbms/front-end/src/App.jsx

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import ContactLayout from "./layout/ContactLayout";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";

import SignUp from "./components/SignUp";
import Login from "./components/Login";
import PrivateRoute from "./context/PrivateRoute";




function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<ContactLayout />}>
              <Route path="info" element={<ContactInfo />} />
              <Route path="form" element={<ContactForm />} />
            </Route>
          </Route>
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;


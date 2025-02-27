import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Contact from "./pages/Contact"
import About from "./pages/About"
import ContactLayout from "./layout/ContactLayout"
import ContactForm from "./components/ContactForm"
import ContactInfo from "./components/ContactInfo"

function App() {
 const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />}/>
        <Route path="product" element={<Product />}/>
        <Route path="about" element={<About />}/>
        <Route path="contact" element={<ContactLayout />}>
          <Route path="info" element={<ContactInfo />}/>
          <Route path="form" element={<ContactForm />}/>
        </Route>

      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}



export default App

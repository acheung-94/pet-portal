import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home"
import Auth from "./components/Auth/Auth"
import Dashboard from "./components/Dashboard/Dashboard";
import PetProfile from "./components/PetProfile/PetProfile";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
const router = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/login', element: <Auth />},
  {path: '/register', element: <Auth />},
  {path: '/dashboard', element: 
      <>
        <Navbar />
        <Outlet />
      </>, children: [
    {index: true, element: <Dashboard />},
    {path: ':petId', element: <PetProfile />}
  ]}
])

const App = () => {
  return( <RouterProvider router={router} />)
}

export default App;

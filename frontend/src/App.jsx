import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home"
import Auth from "./components/Auth/Auth"

const router = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/login', element: <Auth />}, //useParams to determine if login vs sign up
  {path: '/register', element: <Auth />},
  {path: '/dashboard'},
  {path: '/pets/:id'}
])

const App = () => {
  return( <RouterProvider router={router} />)
}

export default App;

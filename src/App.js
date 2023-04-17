import Login from "./Components/Loginpage/Login";
import Home from "./Components/Home/Home";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router=createBrowserRouter([
  {path:'/',element:<Home/>},
  {path:'/login',element:<Login/>}
])

function App() {

  return <RouterProvider router={router}/>
}

export default App;

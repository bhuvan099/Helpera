import Login from "./Components/Loginpage/Login";
import Home from "./Components/Home/Home";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactVideoPlayer from "./Components/main";

const router=createBrowserRouter([
  {path:'/',element:<Home/>},
  {path:'/login',element:<Login/>},
  {path:'/vid',element:<ReactVideoPlayer/>}
])

function App() {

  return <RouterProvider router={router}/>
}

export default App;

import Login from "./Auth/Login";
import Home from "./Components/Home/Home";
import SignUp from "./Auth/Signup";
import Volunteers from "./Components/Volunteers/Volunteers";
import Organizer from "./Components/Organizers/Organizer";
import AddCampaign from "./Components/B2B/AddCampaign";
import Campaignlist from "./Components/CampDesc/Campaignlist";
import Root from "./Pages/Root";
import "./App.css";
import { LogoutAction, checkAuthLoader } from "./Auth/Auth";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactVideoPlayer from "./Components/main";
import Main from './Components/main';

const router=createBrowserRouter([
  {path:'/',
element:<Root/>,
id:'root',
children:[
  {index:true,element:<Home/>},
  {path:'volunteer/:username',element:<Volunteers/>,loader:checkAuthLoader},
  { path: "organization/:username", element: <Organizer />,loader:checkAuthLoader},
  {path:'addcampaign',element:<AddCampaign/>,loader:checkAuthLoader},
  {path:'campaigns',element:<Campaignlist/>}
]},
  {path:'/login',element:<Login/>},
  {path:'/signup',element:<SignUp/>},
  {path:'/main',element:<Main/>},
  {path:'logout',action:LogoutAction}

])

function App() {
  return <RouterProvider router={router} />;
}

export default App;

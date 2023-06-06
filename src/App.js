import Login from "./Auth/Login";
import Home from "./Components/Home/Home";
import SignUp from "./Auth/Signup";
import Volunteers from "./Components/Volunteers/Volunteers";
import Organizer from "./Components/Organizers/Organizer";
import AddCampaign from "./Components/B2B/AddCampaign";
import Campaignlist from "./Components/CampDesc/Campaignlist";
import Campdesc from "./Components/CampDesc/Campdesc";
import Sample from "./Components/UI/Sample";
import Root from "./Pages/Root";
import "./App.css";
import { LogoutAction, checkAuthLoader } from "./Auth/Auth";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactVideoPlayer from "./Components/main";
import Main from './Components/main';
import { getUserInfoApi } from "./Auth/auth-action";
import { findAllCampaignApi } from "./API/api-action";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const router=createBrowserRouter([
  {path:'/',
element:<Root/>,
id:'root',
children:[
  {index:true,element:<Home/>},
  {path:'volunteer/:username',element:<Volunteers/>,loader:checkAuthLoader},
  { path: "organization/:username", element: <Organizer />,loader:checkAuthLoader},
  {path:'addcampaign',element:<AddCampaign/>,loader:checkAuthLoader},
  {path:'campaigns',element:<Campaignlist/>},
  {path:'sam',element:<Sample/>},
  {path:'campaigns/:id',element:<Campdesc/>},
]},
  {path:'/login',element:<Login/>},
  {path:'/signup',element:<SignUp/>},
  {path:'/main',element:<Main/>},
  {path:'logout',action:LogoutAction}

])

function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getUserInfoApi());
    dispatch(findAllCampaignApi());
  });
  return <RouterProvider router={router} />;
}

export default App;

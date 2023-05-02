import Login from "./Auth/Login";
import Home from "./Components/Home/Home";
import SignUp from "./Auth/Signup";
import Volunteers from "./Components/Volunteers/Volunteers";
import Organizer from "./Components/Organizers/Organizer";
import AddCampaign from "./Components/B2B/AddCampaign";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactVideoPlayer from "./Components/main";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/volunteer", element: <Volunteers /> },
  { path: "/organizer", element: <Organizer /> },
  { path: "/vid", element: <ReactVideoPlayer /> },
]);
const router=createBrowserRouter([
  {path:'/',element:<Home/>},
  {path:'/login',element:<Login/>},
  {path:'/signup',element:<SignUp/>},
  {path:'/volunteer',element:<Volunteers/>},
  {path:'/addcampaign',element:<AddCampaign/>}
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;

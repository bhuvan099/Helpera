import { redirect } from "react-router-dom";


export function getAuthToken(){
  const token=localStorage.getItem("token");
  if (token && token.includes(process.env.REACT_APP_AUTH_TOKEN_SUBSTRING)) {
    return token;
  }else{
    return null;
  }
}

export function checkAuthLoader(){
  const token=getAuthToken();
  if(!token){
    return redirect('/login');
  }
  return token;
}


export function LogoutAction(){
  localStorage.removeItem('token');
  return redirect('/');
}

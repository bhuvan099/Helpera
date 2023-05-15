import { redirect } from "react-router-dom";


export function getAuthToken(){
  const token=localStorage.getItem("token");
  if (token && token.includes(process.env.REACT_APP_AUTH_TOKEN_SUBSTRING) && token.trim().length>=Number(process.env.REACT_APP_AUTH_TOKEN_LENGTH)) {
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
  localStorage.removeItem('authTokens');
  localStorage.removeItem('username');
  localStorage.removeItem('metamask');
  localStorage.removeItem('status');
  
  return redirect('/');
}
import { authActions } from "../redux-store/auth";
import { getAuthToken } from './Auth';

export const loginUserMain=(email,password)=>{
      return async(dispatch)=>{
        const loginUser=async(email,password)=>{
            let response=await fetch(process.env.REACT_APP_HELPERA_LOGIN_URL,{
                method:'POST',
                headers:{
                        'Content-Type':'application/json'
                },
                body:JSON.stringify({'email':email,'password':password})
            }) 
            let data=await response.json()
            let authError={}
            if(response.status===200){
                console.log("Logged in successfully");
                localStorage.setItem("token",data.token);
            }
            else{
                authError={
                    message:"Email or password is incorrect",
                    code:response.status,
                    response:response.statusText
                }
                alert('something went wrong');
            }
            dispatch(authActions.setAuthError(authError));
            dispatch(authActions.setUser(data.result));
            dispatch(authActions.setToken(data.token));
        }
        try{
            await loginUser(email,password);
           }catch(error){}
  
    }
}
export const signUpUserMain=(newUser)=>{
      return async(dispatch)=>{
        const SignUpUser=async(newUser)=>{
            let response=await fetch(process.env.REACT_APP_HELPERA_SIGNUP_URL,{
                method:'POST',
                headers:{
                        'Content-Type':'application/json'
                },
                body:JSON.stringify(newUser)
            }) 
            let data=await response.json()
            let authError={}
            if(response.status===200){
                console.log("successfully registered")
                localStorage.setItem("token",data.token)
            }
            else{
                authError={
                    message:"Email or password is incorrect",
                    code:response.status,
                    response:response.statusText
                }
                alert('something went wrong')
            }
            dispatch(authActions.setAuthError(authError));
            dispatch(authActions.setUser(data.result));
            dispatch(authActions.setToken(data.token));
        }
        try{
            await SignUpUser(newUser);
           }catch(error){}
    }
}
export const getUserInfoHandler=()=>{
      return async(dispatch)=>{
        const getUserInfo=async()=>{
           const token=getAuthToken();
           const authToken='Bearer '+token;
            const response=await fetch(process.env.REACT_APP_HELPERA_USERDETAILS_URL,{
                method:'GET',
                headers:{
                        'Content-Type':'application/json',
                        'Authorization':authToken,
                }
                });
            let data=await response.json()
            if(response.status===200){
                console.log("Already logged in");
            dispatch(authActions.setUser(data.user));
            }
        }
        try{
            await getUserInfo();
           }catch(error){}
    }
}
export const resetPasswordHandler=(newPassword)=>{
      return async()=>{
        const resetPassword=async(newPassword)=>{
            const response=await fetch(process.env.REACT_APP_HELPERA_FORGOT_PASS_URL,{
                method:'PATCH',
                headers:{
                        'Content-Type':'application/json',
                },
                body:JSON.stringify(newPassword)
                });
            if(response.status===200){
                console.log("password reset successful");
            }
            if(response.status===400){
                alert("something went wrong")
            }
        }
        try{
            await resetPassword(newPassword);
           }catch(error){}
    }
}
export const regExEmail = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/;
export const regExName=/^[A-Za-z\s]{3,25}$/;
export const regExUsername=/^[a-z]{1}[a-z0-9_]{4,20}$/;
export const regExPhone=/^[5-9]{1}[0-9]{9}$/;
export const regExPassword=/^[a-zA-Z0-9.!@#$%&*-/]{6,20}$/;
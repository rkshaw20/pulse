import axios from "axios";

export const signUpService= async (userData)=>{

    const response=await axios.post('/api/auth/signup',{...userData});
    console.log({response})
    const {createdUser, encodedToken}=response.data;
        return {user:createdUser, token:encodedToken}
}


export const loginService= async(userData)=>{
    const response=await axios.post('/api/auth/login',{...userData});

    const {foundUser, encodedToken}=response.data;
    return {user:foundUser, token:encodedToken}}

// export const add
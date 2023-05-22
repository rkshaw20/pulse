import axios from "axios"

export const signUpService= async (userData)=>{

    const response=await axios.post('/api/auth/signup',{...userData});
    

        const {firstName,lastName,email}=response.data.createdUser;
        const {encodedToken}=response.data;
        return {
            username: `${firstName} ${lastName}`,
            email,
            token: encodedToken,
        }
    
  
}


export const loginService= async(userData)=>{
    console.log(userData)
    const response=await axios.post('/api/auth/login',{...userData});
// console.log(response)
    const {firstName,lastName,email}=response.data.foundUser;
    const {encodedToken}=response.data;
    return {
        username: `${firstName} ${lastName}`,
        email,
        token: encodedToken,
    }}

import { useState } from "react";

export const useFormInput= (initialState)=>{
    const [inputValue, setValue] = useState(initialState);

    const handleInputChange = (e) => setValue({...inputValue,[e.target.name]:e.target.value});
    return {inputValue, handleInputChange};
}
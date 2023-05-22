import {toast} from 'react-toastify';

export const setLocalStorage = (name, data) =>
  localStorage.setItem(name, JSON.stringify(data));

export const getLocalStorage = (name) =>
  JSON.parse(localStorage.getItem(name)) ?? null;

export const removeLocalStorage=(name)=>localStorage.removeItem(name);

export const handleToast=(type,message)=>{
    const toastStyle = {
        position: 'top-left',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      };
      const toastFunction=toast[type];
      toastFunction(message,toastStyle);
}  
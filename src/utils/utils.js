import {toast} from 'react-toastify';

export const setLocalStorage = (name, data) =>
  localStorage.setItem(name, JSON.stringify(data));

export const getLocalStorage = (name) =>
  JSON.parse(localStorage.getItem(name)) ?? null;

export const removeLocalStorage=(name)=>localStorage.removeItem(name);

export const showToast = (type, message)=>{
  const toastStyle = {
    position: 'bottom-left',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  };

  const toastFunc = toast[type];

  // toast function call
  toastFunc(message, toastStyle);
}
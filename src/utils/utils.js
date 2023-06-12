import {toast} from 'react-toastify';

export const setLocalStorage = (name, data) =>
  localStorage.setItem(name, JSON.stringify(data));

export const getLocalStorage = (name) =>
  JSON.parse(localStorage.getItem(name)) ?? null;

export const removeLocalStorage=(name)=>localStorage.removeItem(name);


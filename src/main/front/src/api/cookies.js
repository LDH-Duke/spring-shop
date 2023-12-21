import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name, value, options) =>{
    return cookies.set(name, value, {...options})
}

export const getCookie = (name) => {
    return Cookies.get(name)
}
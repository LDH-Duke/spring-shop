import axios from "axios";

const userApi = {
    /**
     * 로그인
     */
    Login: (data,headers) => {
        axios.post("http://localhost:8080/api/v1/signin", 
        data,
        headers,
    )}
}

export default userApi;
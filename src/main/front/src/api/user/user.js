import axios from "axios";
import qs from "qs";

const userApi = {
    /**
     * 로그인
     */
    Login: async (data, headers) => {
        try {
            // const result = await axios.post(
            //     "http://localhost:8080/api/v1/signin",
            //     data,
            //     headers,
            // )
            const result = await axios({
                url: "http://localhost:8080/api/v1/signin",
                data: data,
                method: "post",
                headers: headers,
            })
            return result.data
        } catch (e) {
            console.log(e)
        }


    },

    /**
     * 회원가입
     */
    SignUp: async (data, headers) => {
        try {
            console.log('here')
            const result = await axios.post("http://localhost:8080/api/v1/signup",
                data,
                headers
            )

            return result.data
        } catch (error) {
            console.log(error)
        }

    },

    /**
     * 아이디 중복확인
     */

    IdCheck: async (account, headers) => {
        try {
            const result = await axios.post(
                "http://localhost:8080/api/v1/user",
                account
            )
            return result.data
        } catch (error) {
            console.log('here111')
            console.log(error);
        }
    }

}

export default userApi;
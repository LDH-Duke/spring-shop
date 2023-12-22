import axios from "axios";

export const productAPI = {
    /**
     * 제품 리스트 전체 조회
     */
    ListAll: async () => {
        try {
            return await axios.get(
                'http://localhost:8080/api/v1/clothes',
            ).then((res) => {
                console.log(res.data);
                return (res.data)
            })
        } catch (error) {
            console.log(error);
        }
    },

    /**
     * 단일 제품 조회
     */
    ListOne: async (data) => {
        try {
            return await axios.get(
                'http://localhost:8080/api/v1/detail',
                { params: data }
            )
        } catch (error) {
            console.log(error)
        }
    },

    /**
     * 제품 리뷰 등록(POST)
     */
    AddReview: async (data) => {
        try {
            return await axios.post(
                'http://localhost:8080/ap1/v1/add_review',
                data,
            )
        } catch (error) {

        }
    }
}
import axios from "axios";

export const reviewAPI = {
    /**
     * 제품 리뷰 등록(POST)
     */
    AddReview: async (data, headers) => {
        try {
            return await axios.post(
                'http://localhost:8080/api/v1/add_review',
                data,
                {
                    withCredentials: true,
                    headers
                }
            )
        } catch (error) {

        }
    }
}
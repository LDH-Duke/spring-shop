import React, { useEffect, useState } from 'react'
import { DetailPresenter } from './DetailPresenter'
import c1 from '../../../imgs/c1.jpg'
import { useParams } from 'react-router-dom'
import { productAPI } from '../../../api/clothes/clothes'
import { reviewAPI } from '../../../api/review/review'


const DetailContainer = ({
    cookies,
}) => {
    let params = useParams();
    const [datas, setDatas] = useState([]);
    const [review, setReview] = useState('');


    //렌더링. 시 리스트 데이터 

    useEffect(() => {
        async function axiosData() {
            const result = await productAPI.ListOne(params);
            setDatas(result.data.data)
        }

        axiosData()
    }, [])

    const reviews = [
        {
            "user": "user1",
            "date": "23-02-15",
            "review": "옷이 너무 멋있어요!"
        },
        {
            "user": "user2",
            "date": "23-02-15",
            "review": "옷이 너무 멋있어요!"
        },
        {
            "user": "user3",
            "date": "23-02-15",
            "review": "옷이 너무 멋있어요!"
        },
        {
            "user": "user4",
            "date": "23-02-15",
            "review": "옷이 너무 멋있어요!"
        }
    ]

    const size = [
        { value: "S", name: "S" },
        { value: "M", name: "M" },
        { value: "L", name: "L" }
    ]

    const handleReviewChange = (review) => {
        setReview(review)

    }

    const handleAddReview = async () => {
        const data = {
            date: review,
            clothes_id: params.id,
        }
        const headers = {
            'Content-Type': 'application/json',
            withCredentials: true,
        }

        const result = await reviewAPI.AddReview(data, headers);

        console.log(result)

    }
    return (
        <DetailPresenter
            data={datas}
            reviews={reviews}
            size={size}

            handleReviewChange={handleReviewChange}
            handleAddReview={handleAddReview}
        />
    )
}

export default DetailContainer
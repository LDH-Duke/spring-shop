import React, { useEffect, useState } from 'react'
import { DetailPresenter } from './DetailPresenter'
import c1 from '../../../imgs/c1.jpg'
import { useParams } from 'react-router-dom'
import { productAPI } from '../../../api/clothes/clothes'


const DetailContainer = () => {
    let params = useParams();
    const [datas, setDatas] = useState([]);
    const [review, setReview] = useState('');

    //렌더링. 시 리스트 데이터 

    useEffect(() => {
        async function axiosData() {
            const result = await productAPI.ListOne(params);
            console.log("동작함")
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
        console.log(review)
    }


    // console.log(datas)
    return (
        <DetailPresenter
            data={datas}
            reviews={reviews}
            size={size}

            handleReviewChange={handleReviewChange}
        />
    )
}

export default DetailContainer
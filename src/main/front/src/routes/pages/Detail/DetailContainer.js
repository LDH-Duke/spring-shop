import React from 'react'
import { DetailPresenter } from './DetailPresenter'
import c1 from '../../../imgs/c1.jpg'


const DetailContainer = () => {
    const data = {
        "img": c1,
        "title": "페이크 레더 패딩 점퍼",
        "explain": "합성 가죽 소재의 크롭핏 점퍼. 리브드 마감 내부 커프단이 매치된 긴소매 하이넥 디자인. 골반 부분 플랩오버 포켓. 내부 포켓 디테일. 옆면 엘라스틱 밴드로 핏 조절 가능한 밑단. 앞면 지퍼 여밈.",
        "detail": "겉감\n 기본소재\n 100% 폴리에스터\n\n코팅\n 100% 폴리우레탄\n\n안감\n 100% 폴리에스터\n\n충전재\n 100% 폴리에스터 ",
        "price": "10000",
    }
    const reviews = [
        {
            "user": "user1",
            "date": "23-02-15",
            "review": "옷이 너무 멋있어요!"
        },
        {
            "user":"user2",
            "date": "23-02-15",
            "review":"옷이 너무 멋있어요!"
        },
        {
            "user":"user3",
            "date": "23-02-15",
            "review":"옷이 너무 멋있어요!"
        },
        {
            "user":"user4",
            "date": "23-02-15",
            "review":"옷이 너무 멋있어요!"
        }
    ]

    const size = [
        {value : "S", name:"S" },
        {value : "M", name:"M" },
        {value : "L", name:"L" }
    ]

    return (
        <DetailPresenter
            data={data}
            reviews={reviews}
            size={size}
        />
    )
}

export default DetailContainer
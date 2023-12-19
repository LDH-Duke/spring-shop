import React from 'react'
import './Detail.css'
import { ImgBox } from '../../../components/ImgBox'
import { Text, TextWrap, TextArea, TextLabel } from '../../../components/Text'
import { InputContainer, InputField } from '../../../components/Input'
import { Button } from '../../../components/Button'
import { SelectBox } from '../../../components/SelectBox'

export const DetailPresenter = ({
    data,
    reviews,
    size
}) => {
    return (
        <div className='detail-container'>
            <div className='detail-wrap'>
                <ImgBox />
                <div className='detail-context'>
                    <Text data={data} />
                </div>
                <div className='detail-review'>
                    <div className='review-wrap'>
                        <TextLabel>Review</TextLabel>
                        <TextWrap height='50%'>
                            {
                                reviews.map((review, idx) => {
                                    return (
                                        <TextWrap>
                                            <TextLabel color='black' size='0.8rem'>
                                                {review.user}
                                                {review.date}
                                            </TextLabel>
                                            <TextArea>
                                                {review.review}
                                            </TextArea>
                                        </TextWrap>
                                    )
                                })
                            }
                        </TextWrap>
                        <div className='review-input'>
                            <InputContainer margin='15px 0'>
                                <InputField placeholder='댓글을 입력하세요.' />
                                <Button>V</Button>
                            </InputContainer>
                        </div>
                    </div>
                </div>
                <div className='detail-purchase'>
                    <div className='purchase-option'>
                        <SelectBox options={size}/>
                    </div>
                    <div className='purchase-btn'>
                        <Button>장바구니</Button>
                        <Button>구매</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

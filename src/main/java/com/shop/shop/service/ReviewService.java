package com.shop.shop.service;

import com.shop.shop.domain.Review;
import com.shop.shop.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    /**
     * 리뷰 등록(POST)
     */
    public Review addReview(Review review){
        return reviewRepository.save(review);
    }
}

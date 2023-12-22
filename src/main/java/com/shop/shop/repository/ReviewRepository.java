package com.shop.shop.repository;

import com.shop.shop.domain.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Integer> {

    Review findById(Long clothes_id);
}

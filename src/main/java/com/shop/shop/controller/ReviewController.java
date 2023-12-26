package com.shop.shop.controller;

import com.shop.shop.domain.ResDto;
import com.shop.shop.domain.Review;
import com.shop.shop.domain.User;
import com.shop.shop.service.ReviewService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    /**
     * 리뷰 등록(POST)
     */
    @PostMapping(value = "api/v1/add_review", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ResDto> addReview(@RequestBody Review review, @RequestHeader()HttpHeaders headers, HttpServletRequest request){

        System.out.println(review);
        System.out.println(review.getClothes_id());
        System.out.println(review.getDate());


        System.out.println(headers);

//        Cookie[] cookies = request.getCookies();
//        if(cookies != null){
//            for (Cookie cookie : cookies) {
//                System.out.println(cookie.getName());
//            }
//        }

//        Review result = reviewService.addReview(review);

        return ResponseEntity.ok(ResDto.builder()
                .code(200)
                .statusCode(HttpStatus.OK)
                .message("중복 없음")
                .data(null)
                .build()
        );
    }
}

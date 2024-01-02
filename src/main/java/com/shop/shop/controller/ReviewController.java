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

import java.util.Enumeration;
import java.util.HashMap;


@RestController
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    /**
     * 리뷰 등록(POST)
     */
    @PostMapping(value = "api/v1/add_review", produces = MediaType.APPLICATION_JSON_VALUE)
    
    public ResponseEntity<ResDto> addReview(@RequestBody Review review,HttpSession session,HttpServletRequest httpServletRequest){

        String sessionId = null;

//        Cookie[] cookies = httpServletRequest.getCookies();
//        for (Cookie cookie : cookies) {
//            System.out.println("review action : cookie -> "+cookie);
//            System.out.println("review action : cookieValue -> " + cookie.getValue());
//            if(cookie.getName().equals("JSESSIONID")){
//                sessionId = cookie.getValue();
//                System.out.println("review action : same cookie Value -> " + sessionId);
//            }
//        }



        System.out.println(session.isNew());
//        System.out.println(session.getAttribute("user"));

//        System.out.println(httpServletRequest.getSession().getId());
//
//        if (sessionId != null ){
//            String value = (String) session.getAttribute("1");
//            System.out.println("hi"+value);
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

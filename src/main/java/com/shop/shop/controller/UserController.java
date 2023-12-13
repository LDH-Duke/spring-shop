package com.shop.shop.controller;

import com.shop.shop.domain.ResDto;
import com.shop.shop.domain.ResEntity;
import com.shop.shop.domain.User;
import com.shop.shop.service.UserService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Member;

@RestController
public class UserController {

    @Autowired
    private UserService userService;


    /**
     * 로그인 (GET)
     */
    @GetMapping("/shop/signin")
    public String signIn(){
        return "signIn";
    }

    /**
     * 로그인 (POST)
     */
    @PostMapping(value = "/shop/signin", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ResDto> signIn(@RequestBody User user, HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse){
        int result = userService.login(user);

        System.out.println(user.getAccount());

        if( result == 400){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(ResDto.builder()
                            .code(400)
                            .statusCode(HttpStatus.INTERNAL_SERVER_ERROR)
                            .message("로그인 실패")
                            .build()
                    );
        }

        //로그인 성공
        //세션이 있으면 있는 세션 반환, 없으면 신규 세션을 생성
        httpServletRequest.getSession().invalidate();
        HttpSession session = httpServletRequest.getSession(true);

        session.setAttribute("user",user);
        session.setMaxInactiveInterval(3600); // 1시간 유지

        //쿠키 생성
        Cookie cookie = new Cookie("user", session.getId());
        cookie.setMaxAge(60*60);
        cookie.setPath("/");
        httpServletResponse.addCookie(cookie);

        return ResponseEntity.ok(ResDto.builder()
                .code(200)
                .statusCode(HttpStatus.OK)
                .message("로그인 성공")
                .data(user.getAccount())
                .build()
        );
    }

    /**
     * 로그아웃(Post)
     */
    @PostMapping("/shop/signout")
    public ResponseEntity<ResDto> signOut(@SessionAttribute(name = "user", required = false) User user,
                                                  HttpServletRequest httpServletRequest,
                                                  HttpServletResponse httpServletResponse){

        HttpSession session = httpServletRequest.getSession(false);
        System.out.println(session);

        if(session != null){
            session.invalidate();
        }

        // 쿠키 삭제
        Cookie[] cookies = httpServletRequest.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                cookie.setMaxAge(0); // 쿠키의 수명을 0으로 설정하여 삭제
                httpServletResponse.addCookie(cookie);
            }
        }

        return ResponseEntity.ok(ResDto.builder()
                        .code(200)
                        .statusCode(HttpStatus.OK)
                        .message("로그아웃")
                        .build()
                );
    }

    /**
     * 회원가입 (GET)
     */
    @GetMapping("/shop/signup")
    public String signUp(){

        return "";
    }

    /**
     * 회원가입 (POST)
     */
    @PostMapping(value = "/shop/signup", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ResDto> signUp(@RequestBody User user){

        int result = userService.join(user);

        System.out.println(result);

        //실패

        if ( result == 409){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(ResDto.builder()
                            .code(409)
                            .statusCode(HttpStatus.INTERNAL_SERVER_ERROR)
                            .message("회원가입 실패")
                            .build()
                    );
        }

        //성공
        return ResponseEntity.ok(ResDto.builder()
                        .code(200)
                        .statusCode(HttpStatus.OK)
                        .message("회원가입 성공")
                        .build()
        );

    }
}

package com.shop.shop.controller;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.shop.shop.domain.ResDto;

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

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;


//@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")-
@RestController
public class UserController {

    @Autowired
    private UserService userService;


//    /**
//     * 로그인 (GET)
//     */
//    @GetMapping("/shop/signin")
//    public String signIn(){
//        return "index";
//    }

    /**
     * ID 중복조회 (GET)
     */
    @PostMapping(value = "/api/v1/user", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ResDto> idCheck(@RequestBody User user,
                                          HttpServletRequest httpServletRequest,
                                          HttpServletResponse httpServletResponse) throws UnsupportedEncodingException, JsonProcessingException {

        System.out.println(user.getAccount());
//        Object data = URLDecoder.decode(account, "UTF_8");
//        System.out.println(data);



        int result = userService.duplicationUser(user);

        if(result == 0){
            return ResponseEntity.ok(ResDto.builder()
                    .code(409)
                    .statusCode(HttpStatus.BAD_REQUEST)
                    .message("아이디 중복")
                    .data(user.getAccount())
                    .build()
            );
        }

        return ResponseEntity.ok(ResDto.builder()
                .code(200)
                .statusCode(HttpStatus.OK)
                .message("중복 없음")
                .data(user.getAccount())
                .build()
        );
    }

    /**
     * 로그인 (POST)
     */
    @PostMapping(value = "/api/v1/signin", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ResDto> signIn(@RequestBody User user, HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse){
        int result = userService.login(user);

        System.out.println(user.getAccount());

        if( result == 400){
            System.out.println("비밀번호틀림");
            return ResponseEntity.ok(ResDto.builder()
                    .code(400)
                    .statusCode(HttpStatus.BAD_REQUEST)
                    .message("비밀번호 오류")
                    .data(user.getAccount())
                    .build()
            );
        }

        if( result == 404){
            System.out.println("아이디없음");
            return ResponseEntity.ok(ResDto.builder()
                    .code(404)
                    .statusCode(HttpStatus.BAD_REQUEST)
                    .message("존재하지 않는 아이디")
                    .data(user.getAccount())
                    .build()
            );
        }

        //로그인 성공
        //세션이 있으면 있는 세션 반환, 없으면 신규 세션을 생성
        httpServletRequest.getSession().invalidate();
        HttpSession session = httpServletRequest.getSession(true);

        session.setAttribute(session.getId(),user.getAccount());
        session.setMaxInactiveInterval(3600); // 1시간 유지

        String value = (String) session.getAttribute(session.getId());
        System.out.println(session.getId());
        System.out.println(value);

        System.out.println(session.getId());

        //쿠키 생성
        Cookie cookie = new Cookie("user", session.getId());
        System.out.println("쿠키" + cookie);
        System.out.println("쿠키 : "+cookie.getAttribute(session.getId()));
        cookie.setMaxAge(60*60);
        cookie.setPath("/");
        httpServletResponse.addCookie(cookie);



        System.out.println("성공");
        return ResponseEntity.ok(ResDto.builder()
                .code(200)
                .statusCode(HttpStatus.OK)
                .message("로그인 성공")
                .data(cookie)
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
    @PostMapping(value = "/api/v1/signup", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ResDto> signUp(@RequestBody User user){

        int result = userService.join(user);

        System.out.println(result);

        //실패

        if ( result == 409){
            return ResponseEntity.ok(ResDto.builder()
                            .code(404)
                            .statusCode(HttpStatus.BAD_REQUEST)
                            .message("불가")
                            .data(user.getAccount())
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

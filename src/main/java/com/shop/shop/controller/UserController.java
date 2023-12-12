package com.shop.shop.controller;

import com.shop.shop.domain.ResDto;
import com.shop.shop.domain.ResEntity;
import com.shop.shop.domain.User;
import com.shop.shop.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @Autowired
    private UserService userService;


    @GetMapping("/shop/signin")
    public String signIn(){
        return "signIn";
    }

    @PostMapping(value = "/shop/signin", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResEntity signIn(@RequestBody User user, HttpServletRequest httpServletRequest){
        int result = userService.login(user);

        if( result == 400){
            return new ResEntity(result, "로그인 실패");
        }

        //로그인 성공
        //세션이 있으면 있는 세션 반환, 없으면 신규 세션을 생성
        httpServletRequest.getSession().invalidate();
        HttpSession session = httpServletRequest.getSession(true);
        
        session.setAttribute("user",user);
        session.setMaxInactiveInterval(3600); // 1시간 유지

        return new ResEntity(result, "로그인 성공");
    }

    @GetMapping("/shop/signup")
    public String signUp(){

        return "";
    }

    @PostMapping(value = "/shop/signup", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ResDto> signUp(@RequestBody User user){

        int result = userService.join(user);

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

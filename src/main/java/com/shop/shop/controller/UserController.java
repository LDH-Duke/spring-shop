package com.shop.shop.controller;

import com.shop.shop.domain.ResEntity;
import com.shop.shop.domain.User;
import com.shop.shop.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
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

    @PostMapping("/shop/signin")
    public String signIn(@RequestBody User user){
        System.out.println("여기옴");
        System.out.println(user.getAccount());


        return "";
    }

    @GetMapping("/shop/signup")
    public String signUp(){

        return "";
    }

    @PostMapping(value = "/shop/signup", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResEntity signUp(@RequestBody User user){

        if (userService.join(user) == 200){
            return new ResEntity(true, "회원가입 성공");
        }else{
            return new ResEntity(false, "회원가입 실패");
        }


    }
}

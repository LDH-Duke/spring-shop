package com.shop.shop.controller;

import com.shop.shop.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class UserController {

    @Autowired
    private User user;


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
}

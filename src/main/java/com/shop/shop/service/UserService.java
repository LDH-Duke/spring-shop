package com.shop.shop.service;


import com.shop.shop.domain.ResEntity;
import com.shop.shop.domain.User;
import com.shop.shop.repository.UserRepository;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.bind.annotation.SessionAttributes;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    /**
     * 로그인
     */
    public int login(User user){
        //중복 검사
        User result = userRepository.findByAccount(user.getAccount());

        if(result ==null){
            return 404; //사용자가 전송한 아이디가 존재하지 않음
        }
        if(!user.getPw().equals(result.getPw())){
            return 400; //비밀번호 틀림
        }

        return 200;
    }


    /**
     * 회원 가입
     * @param user
     * @return success code
     */
    public int join(User user){
        if(duplicationUser(user) == 1){
            userRepository.save(user);
            return 200;
        }else{
            return 409;
        }
    }


    /**
     * 아이디 중복 검사
     * @param user
     * @return
     */
    public int duplicationUser(User user){
        System.out.println(user.getAccount());
        User result = userRepository.findByAccount(user.getAccount());
        System.out.println(result.getPw());
        if(result.getAccount().equals( user.getAccount())){
            System.out.println("아이디 중복");
            return 0;
        }

        System.out.println("중복 없음");
        return 1;

    }


}

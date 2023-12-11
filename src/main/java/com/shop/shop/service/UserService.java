package com.shop.shop.service;


import com.shop.shop.domain.ResEntity;
import com.shop.shop.domain.User;
import com.shop.shop.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

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
    private int duplicationUser(User user){
        List<User> result = userRepository.findByAccount(user.getAccount());

        if(result.isEmpty()){
            System.out.println("중복 없음");
            return 1;
        }else {
            System.out.println("아이디 중복");
            return 0;
        }

    }

}

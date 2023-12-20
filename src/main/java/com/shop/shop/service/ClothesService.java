package com.shop.shop.service;

import com.shop.shop.domain.Clothes;
import com.shop.shop.repository.ClothesRepository;
import jakarta.servlet.http.PushBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClothesService {

    @Autowired
    private ClothesRepository clothesRepository;

    /**
     * 옷 전체 조회
     */
    public List<Clothes> getAllClothes(){

        return clothesRepository.findAll();
    }

    /**
     * 옷 단일 조회
     */
    public Clothes getClothes(Integer id){
        return clothesRepository.findById(id).get();
    }


    /**
     *  제품 생성
     */
    public Clothes saveClothes(Clothes clothes){
        return clothesRepository.save(clothes);
    }

    /**
     *  제품 삭제
     */

    public void deleteClothes(Integer id){
        clothesRepository.deleteById(id);
    }


}

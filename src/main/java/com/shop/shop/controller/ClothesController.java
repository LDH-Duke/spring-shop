package com.shop.shop.controller;

import com.shop.shop.domain.Clothes;
import com.shop.shop.domain.ResDto;
import com.shop.shop.domain.User;
import com.shop.shop.service.ClothesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ClothesController {

    @Autowired
    private ClothesService clothesService;

    /**
     * 제품 전체 조회 (GET)
     */
    @GetMapping("/api/v1/clothes")
    public ResponseEntity<ResDto> findAllClothes(){

        List<Clothes> list = clothesService.getAllClothes();

//        for (Clothes clothes : list) {
//            System.out.println(clothes.getName());
//        }

        return ResponseEntity.ok(ResDto.builder()
                .code(200)
                .statusCode(HttpStatus.OK)
                .message("제품 전체 조회 완료")
                .data(list)
                .build()
        );
    }

    /**
     * 단일 제품 조회 (GET)
     */
    @GetMapping("/api/v1/detail")
    public ResponseEntity<ResDto> findOneClothes(@RequestParam(name = "id") Integer id){

        Clothes result = clothesService.getClothes(id);

        System.out.println(result.getName());

        return ResponseEntity.ok(ResDto.builder()
                .code(200)
                .statusCode(HttpStatus.OK)
                .message("단일 제품 조회 완료")
                .data(result)
                .build()
        );
    }


    /**
     * 제품 추가
     * @param clothes
     * @return
     */
    @PostMapping(value = "/api/v1/add_clothes", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ResDto> createClothes(@RequestBody Clothes clothes){

        Clothes result = clothesService.saveClothes(clothes);


        return ResponseEntity.ok(ResDto.builder()
                .code(200)
                .statusCode(HttpStatus.OK)
                .message("중복 없음")
                .data(result)
                .build()
        );
    }

    /**
     * 제품 수정
     * @param id
     * @param clothes
     * @return
     */
    @PutMapping(value = "/api/v1/update_clothes",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ResDto> updateClothed(@RequestParam(name = "id") Integer id, @RequestBody Clothes clothes ){

        Clothes tempClothes = clothesService.getClothes(id);
        tempClothes.setName(clothes.getName());
        tempClothes.setPrice(clothes.getPrice());
        tempClothes.setAmount(clothes.getAmount());
        tempClothes.setStatus(clothes.getStatus());

        Clothes result = clothesService.saveClothes(tempClothes);

        return ResponseEntity.ok(ResDto.builder()
                .code(200)
                .statusCode(HttpStatus.OK)
                .message("중복 없음")
                .data(result)
                .build()
        );
    }

    /**
     * 제품 삭제
     * @param id
     * @return
     */
    @DeleteMapping(value = "/api/v1/delete_clothes",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ResDto> deleteClothes(@RequestParam(name = "id")Integer id){
        clothesService.deleteClothes(id);

        return ResponseEntity.ok(ResDto.builder()
                .code(200)
                .statusCode(HttpStatus.OK)
                .message("중복 없음")
                .data(null)
                .build()
        );
    }

}

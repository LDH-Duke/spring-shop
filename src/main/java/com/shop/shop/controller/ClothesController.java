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

    @GetMapping("/api/v1/clothes")
    public ResponseEntity<ResDto> findClothes(){

        List<Clothes> list = clothesService.getAllClothes();

        for (Clothes clothes : list) {
            System.out.println(clothes.getName());
        }

        return ResponseEntity.ok(ResDto.builder()
                .code(200)
                .statusCode(HttpStatus.OK)
                .message("중복 없음")
                .data(list)
                .build()
        );
    }

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

    @PutMapping(value = "/api/v1/update_clothes",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ResDto> updateClothed(@RequestParam(name = "id") Integer id, @RequestBody Clothes clothes ){

        Clothes tempClothes = clothesService.getClothes(id);
        tempClothes.setName(clothes.getName());
        tempClothes.setPrice(clothes.getPrice());
        tempClothes.setAmount(clothes.getAmount());
        tempClothes.setCategory(clothes.getCategory());
        tempClothes.setState(clothes.getState());

        Clothes result = clothesService.saveClothes(tempClothes);

        return ResponseEntity.ok(ResDto.builder()
                .code(200)
                .statusCode(HttpStatus.OK)
                .message("중복 없음")
                .data(result)
                .build()
        );
    }

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

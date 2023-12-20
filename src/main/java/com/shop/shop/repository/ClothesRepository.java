package com.shop.shop.repository;

import com.shop.shop.domain.Clothes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClothesRepository extends JpaRepository<Clothes, Integer> {

    Clothes findByName(String name);
}

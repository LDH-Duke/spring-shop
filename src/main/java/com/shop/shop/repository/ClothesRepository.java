package com.shop.shop.repository;

import com.shop.shop.domain.Clothes;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClothesRepository extends JpaRepository<Clothes, Integer> {
}

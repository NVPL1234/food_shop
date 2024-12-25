package com.example.foodShop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.foodShop.entity.OptionCategory;

@Repository
public interface OptionCategoryRepository extends JpaRepository<OptionCategory, Long> {

}
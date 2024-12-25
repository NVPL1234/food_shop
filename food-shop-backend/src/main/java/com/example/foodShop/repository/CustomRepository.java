package com.example.foodShop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.foodShop.entity.Custom;
import com.example.foodShop.entity.CustomPK;

@Repository
public interface CustomRepository extends JpaRepository<Custom, CustomPK> {

}
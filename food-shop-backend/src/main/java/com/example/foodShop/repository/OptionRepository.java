package com.example.foodShop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.foodShop.entity.Option;

@Repository
public interface OptionRepository extends JpaRepository<Option, Long> {

}

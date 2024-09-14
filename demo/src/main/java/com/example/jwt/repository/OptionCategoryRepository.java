package com.example.jwt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.jwt.entity.OptionCategory;

@Repository
public interface OptionCategoryRepository extends JpaRepository<OptionCategory, Long> {

}
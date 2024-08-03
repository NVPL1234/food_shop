package com.example.jwt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.jwt.entity.Custom;
import com.example.jwt.entity.CustomPK;

@Repository
public interface CustomRepository extends JpaRepository<Custom, CustomPK> {

}
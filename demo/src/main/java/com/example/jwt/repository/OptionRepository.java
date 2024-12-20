package com.example.jwt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.jwt.entity.Option;

@Repository
public interface OptionRepository extends JpaRepository<Option, Long> {

}

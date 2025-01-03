package com.example.foodShop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.foodShop.entity.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long>{

}

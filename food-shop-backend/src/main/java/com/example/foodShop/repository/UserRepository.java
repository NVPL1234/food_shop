package com.example.foodShop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.foodShop.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
	User findByUsername(String username);
	
	@Modifying
	@Transactional
	@Query(value = "UPDATE users SET password = ?2 WHERE user_id = ?1", nativeQuery = true)
	int updatePassword(Long userId, String password);
}
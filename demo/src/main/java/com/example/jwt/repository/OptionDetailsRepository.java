package com.example.jwt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.jwt.entity.OptionCategory;
import com.example.jwt.entity.OptionDetails;
import com.example.jwt.entity.OptionDetailsPK;

@Repository
public interface OptionDetailsRepository extends JpaRepository<OptionDetails, OptionDetailsPK> {

	@Modifying
	@Transactional
	@Query(value = "DELETE option_details WHERE option_category_id = ?1", nativeQuery = true)
	void deleteBy(Long optionCategoryId);
	
	List<OptionDetails> findByOptionCategory(OptionCategory optionCategory);
}
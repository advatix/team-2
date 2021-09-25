package com.advatix.smart.warehouse.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.advatix.smart.warehouse.entity.ShelfMaster;;

public interface ShelfMasterRepository extends JpaRepository<ShelfMaster, Integer> {
	
}
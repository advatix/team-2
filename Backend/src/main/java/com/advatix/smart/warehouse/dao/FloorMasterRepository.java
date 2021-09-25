package com.advatix.smart.warehouse.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.advatix.smart.warehouse.entity.FloorMaster;;

public interface FloorMasterRepository extends JpaRepository<FloorMaster, Integer> {
	
}
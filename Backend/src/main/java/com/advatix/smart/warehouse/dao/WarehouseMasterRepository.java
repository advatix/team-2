package com.advatix.smart.warehouse.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.advatix.smart.warehouse.entity.WarehouseMaster;;

public interface WarehouseMasterRepository extends JpaRepository<WarehouseMaster, Integer> {
	
}
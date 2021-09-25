package com.advatix.smart.warehouse.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.advatix.smart.warehouse.entity.RackMaster;

public interface RackMasterRepository extends JpaRepository<RackMaster, Integer> {
	
}
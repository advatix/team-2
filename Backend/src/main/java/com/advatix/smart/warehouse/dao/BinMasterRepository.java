package com.advatix.smart.warehouse.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.advatix.smart.warehouse.entity.BinMaster;;

public interface BinMasterRepository extends JpaRepository<BinMaster, Integer> {
	
}
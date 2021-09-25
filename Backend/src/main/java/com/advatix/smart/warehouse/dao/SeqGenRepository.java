package com.advatix.smart.warehouse.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.advatix.smart.warehouse.entity.SeqGen;

@Repository
public interface SeqGenRepository extends JpaRepository<SeqGen, String> {
	@Procedure
	int auto_seq_gen(@Param("applicationid") String applicationid);
}
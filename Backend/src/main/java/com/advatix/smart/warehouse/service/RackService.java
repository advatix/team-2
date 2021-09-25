package com.advatix.smart.warehouse.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.advatix.smart.warehouse.dao.RackMasterRepository;
import com.advatix.smart.warehouse.entity.RackMaster;
import com.advatix.smart.warehouse.pojo.RackMasterPojo;

@Service
public class RackService {
	
	@Autowired
	private RackMasterRepository repository;

	public List<RackMasterPojo> list() {
		List<RackMasterPojo> rackMasterPojos=new ArrayList<>();
		List<RackMaster> list=repository.findAll();
		list.forEach(warehouse->{
			RackMasterPojo rackMasterPojo=new RackMasterPojo();
			BeanUtils.copyProperties(warehouse, rackMasterPojo);
			rackMasterPojos.add(rackMasterPojo);
		});
		return rackMasterPojos;
	}

	public RackMasterPojo save(RackMasterPojo rackMasterPojo) {
		int rackId=rackMasterPojo.getRackId();
	Optional<RackMaster> rackMasterOptional=repository.findById(rackId);
	RackMaster rackMaster;
	if(rackMasterOptional.isPresent()) {
		rackMaster=rackMasterOptional.get();
		BeanUtils.copyProperties(rackMasterPojo, rackMaster);
		rackMaster.setUpdatedBy("Update");
		rackMaster.setUpdatedOn(new Date());
		
	}
	else {
		rackMaster=new RackMaster();
		rackMaster.setUpdatedBy("Add");
		rackMaster.setUpdatedOn(new Date());
		BeanUtils.copyProperties(rackMasterPojo, rackMaster);
	}
	repository.save(rackMaster);
		return rackMasterPojo;
	}

	public void deleteById(int id) {
		Optional<RackMaster> rackMasterOptional=repository.findById(id);
		if(rackMasterOptional.isPresent()) {
			repository.deleteById(id);
		}
	}

	public RackMasterPojo getById(int id) {
		RackMasterPojo rackMasterPojo=new RackMasterPojo();
		Optional<RackMaster> rackMasterOptional=repository.findById(id);
		if(rackMasterOptional.isPresent()) {
			RackMaster rackMaster=rackMasterOptional.get();
			BeanUtils.copyProperties(rackMaster, rackMasterPojo);
		}
		else {
			throw new RuntimeException("Entity not found");
		}
		return rackMasterPojo;
	}

}

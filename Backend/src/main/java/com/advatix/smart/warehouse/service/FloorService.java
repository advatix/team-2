package com.advatix.smart.warehouse.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.advatix.smart.warehouse.dao.FloorMasterRepository;
import com.advatix.smart.warehouse.entity.FloorMaster;
import com.advatix.smart.warehouse.pojo.FloorMasterPojo;

@Service
public class FloorService {
	
	@Autowired
	private FloorMasterRepository repository;

	public List<FloorMasterPojo> list() {
		List<FloorMasterPojo> floorMasterPojos=new ArrayList<>();
		List<FloorMaster> list=repository.findAll();
		list.forEach(warehouse->{
			FloorMasterPojo floorMasterPojo=new FloorMasterPojo();
			BeanUtils.copyProperties(warehouse, floorMasterPojo);
			floorMasterPojos.add(floorMasterPojo);
		});
		return floorMasterPojos;
	}

	public FloorMasterPojo save(FloorMasterPojo floorMasterPojo) {
		int floorId=floorMasterPojo.getFloorId();
	Optional<FloorMaster> floorMasterOptional=repository.findById(floorId);
	FloorMaster floorMaster;
	if(floorMasterOptional.isPresent()) {
		floorMaster=floorMasterOptional.get();
		BeanUtils.copyProperties(floorMasterPojo, floorMaster);
		floorMaster.setUpdatedBy("Update");
		floorMaster.setUpdatedOn(new Date());
		
	}
	else {
		floorMaster=new FloorMaster();
		floorMaster.setUpdatedBy("Add");
		floorMaster.setUpdatedOn(new Date());
		BeanUtils.copyProperties(floorMasterPojo, floorMaster);
	}
	repository.save(floorMaster);
		return floorMasterPojo;
	}

	public void deleteById(int id) {
		Optional<FloorMaster> floorMasterOptional=repository.findById(id);
		if(floorMasterOptional.isPresent()) {
			repository.deleteById(id);
		}
	}

	public FloorMasterPojo getById(int id) {
		FloorMasterPojo floorMasterPojo=new FloorMasterPojo();
		Optional<FloorMaster> floorMasterOptional=repository.findById(id);
		if(floorMasterOptional.isPresent()) {
			FloorMaster floorMaster=floorMasterOptional.get();
			BeanUtils.copyProperties(floorMaster, floorMasterPojo);
		}
		else {
			throw new RuntimeException("Entity not found");
		}
		return floorMasterPojo;
	}

}

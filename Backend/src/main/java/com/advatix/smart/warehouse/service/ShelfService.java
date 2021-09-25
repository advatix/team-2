package com.advatix.smart.warehouse.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.advatix.smart.warehouse.dao.ShelfMasterRepository;
import com.advatix.smart.warehouse.entity.ShelfMaster;
import com.advatix.smart.warehouse.pojo.ShelfMasterPojo;

@Service
public class ShelfService {
	
	@Autowired
	private ShelfMasterRepository repository;

	public List<ShelfMasterPojo> list() {
		List<ShelfMasterPojo> rackMasterPojos=new ArrayList<>();
		List<ShelfMaster> list=repository.findAll();
		list.forEach(warehouse->{
			ShelfMasterPojo shelfMasterPojo=new ShelfMasterPojo();
			BeanUtils.copyProperties(warehouse, shelfMasterPojo);
			rackMasterPojos.add(shelfMasterPojo);
		});
		return rackMasterPojos;
	}

	public ShelfMasterPojo save(ShelfMasterPojo shelfMasterPojo) {
		int shelf=shelfMasterPojo.getShelfId();
	Optional<ShelfMaster> rackMasterOptional=repository.findById(shelf);
	ShelfMaster rackMaster;
	if(rackMasterOptional.isPresent()) {
		rackMaster=rackMasterOptional.get();
		BeanUtils.copyProperties(shelfMasterPojo, rackMaster);
		rackMaster.setUpdatedBy("Update");
		rackMaster.setUpdatedOn(new Date());
		
	}
	else {
		rackMaster=new ShelfMaster();
		rackMaster.setUpdatedBy("Add");
		rackMaster.setUpdatedOn(new Date());
		BeanUtils.copyProperties(shelfMasterPojo, rackMaster);
	}
	repository.save(rackMaster);
		return shelfMasterPojo;
	}

	public void deleteById(int id) {
		Optional<ShelfMaster> rackMasterOptional=repository.findById(id);
		if(rackMasterOptional.isPresent()) {
			repository.deleteById(id);
		}
	}

	public ShelfMasterPojo getById(int id) {
		ShelfMasterPojo shelfMasterPojo=new ShelfMasterPojo();
		Optional<ShelfMaster> rackMasterOptional=repository.findById(id);
		if(rackMasterOptional.isPresent()) {
			ShelfMaster rackMaster=rackMasterOptional.get();
			BeanUtils.copyProperties(rackMaster, shelfMasterPojo);
		}
		else {
			throw new RuntimeException("Entity not found");
		}
		return shelfMasterPojo;
	}

}

package com.advatix.smart.warehouse.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.advatix.smart.warehouse.dao.WarehouseMasterRepository;
import com.advatix.smart.warehouse.entity.WarehouseMaster;
import com.advatix.smart.warehouse.pojo.WarehouseMasterPojo;

@Service
public class WarehouseService {
	
	@Autowired
	private WarehouseMasterRepository repository;

	public List<WarehouseMasterPojo> list() {
		List<WarehouseMasterPojo> warehouseMasterPojos=new ArrayList<>();
		List<WarehouseMaster> list=repository.findAll();
		list.forEach(warehouse->{
			WarehouseMasterPojo warehouseMasterPojo=new WarehouseMasterPojo();
			BeanUtils.copyProperties(warehouse, warehouseMasterPojo);
			warehouseMasterPojos.add(warehouseMasterPojo);
		});
		return warehouseMasterPojos;
	}

	public WarehouseMasterPojo save(WarehouseMasterPojo warehouseMasterPojo) {
		int warehouseId=warehouseMasterPojo.getWarehouseId();
	Optional<WarehouseMaster> warehouseMasterOptional=repository.findById(warehouseId);
	WarehouseMaster warehouseMaster;
	if(warehouseMasterOptional.isPresent()) {
		warehouseMaster=warehouseMasterOptional.get();
		BeanUtils.copyProperties(warehouseMasterPojo, warehouseMaster);
		warehouseMaster.setUpdatedBy("Update");
		warehouseMaster.setUpdatedOn(new Date());
		
	}
	else {
		warehouseMaster=new WarehouseMaster();
		warehouseMaster.setUpdatedBy("Add");
		warehouseMaster.setUpdatedOn(new Date());
		BeanUtils.copyProperties(warehouseMasterPojo, warehouseMaster);
	}
	repository.save(warehouseMaster);
		return warehouseMasterPojo;
	}

	public void deleteById(int id) {
		Optional<WarehouseMaster> warehouseMasterOptional=repository.findById(id);
		if(warehouseMasterOptional.isPresent()) {
			repository.deleteById(id);
		}
	}

	public WarehouseMasterPojo getById(int id) {
		WarehouseMasterPojo warehouseMasterPojo=new WarehouseMasterPojo();
		Optional<WarehouseMaster> optionalData=repository.findById(id);
		if(optionalData.isPresent()) {
			WarehouseMaster warehouseMaster=optionalData.get();
			BeanUtils.copyProperties(warehouseMaster, warehouseMasterPojo);
		}
		else {
			throw new RuntimeException("Entity not found");
		}
		return warehouseMasterPojo;
	}

}

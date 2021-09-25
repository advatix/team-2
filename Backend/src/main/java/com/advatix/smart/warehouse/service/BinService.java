package com.advatix.smart.warehouse.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.advatix.smart.warehouse.dao.BinMasterRepository;
import com.advatix.smart.warehouse.dao.SeqGenRepository;
import com.advatix.smart.warehouse.entity.BinMaster;
import com.advatix.smart.warehouse.pojo.BinMasterPojo;
import com.google.zxing.WriterException;

@Service
public class BinService {
	
	@Autowired
	private BinMasterRepository repository;
	
	@Value("${qrcode-path}")
    private String qrCodePath;
	
	@Autowired
    private SeqGenRepository seqGenRepository;

	public List<BinMasterPojo> list() {
		List<BinMasterPojo> binMasterPojos=new ArrayList<>();
		List<BinMaster> list=repository.findAll();
		list.forEach(warehouse->{
			BinMasterPojo binMasterPojo=new BinMasterPojo();
			BeanUtils.copyProperties(warehouse, binMasterPojo);
			binMasterPojos.add(binMasterPojo);
		});
		return binMasterPojos;
	}

	public BinMasterPojo save(BinMasterPojo binMasterPojo) throws WriterException, IOException {
		int binId=binMasterPojo.getBinId();
	Optional<BinMaster> binMasterOptional=repository.findById(binId);
	BinMaster binMaster;
	if(binMasterOptional.isPresent()) {
		binMaster=binMasterOptional.get();
		BeanUtils.copyProperties(binMasterPojo, binMaster);
		binMaster.setUpdatedBy("Update");
		binMaster.setUpdatedOn(new Date());	
	}
	else {
		binMaster=new BinMaster();
		binMaster.setUpdatedBy("Add");
		binMaster.setUpdatedOn(new Date());
		BeanUtils.copyProperties(binMasterPojo, binMaster);
	}
	String qrId = seqGenRepository.auto_seq_gen("QRCODE")+"";
	binMaster.setBinScanCode(qrId);
	binMaster=repository.save(binMaster);
	String qrInfo="Bin Name="+binMaster.getBinName()+" Shelf Id="+binMaster.getBinShelfId()+" Bin Dimension="+binMaster.getBinDimension();
	QRCodeGenerator.generateQRCodeImage(qrInfo, 200, 200, qrCodePath+qrId+".png");
		return binMasterPojo;
	}

	public void deleteById(int id) {
		Optional<BinMaster> binMasterOptional=repository.findById(id);
		if(binMasterOptional.isPresent()) {
			repository.deleteById(id);
		}
	}

	public BinMasterPojo getById(int id) {
		BinMasterPojo binMasterPojo=new BinMasterPojo();
		Optional<BinMaster> binMasterOptional=repository.findById(id);
		if(binMasterOptional.isPresent()) {
			BinMaster binMaster=binMasterOptional.get();
			BeanUtils.copyProperties(binMaster, binMasterPojo);
		}
		else {
			throw new RuntimeException("Entity not found");
		}
		return binMasterPojo;
	}

}

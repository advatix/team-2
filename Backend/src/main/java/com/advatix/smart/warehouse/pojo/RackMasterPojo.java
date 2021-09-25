package com.advatix.smart.warehouse.pojo;

import java.io.Serializable;
import javax.persistence.*;

import lombok.Data;

import java.sql.Timestamp;

@Data
@Table(name="rack_master")
@NamedQuery(name="RackMaster.findAll", query="SELECT r FROM RackMaster r")
public class RackMasterPojo implements Serializable {
	private static final long serialVersionUID = 1L;
	private int rackId;
	private int noOfShelf;
	private String rackDimension;
	private byte rackFlag;
	private int rackFloorId;
	private String rackName;
	private int rackNo;
}
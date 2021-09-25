package com.advatix.smart.warehouse.pojo;

import java.io.Serializable;

import lombok.Data;


/**
 * The persistent class for the warehouse_master database table.
 * 
 */
@Data
public class WarehouseMasterPojo implements Serializable {
	private static final long serialVersionUID = 1L;
	private int warehouseId;
	private String address;
	private int maxFloors;
	private String warehouseDimension;
	private byte warehouseFlag;
	private String warehouseName;
}
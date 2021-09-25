package com.advatix.smart.warehouse.pojo;

import java.io.Serializable;

import lombok.Data;

@Data
public class FloorMasterPojo implements Serializable {
	private static final long serialVersionUID = 1L;
	private int floorId;
	private String floorDimension;
	private byte floorFlag;
	private String floorName;
	private int floorWarehouseId;
	private int maxRacks;
}
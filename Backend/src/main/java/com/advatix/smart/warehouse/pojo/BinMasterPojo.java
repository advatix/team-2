package com.advatix.smart.warehouse.pojo;

import java.io.Serializable;

import lombok.Data;


/**
 * The persistent class for the bin_master database table.
 * 
 */
@Data
public class BinMasterPojo implements Serializable {
	
	private static final long serialVersionUID = 1L;

	private int binId;

	private byte binAvailabiltyFlag;

	private String binDimension;

	private byte binFlag;

	private String binName;

	private int binNo;

	private String binScanCode;

	private int binShelfId;

	private int noOfProduct;
}
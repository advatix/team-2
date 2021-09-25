package com.advatix.smart.warehouse.pojo;

import java.io.Serializable;
import javax.persistence.*;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class ShelfMasterPojo implements Serializable {
	private static final long serialVersionUID = 1L;

	private int shelfId;
	private int noOfBins;
	private String shelfDimension;
	private byte shelfFlag;
	private String shelfName;
	private int shelfNo;
	private int shelfRackId;
}
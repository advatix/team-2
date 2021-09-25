package com.advatix.smart.warehouse.entity;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

import lombok.Data;


/**
 * The persistent class for the warehouse_master database table.
 * 
 */
@Entity
@Table(name="warehouse_master")
@Data
@NamedQuery(name="WarehouseMaster.findAll", query="SELECT w FROM WarehouseMaster w")
public class WarehouseMaster implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="warehouse_id")
	private int warehouseId;

	private String address;

	@Column(name="created_by")
	private String createdBy;

	@Column(name="created_on")
	private Date createdOn;

	@Column(name="max_floors")
	private int maxFloors;

	@Column(name="updated_by")
	private String updatedBy;

	@Column(name="updated_on")
	private Date updatedOn;

	@Column(name="warehouse_dimension")
	private String warehouseDimension;

	@Column(name="warehouse_flag")
	private byte warehouseFlag;

	@Column(name="warehouse_name")
	private String warehouseName;
}
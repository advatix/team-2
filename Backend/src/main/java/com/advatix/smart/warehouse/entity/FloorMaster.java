package com.advatix.smart.warehouse.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

import lombok.Data;


/**
 * The persistent class for the floor_master database table.
 * 
 */
@Entity
@Table(name="floor_master")
@Data
@NamedQuery(name="FloorMaster.findAll", query="SELECT f FROM FloorMaster f")
public class FloorMaster implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="floor_id")
	private int floorId;

	@Column(name="created_by")
	private String createdBy;

	@Column(name="created_on")
	private Date createdOn;

	@Column(name="floor_dimension")
	private String floorDimension;

	@Column(name="floor_flag")
	private byte floorFlag;

	@Column(name="floor_name")
	private String floorName;

	@Column(name="floor_warehouse_id")
	private int floorWarehouseId;

	@Column(name="max_racks")
	private int maxRacks;

	@Column(name="updated_by")
	private String updatedBy;

	@Column(name="updated_on")
	private Date updatedOn;
}
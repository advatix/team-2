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
 * The persistent class for the rack_master database table.
 * 
 */
@Entity
@Data
@Table(name="rack_master")
@NamedQuery(name="RackMaster.findAll", query="SELECT r FROM RackMaster r")
public class RackMaster implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="rack_id")
	private int rackId;

	@Column(name="created_by")
	private String createdBy;

	@Column(name="created_on")
	private Date createdOn;

	@Column(name="no_of_shelf")
	private int noOfShelf;

	@Column(name="rack_dimension")
	private String rackDimension;

	@Column(name="rack_flag")
	private byte rackFlag;

	@Column(name="rack_floor_id")
	private int rackFloorId;

	@Column(name="rack_name")
	private String rackName;

	@Column(name="rack_no")
	private int rackNo;

	@Column(name="updated_by")
	private String updatedBy;

	@Column(name="updated_on")
	private Date updatedOn;

}
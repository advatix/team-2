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
 * The persistent class for the shelf_master database table.
 * 
 */
@Entity
@Table(name="shelf_master")
@Data
@NamedQuery(name="ShelfMaster.findAll", query="SELECT s FROM ShelfMaster s")
public class ShelfMaster implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="shelf_id")
	private int shelfId;

	@Column(name="created_by")
	private String createdBy;

	@Column(name="created_on")
	private Date createdOn;

	@Column(name="no_of_bins")
	private int noOfBins;

	@Column(name="shelf_dimension")
	private String shelfDimension;

	@Column(name="shelf_flag")
	private byte shelfFlag;

	@Column(name="shelf_name")
	private String shelfName;

	@Column(name="shelf_no")
	private int shelfNo;

	@Column(name="shelf_rack_id")
	private int shelfRackId;

	@Column(name="updated_by")
	private String updatedBy;

	@Column(name="updated_on")
	private Date updatedOn;
}
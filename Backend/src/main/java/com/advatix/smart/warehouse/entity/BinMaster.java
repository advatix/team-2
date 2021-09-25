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
 * The persistent class for the bin_master database table.
 * 
 */
@Entity
@Table(name="bin_master")
@Data
@NamedQuery(name="BinMaster.findAll", query="SELECT b FROM BinMaster b")
public class BinMaster implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="bin_id")
	private int binId;

	@Column(name="bin_availabilty_flag")
	private byte binAvailabiltyFlag;

	@Column(name="bin_dimension")
	private String binDimension;

	@Column(name="bin_flag")
	private byte binFlag;

	@Column(name="bin_name")
	private String binName;

	@Column(name="bin_no")
	private int binNo;

	@Column(name="bin_scan_code")
	private String binScanCode;

	@Column(name="bin_shelf_id")
	private int binShelfId;

	@Column(name="created_by")
	private String createdBy;

	@Column(name="created_on")
	private Date createdOn;

	@Column(name="no_of_product")
	private int noOfProduct;

	@Column(name="updated_by")
	private String updatedBy;

	@Column(name="updated_on")
	private Date updatedOn;
}
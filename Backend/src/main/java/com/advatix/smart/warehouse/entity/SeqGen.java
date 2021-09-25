package com.advatix.smart.warehouse.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.NamedStoredProcedureQuery;
import javax.persistence.ParameterMode;
import javax.persistence.StoredProcedureParameter;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="seq_gen")
@NamedStoredProcedureQuery(name = "auto_seq_gen", 
procedureName = "auto_seq_gen",
parameters = {
   @StoredProcedureParameter(mode = ParameterMode.IN, name = "applicationid", type = String.class),
   @StoredProcedureParameter(mode = ParameterMode.OUT, name = "nextval", type = Integer.class)
})
@NamedQuery(name="SeqGen.findAll", query="SELECT s FROM SeqGen s")
@Data
public class SeqGen implements Serializable {
	private static final long serialVersionUID = 1L;
@Id
	@Column(name="application_id")
	private String applicationId;

	@Column(name="seq_no")
	private int seqNo;


}
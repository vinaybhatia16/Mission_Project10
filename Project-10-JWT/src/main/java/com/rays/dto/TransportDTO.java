package com.rays.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.rays.common.BaseDTO;

@Entity
@Table(name = "st_transport")
public class TransportDTO extends BaseDTO {


	@Column(name = "vehicle_type")
	private String vehicleType;

	@Column(name = "driver_name")
	private String driverName;

	@Column(name = "charges")
	private Double charges;

	public String getVehicleType() {
		return vehicleType;
	}

	public void setVehicleType(String vehicleType) {
		this.vehicleType = vehicleType;
	}

	public String getDriverName() {
		return driverName;
	}

	public void setDriverName(String driverName) {
		this.driverName = driverName;
	}

	public Double getCharges() {
		return charges;
	}

	public void setCharges(Double charges) {
		this.charges = charges;
	}

	@Override
	public String getValue() {
		return driverName;
	}

	@Override
	public String getUniqueKey() {
		return "driverName";
	}

	@Override
	public String getUniqueValue() {
		return driverName;
	}

	@Override
	public String getLabel() {
		return "Driver";
	}

	@Override
	public String getTableName() {
		return "Transport";
	}

}
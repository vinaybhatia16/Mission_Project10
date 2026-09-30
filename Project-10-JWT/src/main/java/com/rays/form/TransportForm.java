package com.rays.form;

import javax.persistence.Column;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.TransportDTO;

public class TransportForm extends BaseForm {

	@NotEmpty(message = "vehicle type is required")
	private String vehicleType;

	@NotEmpty(message = "driver name is required")
	private String driverName;

	@NotNull(message = "charges is required")
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
	public BaseDTO getDto() {
		TransportDTO dto = initDTO(new TransportDTO());
		dto.setVehicleType(vehicleType);
		dto.setDriverName(driverName);
		dto.setCharges(charges);

		return dto;
	}

}
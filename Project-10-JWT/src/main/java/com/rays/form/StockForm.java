package com.rays.form;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.StockDTO;

public class StockForm extends BaseForm {

	@NotEmpty(message = "stock id is required")
	private String stockId;

	@NotEmpty(message = "stock name is required")
	private String stockName;

	@NotNull(message = "price is required")
	private Double price;

	@NotNull(message = "quantity is required")
	private Integer quantity;

	public String getStockId() {
		return stockId;
	}

	public void setStockId(String stockId) {
		this.stockId = stockId;
	}

	public String getStockName() {
		return stockName;
	}

	public void setStockName(String stockName) {
		this.stockName = stockName;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	@Override
	public BaseDTO getDto() {
		StockDTO dto = initDTO(new StockDTO());
		dto.setStockId(stockId);
		dto.setStockName(stockName);
		dto.setPrice(price);
		dto.setQuantity(quantity);

		return dto;
	}

}
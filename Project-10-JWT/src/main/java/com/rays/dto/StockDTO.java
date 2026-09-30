package com.rays.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.rays.common.BaseDTO;

@Entity
@Table(name = "st_stock")
public class StockDTO extends BaseDTO {

	@Column(name = "stockId")
	private String stockId;

	@Column(name = "stockname")
	private String stockName;

	@Column(name = "price")
	private Double price;

	@Column(name = "quantity")
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
	public String getValue() {
		return stockId;
	}

	@Override
	public String getUniqueKey() {
		return "stockId";
	}

	@Override
	public String getUniqueValue() {
		return stockId;
	}

	@Override
	public String getLabel() {
		return "Stock";
	}

	@Override
	public String getTableName() {
		return "Stock";
	}

}
package com.rays.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.stereotype.Repository;

import com.rays.common.BaseDAOImpl;
import com.rays.dto.StockDTO;

@Repository
public class StockDAOImpl extends BaseDAOImpl<StockDTO> implements StockDAOInt {

	@Override
	public Class<StockDTO> getDTOClass() {
		return StockDTO.class;
	}

	@Override
	protected List<Predicate> getWhereClause(StockDTO dto, CriteriaBuilder builder, Root<StockDTO> qRoot) {
		List<Predicate> whereCondition = new ArrayList<Predicate>();

		if (!isEmptyString(dto.getStockName())) {
			whereCondition.add(builder.like(qRoot.get("stockName"), dto.getStockName() + "%"));
		}

		if (isNotNull(dto.getStockId())) {
			whereCondition.add(builder.like(qRoot.get("stockId"), dto.getStockId() + "%"));
		}

		return whereCondition;
	}

}
package com.rays.service;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.rays.common.BaseServiceImpl;
import com.rays.dao.StockDAOInt;
import com.rays.dto.StockDTO;

@Service
@Transactional
public class StockServiceImpl extends BaseServiceImpl<StockDTO, StockDAOInt> implements StockServiceInt {

}
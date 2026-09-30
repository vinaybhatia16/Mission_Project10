package com.rays.service;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.rays.common.BaseServiceImpl;
import com.rays.dao.TransportDAOInt;
import com.rays.dto.TransportDTO;

@Service
@Transactional
public class TransportServiceImpl extends BaseServiceImpl<TransportDTO, TransportDAOInt> implements TransportServiceInt{

}
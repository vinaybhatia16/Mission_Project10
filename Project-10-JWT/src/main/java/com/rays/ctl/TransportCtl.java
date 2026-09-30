package com.rays.ctl;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.dto.TransportDTO;
import com.rays.form.TransportForm;
import com.rays.service.TransportServiceInt;

@RestController
@RequestMapping(value = "Transport")
public class TransportCtl extends BaseCtl<TransportForm, TransportDTO, TransportServiceInt>{
	
	

}
package com.rays.ctl;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.dto.StockDTO;
import com.rays.form.StockForm;
import com.rays.service.StockServiceInt;

@RestController
@RequestMapping(value = "stock")
public class StockCtl extends BaseCtl<StockForm, StockDTO, StockServiceInt> {

}
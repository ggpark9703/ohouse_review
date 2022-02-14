package com.ohouse.review.controller;

import java.util.Map;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ohouse.review.mapper.Product_Mapper;

@MapperScan("com.ohouse.review.mapper")
@RestController
public class DbRestController {

		@Autowired
		Product_Mapper testMapper;
		
		@RequestMapping(value="/products",method = RequestMethod.GET)
		public Map<String, String> startPoint(@RequestParam("product_name") String product_name) {
			
			
			return testMapper.getProductInfo(product_name);
		}
}

package com.ohouse.review.mapper;

import java.util.Map;

import org.apache.ibatis.annotations.Param;

public interface Product_Mapper {
	Map<String,String> getProductInfo(@Param("product_title")String product_title);
}

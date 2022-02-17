package com.ohouse.review.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ohouse.review.service.SearchService;
@RestController
public class RecommendController {
	@Autowired
	private SearchService searchService;
	
	@RequestMapping(value="/api",method = RequestMethod.GET)
	public String searchCorrelation(@RequestParam("category") String category,@RequestParam("filter") String filter) {
		String result = searchService.getCorrelation(category,filter);
		return result;
	}
	@RequestMapping(value="/reviews",method = RequestMethod.GET)
	public String reviewData(@RequestParam("product_keyword") String product_keyword,@RequestParam("product_category") String product_category,
							@RequestParam("product_name") String product_name) {
		String reviewList = searchService.getReviewData(product_name, product_category, product_keyword);
		return reviewList;
		
	}
	
}

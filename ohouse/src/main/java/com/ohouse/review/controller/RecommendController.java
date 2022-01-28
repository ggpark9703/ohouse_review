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
	public String searchQuery(@RequestParam("category") String category) {
		String result = searchService.getCorrelation(category);
		return result;
	}
	@RequestMapping(value="/reviews",method = RequestMethod.GET)
	public String reviewData(@RequestParam("keyword") String keyword,@RequestParam("category") String category) {
		String reviewList = searchService.getReviewData(keyword,category);
		return reviewList;
		
	}
 
}

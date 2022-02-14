package com.ohouse.review.service;

import org.json.simple.JSONArray;

public interface KeywordService {

	String  getWords(String product);
	
	String getReviewData(String product_keyword,String product_category, String product_name);
	
	
	
}

package com.ohouse.review.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ohouse.review.service.KeywordService;

@RestController
public class KAController {
	
	@Autowired
	private KeywordService keywordService;
	
	//키워드 데이터
	  @RequestMapping(value="/clouddata.do",method = RequestMethod.GET, produces ="application/text; charset=UTF-8") 
	  public String wordQuery(@RequestParam("product") String product) { 
	  String result = keywordService.getWords(product); 
	  return result;
	  }
	  
	  
	  //상세 리뷰 데이터
	  @RequestMapping(value="/getreview.do",method = RequestMethod.GET, produces ="application/text; charset=UTF-8") 
	  public String getReviewQuery (String product_keyword,String product_category, String product_name) { 
	  String resultList = keywordService.getReviewData(product_keyword, product_category, product_name);
	  return resultList; 
	  }
	 
	
}

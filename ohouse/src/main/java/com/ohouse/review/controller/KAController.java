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
	  @RequestMapping(value="/wpi",method = RequestMethod.GET, produces ="application/text; charset=UTF-8") 
	  public String wordQuery(@RequestParam("product") String product) { 
	  String result = keywordService.getWords(product); 
	  return result;
	  }
	  
	 
	
}

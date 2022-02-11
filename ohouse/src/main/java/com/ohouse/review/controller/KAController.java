package com.ohouse.review.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ohouse.review.service.KeywordService;

//기본 Controller 설정으로는 안됨 RestController로 데이터만 받아오게 어노테이션 추가
@RestController
public class KAController {
	
	//Service호출
	@Autowired
	KeywordService keywordService;
	@RequestMapping(value="/wordcloud.do",method = RequestMethod.GET)
	public String wordQuery(@RequestParam("product") String product) {
		/*
		 * // url 寃쎈줈 product_title 湲곗� $._word �뙣�떙 String url =
		 * "http://10.10.0.4:8393/api/v10/search/facets?collection=T1_OZIP2022&output=application/json&facet={%22namespace%22:%22keyword%22,%22count%22:%22100%22,%22id%22:%22$._word%22}&query=(keyword::%22product_title%22/%22%EB%AF%B8%EC%97%98%EB%A0%88%201%EB%8B%A8%20%EC%8A%A4%ED%83%A0%EB%93%9C%20%ED%96%89%EA%B1%B0%204colors%22";
		 * return url;
		 */
		
		//1. Service호출 더미값 입력 추후에 능동적으로 파라미터값 받도록 해주기
		String json_keyword = keywordService.getWords(product);
		return json_keyword;
	}

}

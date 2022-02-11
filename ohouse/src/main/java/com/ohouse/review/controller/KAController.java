package com.ohouse.review.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.ohouse.review.service.KeywordService;


public class KAController {
	
	@Autowired
	
	@RequestMapping(value="/wordcloud.do",method = RequestMethod.GET, produces = "application/text; charset=UTF-8")
	public String wordQuery(@RequestParam("product") String product) {
		// url 경로 product_title 기준 $._word 패싯
		String url = "http://10.10.0.4:8393/api/v10/search/facets?collection=T1_OZIP2022&output=application/json&facet={%22namespace%22:%22keyword%22,%22count%22:%22100%22,%22id%22:%22$._word%22}&query=(keyword::%22product_title%22/%22%EB%AF%B8%EC%97%98%EB%A0%88%201%EB%8B%A8%20%EC%8A%A4%ED%83%A0%EB%93%9C%20%ED%96%89%EA%B1%B0%204colors%22";
		return url;
	}

}

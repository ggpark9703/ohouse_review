package com.ohouse.review.service;

//작성자: 박강균
//작성일: 2022-01-24
//설명:이 페이지는 메인 검색 Service 인터페이스 입니다. WEX api를 활용해서 데이터를 받을 때 사용 합니다.
public interface SearchService {

	String getCorrelation(String category,String filter);
	
	String getReviewData(String product_name,String product_category,String product_keyword);
	
}

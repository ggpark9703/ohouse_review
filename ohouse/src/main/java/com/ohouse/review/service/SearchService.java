package com.ohouse.review.service;

//�ۼ���: �ڰ���
//�ۼ���: 2022-01-24
//����:�� �������� ���� �˻� Service �������̽� �Դϴ�. WEX api�� Ȱ���ؼ� �����͸� ���� �� ��� �մϴ�.
public interface SearchService {

	String getCorrelation(String category,String filter);
	
	String getReviewData(String product_name,String product_category,String product_keyword);
	
}

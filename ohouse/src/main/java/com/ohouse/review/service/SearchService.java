package com.ohouse.review.service;

//�ۼ���: �ڰ���
//�ۼ���: 2022-01-24
//����:�� �������� ���� �˻� Service �������̽� �Դϴ�. WEX api�� Ȱ���ؼ� �����͸� ���� �� ��� �մϴ�.
public interface SearchService {

	String getCorrelation(String category);
	
	String getReviewData(String keyword,String category);
	
}

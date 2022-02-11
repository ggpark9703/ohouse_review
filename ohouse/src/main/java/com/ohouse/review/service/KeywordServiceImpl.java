package com.ohouse.review.service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.nio.charset.Charset;

import org.springframework.stereotype.Service;

@Service
public class KeywordServiceImpl implements KeywordService {
	
	@Override
	public String getWords(String product) {
		StringBuilder sb = new StringBuilder();
		URLConnection urlConn = null;
		InputStreamReader in = null;
		
		// product 값만 입력
		String myURL = "http://10.10.0.4:8393/api/v10/search/facets?collection=T1_OZIP2022&output=application/json&facet={%22namespace%22:%22keyword%22,%22count%22:%22100%22,%22id%22:%22$._word%22}&query=(keyword::/"+"product_title"+product+")";
		
		try {
			URL url = new URL(myURL);
			urlConn = url.openConnection();
			if(urlConn != null)
				urlConn.setReadTimeout(60*1000);
			if(urlConn != null && urlConn.getInputStream() != null) {
				in = new InputStreamReader(urlConn.getInputStream(),Charset.forName("UTF-8"));
				BufferedReader bufReader = new BufferedReader(in);
				if(bufReader != null) {
					int cp;
					while((cp = bufReader.read())!= -1) {
						sb.append((char)cp);
					}
					bufReader.close();
				}
			}
			in.close();
		}catch(Exception e) {
			throw new RuntimeException("Exception URL:"+ myURL,e);
		}
		String decode = sb.toString();
		return decode;
	}

	@Override
	public String getReviewData(String label,String text) {
		StringBuilder sb = new StringBuilder();
		URLConnection urlConn = null;
		InputStreamReader in = null;
		
		//항목 별 리뷰데이터
		String myURL = "";
		
		try {
			URL url = new URL(myURL);
			urlConn = url.openConnection();
			if(urlConn != null)
				urlConn.setReadTimeout(60*1000);
			
			if(urlConn != null && urlConn.getInputStream() != null) {
				in = new InputStreamReader(urlConn.getInputStream(),Charset.forName("UTF-8"));
				BufferedReader bufReader = new BufferedReader(in);
			
				if(bufReader != null) {
					int cp;
					while((cp = bufReader.read())!= -1) {
						sb.append((char)cp);
					}
					bufReader.close();
				}
			}
			in.close();
		}catch(Exception e) {
			throw new RuntimeException("Exception URL:"+ myURL,e);
		}
		String decode = sb.toString();
		return decode;
	}

}

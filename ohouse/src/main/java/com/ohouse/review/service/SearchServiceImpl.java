package com.ohouse.review.service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.nio.charset.Charset;

import org.springframework.stereotype.Service;

@Service
public class SearchServiceImpl implements SearchService {

	@Override
	public String getCorrelation(String category,String filter) {
		StringBuilder sb = new StringBuilder();
		URLConnection urlConn = null;
		InputStreamReader in = null;
		String myURL = "http://wex.test.com:8393/api/v10/search/facet?collection=T1_OZIP2022&facet=%7B%22namespace%22%3A%22keyword%22%2C%22count%22%3A%225%22%2C%22id%22%3A%22%24.product_title%22%7D&query="+filter+"AND%20(keyword%3A%3A%2F%22product_category%22%2F%22"+category+"%22)&output=application/json";
		
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
	public String getReviewData(String keyword,String category) {
		StringBuilder sb = new StringBuilder();
		URLConnection urlConn = null;
		InputStreamReader in = null;
		
		String myURL = "http://wex.test.com:8393/api/v10/search?collection=T1_OZIP2022&facet=%7B%22namespace%22%3A%22keyword%22%2C%22count%22%3A%225%22%2C%22id%22%3A%22$.product_title%22%7D&query=(idx_child:*)%20AND%20(keyword::/%22product_category%22/"+category+")%20AND%20(product_title:"+keyword+")&output=application/json";
		
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

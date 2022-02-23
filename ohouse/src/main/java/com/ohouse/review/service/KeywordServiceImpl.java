package com.ohouse.review.service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;
import java.nio.charset.Charset;

import org.springframework.stereotype.Service;

@Service
public class KeywordServiceImpl implements KeywordService {
	
	
	@Override
	public String getWords(String product) {
		StringBuilder sb = new StringBuilder();
		URLConnection urlConn = null;
		InputStreamReader in = null;
		
		// product 부분을 변수로 받음
		String myURL = "http://10.10.0.4:8393/api/v10/search/facets?collection=T1_OZIP2022&output=application/json&facet={%22namespace%22:%22keyword%22,%22count%22:%22100%22,%22id%22:%22$._word%22}&query=(keyword::/추천/디자인%20OR%20keyword::/추천/가격%20OR%20keyword::/추천/내구성)%20AND%20(keyword::/카테고리/제품명/%22"+product+"%22)";
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
	public String getReviewData(String product, String thisword)  {
		StringBuilder sb = new StringBuilder();
		URLConnection urlConn = null;
		InputStreamReader in = null;
		String myURL = "http://10.10.0.4:8393/api/v10/search?results=10&collection=T1_OZIP2022&output=application/json&query=(keyword::/추천/디자인%20OR%20keyword::/추천/가격%20OR%20keyword::/추천/내구성)%20AND%20(keyword::/카테고리/제품명/%22"+product+"%22)%20AND%20(keyword::/%22Part%20of%20Speech%22/%22"+thisword+"%22)";

		System.out.println(myURL);
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

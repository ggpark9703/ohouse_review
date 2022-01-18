package com.ohouse.review.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {
	@RequestMapping("/Main")
	public String MainPage(HttpServletRequest request,HttpServletResponse response) {
		return "MainPage";
	}
	@RequestMapping("/keyword")
	public String KeywordPage(HttpServletRequest request,HttpServletResponse response) {
		return "KewordAnalyticsPage";
	}
	@RequestMapping("/recommend")
	public String RecommendPage(HttpServletRequest request,HttpServletResponse response) {
		return "Recommendpage";
	}
	
	
}

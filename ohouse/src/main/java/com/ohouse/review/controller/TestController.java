package com.ohouse.review.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class TestController {
	@RequestMapping("/test")
	@CrossOrigin(origins="*")
	public String test(HttpServletRequest request,HttpServletResponse response) {
		return "MainFrame";
	}
	@RequestMapping("/ajaxTest")
	@CrossOrigin(origins="*")
	public String ajax(HttpServletRequest request,HttpServletResponse response) {
		return "NewFile";
	}
}
